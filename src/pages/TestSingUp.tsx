import { MaterialIcons } from '@expo/vector-icons';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import {
    AsyncStorage,
    Button,
    Dimensions, KeyboardAvoidingView,
    ScrollView, StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { HeaderWithOutMenu, SafeAreaView } from '../Components';
import { BlueButton } from '../Components/BlueButton';
import api from '../services/api';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function TestSingUp(){
    const email = 'vinicius.genesio@usp.br'
    const name = 'testMobile'
    const password = 'Teste@123'
    const cpf = '46471711832'
    const workAddress = '130'
    const homeAddress = '13050023'
    const neighborhood = 'jardim do lago'
    const houseNumber = 277
    const HealthPlan = false
    //const birthDate = '29/06/1997'
    //const date = new Date(birthDate)
    const allowSMS = true
    //const text = "2019-26-09";
    //const regex = /(\d{2})-(\d{2})-(\d{4})/g;
    //console.log(text.replace(regex, "$2/$3/$1"));

    //Seting useState and useRef to Date number
    const[isDateFocused, setIsDateFocused] = useState(false)
    const [isDateFilled, setIsDateFilled] = useState(false)
    const [dateTest, setDate] = useState<string>()
    const dateRef = useRef(null)

    //Seting useState and useRef to Cellphone number
    const[isPhoneFocused, setIsPhoneFocused] = useState(false)
    const [isPhoneFilled, setIsPhoneFilled] = useState(false)
    const [phone, setPhone] = useState<string>()
    const phoneRef = useRef(null)
    
    //Functions handle for Date of birth
    function handleInputDateBlur(){
        setIsDateFocused(false)
        setIsDateFilled(!!dateTest)
    }

    function handleInputDateFocus(){
        setIsDateFocused(true)
    }

    function handleInputDateChange(value: string){
        setIsDateFilled(!!value)
        setDate(value)
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

    async function Submit() {
        const response = await api.post('/patients/signup',{
            email: email,
            name: name,
            CPF: cpf,
            workAddress: workAddress,
            homeAddress: homeAddress,
            neighborhood: neighborhood,
            houseNumber: houseNumber,
            hasHealthPlan: HealthPlan,
            //dateOfBirth: date,
            dateOfBirth: dateRef.current.getRawValue(),
            password: password,
            allowSMS: allowSMS
        })

        alert(response.data.token)
    }

    function DataTest(){
        alert(dateRef.current.getRawValue())
    }

    function PhoneTest(){
        alert(phoneRef.current.getRawValue())
    }
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Button
                    title="Submit"
                    onPress={Submit}
                />
                <View style={styles.button}>
                    <TextInputMask
                        placeholder="Data de nascimento: DD/MM/AAAA"
                        type = {'datetime'}
                        options ={{
                            format: 'DD/MM/YYYY'
                        }}
                        value ={dateTest}
                        onBlur={handleInputDateBlur}
                        onFocus = {handleInputDateFocus}
                        onChangeText = {handleInputDateChange}
                        ref={dateRef}
                                    
                    />

                    <TextInputMask
                        placeholder="Numero de Telefone"
                        type = {'cel-phone'}
                        textContentType = 'telephoneNumber'
                        options ={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value ={phone}
                        onBlur={handleInputPhoneBlur}
                        onFocus = {handleInputPhoneFocus}
                        onChangeText = {handleInputPhoneChange}
                        ref={phoneRef}
                        
                    />
                    <Button
                        title="DataTest"
                        onPress={DataTest}
                    />
                    <Button
                        title="Phone"
                        onPress={PhoneTest}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignContent: 'center'
    },
    button: {
        padding: 20
    }
})