import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';




interface PatientStatusPropos{
    title: string;
}

export function PatientStatus({title}: PatientStatusPropos){
    if(title == 'Saudável'){
        return(
            <View style={styles.container}>
                <AntDesign name="Safety" size={50} color= {colors.green} />
                <Text 
                    style={styles.textG}   
                >
                   {title}
                </Text>
            </View>
        )
    }
    else if (title == 'Suspeito'){
        return(
            <View style={styles.container}>
                <Entypo name="creative-commons-attribution" size={50} color= {colors.yellow} />
                <Text 
                    style={styles.textY}   
                >
                   {title}
                </Text>
            </View>
        )
    }
    else{
        return(
            <View style={styles.container}>
                <MaterialIcons name="coronavirus" size={50} color= {colors.red} />
                <Text 
                    style={styles.textR}   
                >
                   {title}
                </Text>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 10
    },
    textG:{
        fontSize: 26,
        color: colors.green,
        fontFamily: fonts.generic
    },
    textR:{
        fontSize: 26,
        color: colors.red,
        fontFamily: fonts.generic
    },
    textY:{
        fontSize: 26,
        color: colors.yellow,
        fontFamily: fonts.generic
    }
})