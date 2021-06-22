import { InputOutline, InputStandard } from 'react-native-input-outline';
import React, { useRef, useState } from 'react';
import {TextInputMask} from 'react-native-masked-text'
import {
    KeyboardAvoidingView, 
    StyleSheet, 
    Text, 
    TextInput, 
    View,
    Platform,
    Button
} from 'react-native';
import { Header, SafeAreaView } from '../Components';
import colors from '../styles/colors';
import { MaterialIcons } from '@expo/vector-icons'; 
import fonts from '../styles/fonts';

export function SignUp(){
    //Seting useState and useRef to email
    const[isEmailFocused, setIsEmailFocused] = useState(false)
    const [isEmailFilled, setIsEmailFilled] = useState(false)
    const [email, setEmail] = useState<string>()

    //Seting useState to Name
    const[isNameFocused, setIsNameFocused] = useState(false)
    const [isNameFilled, setIsNameFilled] = useState(false)
    const [name, setName] = useState<string>()

    //Seting useState and useRef to CPF
    const[isCPFFocused, setIsCPFFocused] = useState(false)
    const [isCPFFilled, setIsCPFFilled] = useState(false)
    const [cpf, setCPF] = useState<string>()
    const cpfRef = useRef(null)

    //Seting useState and useRef to Cellphone number
    const[isPhoneFocused, setIsPhoneFocused] = useState(false)
    const [isPhoneFilled, setIsPhoneFilled] = useState(false)
    const [phone, setPhone] = useState<string>()
    const phoneRef = useRef(null)
    
    //Functions handle for email
    function handleInputEmailBlur(){
        setIsEmailFocused(false)
        setIsEmailFilled(!!email)
    }

    function handleInputEmailFocus(){
        setIsEmailFocused(true)
    }

    function handleInputEmailChange(value: string){
        setIsEmailFilled(!!value)
        setEmail(value)
    }

    //Functions handle for name
    function handleInputNameBlur(){
        setIsNameFocused(false)
        setIsNameFilled(!!name)
    }

    function handleInputNameFocus(){
        setIsNameFocused(true)
    }

    function handleInputNameChange(value: string){
        setIsNameFilled(!!value)
        setName(value)
    }

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

    //Functions handle for Phone number
    function handleInputPhoneBlur(){
        setIsPhoneFocused(false)
        setIsPhoneFilled(!!phone)
    }

    function handleInputPhoneFocus(){
        setIsPhoneFocused(true)
    }

    function handleInputPhoneChange(value: string){
        setIsPhoneFilled(!!value)
        setPhone(value)
    }

    
    function Check(){
        if(cpfRef != null){
            const unmask = cpfRef?.current.getRawValue()
            const cpfIsValid = cpfRef?.current.isValid()
            const unmaskphone = phoneRef?.current.getRawValue()
            const phoneIsValid = phoneRef?.current.isValid()
            alert(phoneIsValid)
        }   
    }

    return(
        <SafeAreaView>
            <Header/> 
            <KeyboardAvoidingView  
                style={styles.container}
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >                
                <View style={styles.container}>
                    <Text>Test input text</Text>
                    <View style={[
                                styles.inputField,
                                (isEmailFocused || isEmailFilled) && 
                                {borderColor: colors.blue}
                            ]}
                    >
                        <TextInput
                            placeholder="Email"
                            style={styles.input}
                            onBlur={handleInputEmailBlur}
                            onFocus = {handleInputEmailFocus}
                            onChangeText = {handleInputEmailChange}
                        />
                        <MaterialIcons 
                            name="email" 
                            size={24}

                            color = "gray"
                            style={[
                                styles.Icon,
                                (isEmailFocused || isEmailFilled) && 
                                {color: colors.blue}
                            ]}    
                        />
                    </View>
                    <View style={[
                                styles.inputField,
                                (isNameFocused || isNameFilled) && 
                                {borderColor: colors.blue}
                            ]}
                    >
                        <TextInput
                            placeholder="Name"
                            style={styles.input}
                            onBlur={handleInputNameBlur}
                            onFocus = {handleInputNameFocus}
                            onChangeText = {handleInputNameChange}
                        />
                        <MaterialIcons 
                            name="person" 
                            size={24}

                            color = "gray"
                            style={[
                                styles.Icon,
                                (isNameFocused || isNameFilled) && 
                                {color: colors.blue}
                            ]}    
                        />
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
                    <View style={[
                                styles.inputField,
                                (isCPFFocused || isCPFFilled) && 
                                {borderColor: colors.blue}
                            ]}
                    >
                        <TextInputMask
                            placeholder="Numero de Telefone"
                            type = {'cel-phone'}
                            options ={{
                                maskType: 'BRL',
                                withDDD: true,
                                dddMask: '(99) '
                            }}
                            value ={phone}
                            style={styles.input}
                            onBlur={handleInputPhoneBlur}
                            onFocus = {handleInputPhoneFocus}
                            onChangeText = {handleInputPhoneChange}
                            ref={phoneRef}
                            
                        />
                        <MaterialIcons 
                            name="phone-android" 
                            size={24}

                            color = "gray"
                            style={[
                                styles.Icon,
                                (isCPFFocused || isCPFFilled) && 
                                {color: colors.blue}
                            ]}    
                        />
                    </View> 
                    <Button
                        title= "Check"
                        onPress={Check}
                    />
                </View>
                </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
    }
   
  });