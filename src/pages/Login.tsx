import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React, { useRef, useState, useContext } from 'react';
import {
    Alert,
    Dimensions, Keyboard, KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import { BlueButton, SafeAreaView } from '../Components';
import api from '../services/api';
import {useAuth} from '../contexts/Auth'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Login(){
    //Seting function singIn with use Context
    const {signIn, signed} = useAuth()

    //Seting useState and useRef to CPF
    const[isCPFFocused, setIsCPFFocused] = useState(false)
    const [isCPFFilled, setIsCPFFilled] = useState(false)
    const [cpf, setCPF] = useState<string>()
    const cpfRef = useRef(null)

    //Seting useState and useRef to Password
    const[isPasswordFocused, setIsPasswordFocused] = useState(false)
    const [isPasswordFilled, setIsPasswordFilled] = useState(false)
    const [password, setPassword] = useState<string>('')
    const passwordRef = useRef(null)

    //Creating const for navigation
    const navigation = useNavigation()

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

    /*
    async function getUser(){
        try {
            const jsonValue = await AsyncStorage.getItem('@User')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
          } catch(e) {
              return null
          }
    }

    async function getAccessToken(){
        try {
            const value = await AsyncStorage.getItem('@AccessToken')
            if(value !== null) {
                return value
            }
          } catch(e) {
              return null
          }
    }

    async function getRefreshToken(){
        try {
            const jsonValue = await AsyncStorage.getItem('@RefreshToken')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
          } catch(e) {
            // error reading value
          }
    }
    

    async function handleProfile(){
        const patientId = await getUser()
        const token = await getAccessToken()
        const refreshToken = await getRefreshToken()

        console.log("Exibindo AsyncStorage")
        console.log(patientId)
        console.log(token)
        console.log(refreshToken)
        navigation.navigate('Profile')
    }
    */
    
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
    /*

    async function saveUserAndTokens(req: any){
        //Saving Patient
        try {
            const patient = JSON.stringify(req.patient)
            await AsyncStorage.setItem('@User', patient)
          } catch (e) {
            // saving error
          }

          //Saving access token
          try {
            await AsyncStorage.setItem('@AccessToken', req.token)
          } catch (e) {
            // saving error
          }

          //Saving refresh token
          try {
            const refreshToken = JSON.stringify(req.refreshToken)
            await AsyncStorage.setItem('@RefreshToken', refreshToken)
          } catch (e) {
            // saving error
          }
    }
    */
    //Checks if all inputs are valid
    async function Check(){
        //Check CPF
        if(!cpfRef?.current.isValid()){
            Alert.alert(
                "Erro",
                "Por favor insira um CPF válido",
                [
                    {
                        text: "Ok",
                        onPress: () => (resetCPF())
                    }
                ]
            )         
            return
        }

        if(!validatePassword(String(password))){
            Alert.alert(
                "Erro",
                "Por favor insira uma senha valida",
                [
                    {
                        text: "Ok",
                        onPress: () => (resetPassword())
                    }
                ]
            )
            return
        }

        //Submit data to database
        try{            
            const response = await signIn(cpfRef?.current.getRawValue(), password)
            const user = response.data
            console.log("Se esta logado: "+ signed)
            /*
            console.log(user)
            console.log("Pós Obj")
            console.log(user.patientId)
            console.log(user.token)
            console.log(user.refreshToken)
            */
            //await saveUserAndTokens(user)
            Alert.alert(
                "Login Efetuado",
                "Bem vindo",
                [
                    {
                        text: "Ok",
                    }
                ]
            )
        }catch(error){
            Alert.alert(
                "Erro ao efetuar o login",
                error.response.data.message,
                [
                    {
                        text: "Ok"
                    }
                ]
            )
        }

        return
    }
    
    function handleSignUp(){
        navigation.navigate('SignUP')
    }

    return(
        <SafeAreaView>
            <KeyboardAvoidingView  
                style={styles.container}
                //behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                >
                    <View style={styles.header}>
                        <Text style={styles.welcome}>Bem-Vindo ao</Text>
                        <Text style={styles.appName}>MoniPaEp</Text>
                    </View>
                
                    <View style={styles.container}>
                        <View style={styles.warning}>
                            <Text style={styles.warningText}>* Obrigatório </Text>
                        </View>
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
                        <View style={styles.warning}>
                                <Text style={styles.warningText}>* Obrigatório </Text>
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
                        <View style={styles.footer}>
                            <TouchableOpacity>
                                <Text style={styles.textLink}>Esqueceu sua senha?</Text>
                            </TouchableOpacity>
                            <View style={styles.button}>
                                <BlueButton
                                    title="Entrar"
                                    onPress={Check}
                                />
                            </View>
                            <View style={styles.textAndLink}>
                                <Text style={styles.text}>Não possui uma conta? </Text>
                                <TouchableOpacity
                                    onPress={handleSignUp}
                                >
                                    <Text style={styles.textLink}>Cadastre-se</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
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
    warning:{
        left: Dimensions.get('window').width * 0.33,
        paddingTop: 10
    },
    warningText:{
        fontFamily: fonts.text,
        fontSize: 8,
        color: colors.red
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
    footer:{
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLink:{
        color: colors.blue_dark1,
        fontFamily: fonts.generic,
        fontSize: 12
    },
    textAndLink:{
        flexDirection: 'row',
        padding: 70
    },
    text:{
        fontFamily: fonts.generic,
        fontSize: 12,
        color: colors.gray_dark3
    },
    button:{
        //marginTop: 40,
        width: Dimensions.get('window').width * 0.9,
        padding: 20,
    }
   
  });