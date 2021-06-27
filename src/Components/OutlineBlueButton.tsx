import React from 'react'
import{ StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'


interface OutlineBlueButtonPropos extends TouchableOpacityProps{
    title: string;
}

export function OutlineBlueButton({title, ...rest}: OutlineBlueButtonPropos){
    return(
        <TouchableOpacity style={styles.container}>
            <Text 
                style={styles.text}
                {...rest}    
            >
               {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        height: 40,
        borderRadius:15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.blue,
        borderWidth: 1
    },
    text:{
        fontSize: 20,
        color: colors.blue,
        fontFamily: fonts.generic
    }
})