import { InputOutline, InputStandard } from 'react-native-input-outline';
import React, { useRef, useState } from 'react';
import {
    KeyboardAvoidingView, 
    StyleSheet, 
    Text, 
    TextInput, 
    View,
    Platform
} from 'react-native';
import { Header, SafeAreaView } from '../Components';
import colors from '../styles/colors';
import { MaterialIcons } from '@expo/vector-icons'; 
import fonts from '../styles/fonts';

export function SignUp(){
    const[isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const [name, setName] = useState<string>()
    
    function handleInputBlur(){
        setIsFocused(false)
        setIsFilled(!!name)
    }

    function handleInputFocus(){
        setIsFocused(true)
    }

    function handleInputChange(value: string){
        setIsFilled(!!value)
        setName(value)
    }

    return(
        <SafeAreaView>
            <Header/> 
            <KeyboardAvoidingView  
                style={styles.container}
                //behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >                
                <View style={styles.container}>
                    <Text>Test input text</Text>
                    <View style={[
                                styles.email,
                                (isFocused || isFilled) && 
                                {borderColor: colors.blue}
                            ]}
                    >
                        <TextInput
                            placeholder="Email"
                            style={styles.input}
                            onBlur={handleInputBlur}
                            onFocus = {handleInputFocus}
                            onChangeText = {handleInputChange}
                        />
                        <MaterialIcons 
                            name="email" 
                            size={24}

                            color = "gray"
                            style={[
                                styles.Icon,
                                (isFocused || isFilled) && 
                                {color: colors.blue}
                            ]}    
                        />
                    </View> 
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
    email: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: colors.gray,
        
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