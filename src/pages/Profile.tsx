import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import React, { useEffect, useState } from 'react';
import {
    Dimensions, Image,
    StyleSheet,
    Text,


    View
} from 'react-native';
import patientImg from '../assets/patientImg.png';
import { FAQ, GreenButton, HeaderSimple, SafeAreaView } from '../Components';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Profile(){
    const[isLoading, setIsLoading] = useState(false)
    const[User, setUser] = useState(null)
    const[AccessToken, setAccessToken] = useState(' ')
    const[RefreshToken, setRefreshToken] = useState(null)
    
    
    useEffect(() => {
        async function LoadingData() {
            setIsLoading(true)
            const user = await getUser()
            const token = await getAccessToken()
            const refresh = await getRefreshToken()

            setUser(user)
            setAccessToken(token)
            setRefreshToken(refresh)
            setIsLoading(false)
        }
        LoadingData()
    },[])
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
                return ' '
          } catch(e) {
              return ' '
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

    if(isLoading){
        return (
          <AppLoading/>
        );
    }else{
        return(
            <SafeAreaView>
                <HeaderSimple
                    titleScreen= {`Bem vindo(a) ${User.name}`}
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