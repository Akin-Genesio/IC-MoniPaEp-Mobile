import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { useRef, useState } from 'react';
import {
    Button, Dimensions, Image, Keyboard, KeyboardAvoidingView,
    Platform, ScrollView, StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import { BlueButton, FAQ, GreenButton, HeaderSimple, OutlineBlueButton, SafeAreaView } from '../Components';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import patientImg from '../assets/patientImg.png'
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Profile(){

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

    //let [patientLoaded] = await getUser
    
    async function Data(){
        const patientId = await getUser()
        const token = await getAccessToken()
        const refreshToken = await getRefreshToken()

        console.log("Exibindo AsyncStorage do Perfil")
        console.log(patientId)
        console.log(token)
        console.log(refreshToken)
    }
    return(
        <SafeAreaView>
            <HeaderSimple
                titleScreen= "Bem vindo(a)"
            />
            <View
                style={styles.container}
            >
                <MaterialIcons style={styles.icons} name="menu" size={24} color="black" />
                <View
                    style={styles.bodyUp}
                >
                    
                    <Image 
                        source={patientImg}
                        style = {styles.image}    
                    />
                
                </View>

                <View style={styles.bottom}>

                    <Text style={styles.text}>
                        Você está a X dias sem atualizar o seus sintomas!
                    </Text>
                    <GreenButton
                        title="Atualizar Sintomas"
                        onPress={Data}
                    />
                    
                    <Text style={styles.status}>
                        Seu Status atual é:
                    </Text>
                    <FAQ
                        title = "Perguntas Frequentes"
                    />
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        
    },
    bodyUp:{
        alignItems: 'center',
    },
    icons:{
        padding: 20
    },
    image:{
        width: Dimensions.get('window').height * 0.30,
        height: Dimensions.get('window').height * 0.30,
        borderRadius: (Dimensions.get('window').height * 0.30)/2
    },
    bottom:{
        //marginTop: 40,
        width: Dimensions.get('window').width * 0.9,
        padding: 20,
    },
    text:{
        fontSize: 20,
        color: colors.black,
        fontFamily: fonts.warning,
        padding: 20
    },
    status:{
        fontSize: 16,
        color: colors.black,
        fontFamily: fonts.warning,
        padding: 20
    }
})