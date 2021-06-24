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
    const emailRef = useRef(null)

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

    //Seting useState and useRef to Date number
    const[isDateFocused, setIsDateFocused] = useState(false)
    const [isDateFilled, setIsDateFilled] = useState(false)
    const [date, setDate] = useState<string>()
    const dateRef = useRef(null)

    //Seting useState and useRef to HomeAddress
    const[isHomeAddressFocused, setIsHomeAddressFocused] = useState(false)
    const [isHomeAddressFilled, setIsHomeAddressFilled] = useState(false)
    const [homeAddress, setHomeAddress] = useState<string>()
    const homeAddressRef = useRef(null)

    //Seting useState and useRef to WorkAddress
    const[isWorkAddressFocused, setIsWorkAddressFocused] = useState(false)
    const [isWorkAddressFilled, setIsWorkAddressFilled] = useState(false)
    const [workAddress, setWorkAddress] = useState<string>()
    const workAddressRef = useRef(null)

    //Seting useState and useRef to Password
    const[isPasswordFocused, setIsPasswordFocused] = useState(false)
    const [isPasswordFilled, setIsPasswordFilled] = useState(false)
    const [password, setPassword] = useState<string>()
    const passwordRef = useRef(null)
    
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

    //Functions handle for Date of birth
    function handleInputDateBlur(){
        setIsDateFocused(false)
        setIsDateFilled(!!date)
    }

    function handleInputDateFocus(){
        setIsDateFocused(true)
    }

    function handleInputDateChange(value: string){
        setIsDateFilled(!!value)
        setDate(value)
    }

    //Functions handle for Home Address
    function handleInputHomeAddressBlur(){
        setIsHomeAddressFocused(false)
        setIsHomeAddressFilled(!!homeAddress)
    }

    function handleInputHomeAddressFocus(){
        setIsHomeAddressFocused(true)
    }

    function handleInputHomeAddressChange(value: string){
        setIsHomeAddressFilled(!!value)
        setHomeAddress(value)
    }

    //Functions handle for Work Address
    function handleInputWorkAddressBlur(){
        setIsWorkAddressFocused(false)
        setIsWorkAddressFilled(!!workAddress)
    }

    function handleInputWorkAddressFocus(){
        setIsWorkAddressFocused(true)
    }

    function handleInputWorkAddressChange(value: string){
        setIsWorkAddressFilled(!!value)
        setWorkAddress(value)
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

    
    function Check(){
        if(cpfRef != null){
            const unmask = cpfRef?.current.getRawValue()
            const cpfIsValid = cpfRef?.current.isValid()
            const unmaskphone = phoneRef?.current.getRawValue()
            const phoneIsValid = phoneRef?.current.isValid()
            const unmaskHome = homeAddressRef?.current.getRawValue()
            const homeIsValid = homeAddressRef?.current.isValid()
            alert(homeIsValid)
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
                            keyboardType = 'email-address'
                            textContentType = 'emailAddress'
                            value = {email}
                            ref = {emailRef}
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
                            textContentType = 'name'
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
                                (isPhoneFocused || isPhoneFilled) && 
                                {borderColor: colors.blue}
                            ]}
                    >
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
                                (isPhoneFocused || isPhoneFilled) && 
                                {color: colors.blue}
                            ]}    
                        />
                    </View>
                    <View style={[
                                styles.inputField,
                                (isDateFocused || isDateFilled) && 
                                {borderColor: colors.blue}
                            ]}
                    >
                        <TextInputMask
                            placeholder="Data de nascimento: DD/MM/AAAA"
                            type = {'datetime'}
                            options ={{
                                format: 'DD/MM/DD'
                            }}
                            value ={date}
                            style={styles.input}
                            onBlur={handleInputDateBlur}
                            onFocus = {handleInputDateFocus}
                            onChangeText = {handleInputDateChange}
                            ref={dateRef}
                            
                        />
                        <MaterialIcons 
                            name="date-range" 
                            size={24}

                            color = "gray"
                            style={[
                                styles.Icon,
                                (isDateFocused || isDateFilled) && 
                                {color: colors.blue}
                            ]}    
                        />
                    </View>
                    <View style={[
                                styles.inputField,
                                (isHomeAddressFocused || isHomeAddressFilled) && 
                                {borderColor: colors.blue}
                            ]}
                    >
                         <TextInputMask
                            type={'custom'}
                            placeholder="CEP da sua casa"
                            textContentType = 'streetAddressLine1'
                            keyboardType='numeric'
                            options={{
                                // required

                                /**
                                 * mask: (String | required | default '')
                                 * the mask pattern
                                 * 9 - accept digit.
                                 * A - accept alpha.
                                 * S - accept alphanumeric.
                                 * * - accept all, EXCEPT white space.
                                */
                                mask: '99999-999',

                                // optional

                                /**
                                 * validator: (Function | optional | defaults returns true)
                                 * use this funcion to inform if the inputed value is a valid value (for invalid phone numbers, for example). The isValid method use this validator.
                                */
                                validator: function(value, settings) {
                                    // Regex Check
                                    var objER = /^[0-9]{5}-[0-9]{3}$/;
                                    if(value.length > 0)
                                        {
                                            if(objER.test(value))
                                                return true;
                                            else
                                                return false;
                                        }
                                    else
                                        return false;
                                },

                                /**
                                 * getRawValue: (Function | optional | defaults return current masked value)
                                 * use this function to parse and return values to use what you want.
                                 * for example, if you want to create a phone number mask (999) 999-99-99 but want to get only
                                 * the numbers for value, use this method for this parse step.
                                */
                                getRawValue: function(value, settings) {
                                return String(value.replace("-", ""));
                                },
                                /**
                                 * translation: (Object | optional | defaults 9, A, S, *)
                                 * the dictionary that translate mask and value.
                                 * you can change defaults by simple override the key (9, A, S, *) or create some new.
                                */
                                translation: {
                                // this is a custom translation. The others (9, A, S, *) still works.
                                // this translation will be merged and turns into 9, A, S, *, #.
                                '#': function(val) {
                                    if (val === ' ') {
                                    return val;
                                    }

                                    // if returns null, undefined or '' (empty string), the value will be ignored.
                                    return null;
                                },
                                // in this case, we will override build-in * translation (allow all characters)
                                // and set this to allow only blank spaces and some special characters.
                                '*': function(val) {
                                    return [' ', '#', ',', '.', '!'].indexOf(val) >= 0 ? val : null;
                                }
                                }
                            }}
                            value={homeAddress}
                            onChangeText={handleInputHomeAddressChange}
                            onBlur={handleInputHomeAddressBlur}
                            onFocus = {handleInputHomeAddressFocus}
                            style={styles.input}
                            ref={homeAddressRef}
                        />
                        <MaterialIcons 
                            name="home" 
                            size={24}

                            color = "gray"
                            style={[
                                styles.Icon,
                                (isHomeAddressFocused || isHomeAddressFilled) && 
                                {color: colors.blue}
                            ]}    
                        />
                    </View>

                    <View style={[
                                styles.inputField,
                                (isHomeAddressFocused || isHomeAddressFilled) && 
                                {borderColor: colors.blue}
                            ]}
                    >
                         <TextInputMask
                            type={'custom'}
                            placeholder="CEP do seu local de trabalho"
                            textContentType = 'streetAddressLine1'
                            keyboardType='numeric'
                            options={{
                                // required

                                /**
                                 * mask: (String | required | default '')
                                 * the mask pattern
                                 * 9 - accept digit.
                                 * A - accept alpha.
                                 * S - accept alphanumeric.
                                 * * - accept all, EXCEPT white space.
                                */
                                mask: '99999-999',

                                // optional

                                /**
                                 * validator: (Function | optional | defaults returns true)
                                 * use this funcion to inform if the inputed value is a valid value (for invalid phone numbers, for example). The isValid method use this validator.
                                */
                                validator: function(value, settings) {
                                    // Regex Check
                                    var objER = /^[0-9]{5}-[0-9]{3}$/;
                                    if(value.length > 0)
                                        {
                                            if(objER.test(value))
                                                return true;
                                            else
                                                return false;
                                        }
                                    else
                                        return false;
                                },

                                /**
                                 * getRawValue: (Function | optional | defaults return current masked value)
                                 * use this function to parse and return values to use what you want.
                                 * for example, if you want to create a phone number mask (999) 999-99-99 but want to get only
                                 * the numbers for value, use this method for this parse step.
                                */
                                getRawValue: function(value, settings) {
                                return String(value.replace("-", ""));
                                },
                                /**
                                 * translation: (Object | optional | defaults 9, A, S, *)
                                 * the dictionary that translate mask and value.
                                 * you can change defaults by simple override the key (9, A, S, *) or create some new.
                                */
                                translation: {
                                // this is a custom translation. The others (9, A, S, *) still works.
                                // this translation will be merged and turns into 9, A, S, *, #.
                                '#': function(val) {
                                    if (val === ' ') {
                                    return val;
                                    }

                                    // if returns null, undefined or '' (empty string), the value will be ignored.
                                    return null;
                                },
                                // in this case, we will override build-in * translation (allow all characters)
                                // and set this to allow only blank spaces and some special characters.
                                '*': function(val) {
                                    return [' ', '#', ',', '.', '!'].indexOf(val) >= 0 ? val : null;
                                }
                                }
                            }}
                            value={workAddress}
                            onChangeText={handleInputWorkAddressChange}
                            onBlur={handleInputWorkAddressBlur}
                            onFocus = {handleInputWorkAddressFocus}
                            style={styles.input}
                            ref={workAddressRef}
                    />
                        <MaterialIcons 
                            name="work" 
                            size={24}

                            color = "gray"
                            style={[
                                styles.Icon,
                                (isWorkAddressFocused || isWorkAddressFilled) && 
                                {color: colors.blue}
                            ]}    
                        />
                    </View>
                    <View style={[
                                styles.inputField,
                                (isEmailFocused || isEmailFilled) && 
                                {borderColor: colors.blue}
                            ]}
                    >
                        <TextInput
                            placeholder="Senha"
                            style={styles.input}
                            value = {password}
                            textContentType = 'password'
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