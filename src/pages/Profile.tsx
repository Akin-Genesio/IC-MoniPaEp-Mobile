import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    Dimensions, Image,
    StyleSheet,
    Text,


    View
} from 'react-native';
import patientImg from '../assets/patientImg.png';
import { FAQ, GreenButton, HeaderSimple, PatientStatus, SafeAreaView } from '../Components';
import { useAuth } from '../contexts/Auth';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Profile(){
    const[isLoading, setIsLoading] = useState(false)
    const {user, refreshToken, token, signed, signOut} = useAuth()
    
    const date = user?.lastUpdate
    const difference= Math.abs((Date.now())- Date.parse(date));
    const days = Math.round(difference/(1000 * 3600 * 24))


    async function Data(){
        //const patientId = await getUser()
        //const token = await getAccessToken()
        //const refreshToken = await getRefreshToken()

        console.log("Exibindo UseContext")
        console.log(user)
        console.log(token)
        console.log(refreshToken)
        console.log("Signed: "+signed)
    }

    return(
        <SafeAreaView>
            <HeaderSimple
                titleScreen= {`Bem vindo(a) ${user?.name.split(' ')[0]}`}
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
                        accessibilityLabel = "Foto do usuário" 
                    />
                
                </View>

                <View style={styles.bottom}>

                    <Text style={styles.text}>
                        Você está a {days} dias sem atualizar o seus sintomas!
                    </Text>
                    <GreenButton
                        title="Atualizar Sintomas"
                        onPress={Data}
                    />
                    
                    <Text style={styles.status}>
                        Seu Status atual é:
                    </Text>
                    <PatientStatus
                        title={user?.status? user.status : ''}
                    />
                    <FAQ
                        title = "Perguntas Frequentes"
                        onPress={signOut}
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