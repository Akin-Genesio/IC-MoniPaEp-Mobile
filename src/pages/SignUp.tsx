import { InputOutline, InputStandard } from 'react-native-input-outline';
import React, { useRef } from 'react';
import {StyleSheet, Text, TextInput, View } from 'react-native';
import { Header, SafeAreaView } from '../Components';
import colors from '../styles/colors';
import { MaterialIcons } from '@expo/vector-icons'; 
import fonts from '../styles/fonts';

export function SignUp(){
    //const inputRef = useRef < InputOutline > null;
    return(
        <SafeAreaView>
            <Header/> 
            <View style={styles.container}>
                <Text>Test input text</Text>
                <View style={styles.email}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                    />
                    <MaterialIcons style={styles.Icon} name="email" size={24} color="black" />
                </View> 
            </View>
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
        borderColor: colors.blue,
        
    },
    Icon:{
        padding: 10,
        color: colors.blue
    },
    input:{
        //borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.gray_dark3,
        width: '70%',
        fontFamily: fonts.text,
        fontSize: 16,
        //textAlign: 'center'
    }
   
  });