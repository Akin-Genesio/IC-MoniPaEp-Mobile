import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    Dimensions, Image,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import patientImg from '../assets/patientImg.png';
import { FAQ, GreenButton, Header, HeaderSimple, HeaderWithOutMenu, PatientStatus, SafeAreaView } from '../Components';
import { useAuth } from '../contexts/Auth';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Symtopms(){

    return(
        <SafeAreaView>
            <HeaderSimple
                titleScreen = "Atualizar Sintomas"
            /> 

                    <View style={styles.bodyUp}>
                        <MaterialIcons style={styles.icons} name="menu" size={24} color="black" />
                        <View style={styles.textAPP}>
                            <Text style={styles.appName}>MoniPaEp</Text>
                        </View>
                    </View>
                    <View>
                        
                    </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bodyUp: {
        width: '100%',
        height: Dimensions.get('window').height * 0.15,
        justifyContent: 'center',
    },
    icons: {
        padding: 20
    },
    appName:{
        fontFamily: fonts.appName,
        fontSize: 32,
        color: colors.blue
    },
    textAPP: {
        alignItems: 'center',
    }
})
