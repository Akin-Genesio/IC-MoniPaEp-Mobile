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
import { BlueButton, HeaderSimple, OutlineBlueButton, SafeAreaView } from '../Components';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import patientImg from '../assets/patientImg.png'

export function Profile(){
    return(
        <SafeAreaView>
            <HeaderSimple
                titleScreen="Profile"
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
        width: Dimensions.get('window').height * 0.35,
        height: Dimensions.get('window').height * 0.35,
        borderRadius: (Dimensions.get('window').height * 0.35)/2
    }
})