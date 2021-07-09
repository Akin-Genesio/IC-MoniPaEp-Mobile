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
    const birthDate = '1997-06-29'
    const date = new Date(birthDate)
    const allowSMS = true

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
            dateOfBirth: date,
            password: password,
            allowSMS: allowSMS
        })

        alert(response.data.token)
    }
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Button
                    title="Submit"
                    onPress={Submit}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignContent: 'center'
    }
})