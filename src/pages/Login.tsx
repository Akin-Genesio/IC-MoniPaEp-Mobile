import { MaterialIcons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import {
    Button, Dimensions, KeyboardAvoidingView,
    Platform, ScrollView, StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { BlueButton, OutlineBlueButton, SafeAreaView } from '../Components';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Login(){
    //Seting useState and useRef to CPF
    const[isCPFFocused, setIsCPFFocused] = useState(false)
    const [isCPFFilled, setIsCPFFilled] = useState(false)
    const [cpf, setCPF] = useState<string>()
    const cpfRef = useRef(null)

    //Seting useState and useRef to Password
    const[isPasswordFocused, setIsPasswordFocused] = useState(false)
    const [isPasswordFilled, setIsPasswordFilled] = useState(false)
    const [password, setPassword] = useState<string>()
    const passwordRef = useRef(null)

    //Functions handle for CPF
    function handleInputCPFBlur(){
        setIsCPFFocused(false)
        setIsCPFFilled(!!cpf)
    }

    function handleInputCPFFocus(){
        setIsCPFFocused(true)
    }

    function handleInputCPFChange(value: string){
        setIsCPFFilled(!!value)
        setCPF(value)
    }
    //Functions handle for Password
    function handleInputPasswordBlur(){
        setIsPasswordFocused(false)
        setIsPasswordFilled(!!password)
    }

    function handleInputPasswordFocus(){
        setIsPasswordFocused(true)
    }

    function handleInputPasswordChange(value: string){
        setIsPasswordFilled(!!value)
        setPassword(value)
    }

    //Reset CPF states
    function resetCPF(){
        setCPF('')
        setIsCPFFocused(false)
        setIsCPFFilled(false)
    }

    //Reset Password states
    function resetPassword(){
        setPassword('')
        setIsPasswordFocused(false)
        setIsPasswordFilled(false)
    }

    //Checks if password has Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character
    function validatePassword(password: string){
        // Regex Check
        var objER = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
        if(password.length > 0)
            {
                if(objER.test(password))
                    return true;
                else
                    return false;
            }
        else
            return false;
    }

    //Checks if all inputs are valid
    function Check(){
        //Check CPF
        if(!cpfRef?.current.isValid()){
            alert("Por favor insira um cpf valido.")
            resetCPF()
            return
        }

        if(!validatePassword(String(password))){
            alert("Por favor insira uma senha valida")
            resetPassword()
            return
        }

        alert("Passou")
        return
    }

    return(
        <SafeAreaView>
            <View style={styles.header}>
                <Text style={styles.welcome}>Bem-Vindo ao</Text>
                <Text style={styles.appName}>MoniPaEp</Text>
            </View>
            <KeyboardAvoidingView  
                style={styles.container}
                //behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.container}>
                    <View style={[
                            styles.inputField,
                            (isCPFFocused || isCPFFilled) && 
                            {borderColor: colors.blue}
                        ]}
                    >
                        <TextInputMask
                            placeholder="CPF"
                            type = {'cpf'}
                            value ={cpf}
                            style={styles.input}
                            onBlur={handleInputCPFBlur}
                            onFocus = {handleInputCPFFocus}
                            onChangeText = {handleInputCPFChange}
                            ref={cpfRef}
                            
                        />
                        <MaterialIcons 
                            name="person-outline" 
                            size={24}

                            color = "gray"
                            style={[
                                styles.Icon,
                                (isCPFFocused || isCPFFilled) && 
                                {color: colors.blue}
                            ]}    
                        />
                    </View>
                    <View style={[
                            styles.inputField,
                            (isPasswordFocused || isPasswordFilled) && 
                            {borderColor: colors.blue}
                        ]}
                    >
                        <TextInput
                            placeholder="Senha"
                            style={styles.input}
                            value = {password}
                            textContentType = 'newPassword'
                            secureTextEntry = {true}
                            onBlur={handleInputPasswordBlur}
                            onFocus = {handleInputPasswordFocus}
                            onChangeText = {handleInputPasswordChange}
                        />
                        <MaterialIcons 
                            name="lock" 
                            size={24}

                            color = "gray"
                            style={[
                                styles.Icon,
                                (isPasswordFocused || isPasswordFilled) && 
                                {color: colors.blue}
                            ]}    
                        />
                    </View>
                    <View style={styles.button}>
                        <BlueButton
                            title="Entrar"
                            onPress={Check}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        //flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Dimensions.get('window').height * 0.1,
    },
    container: {
        //flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Dimensions.get('window').height * 0.03,
    },
    welcome:{
        fontFamily: fonts.welcome,
        fontSize: 24,
        color: colors.blue
    },
    appName:{
        fontFamily: fonts.appName,
        fontSize: 32,
        color: colors.blue
    },
    inputField: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: colors.gray,
        padding: 10
        
    },
    Icon:{
        padding: 10,
    },
    input:{
        color: colors.gray_dark3,
        width: '70%',
        fontFamily: fonts.text,
        fontSize: 16,
        //textAlign: 'center'
    },
    label:{
        fontFamily: fonts.generic  
    },
    answer: {
        fontFamily: fonts.text
    },
    button:{
        //marginTop: 40,
        width: 328,
        padding: 40,
    }
   
  });