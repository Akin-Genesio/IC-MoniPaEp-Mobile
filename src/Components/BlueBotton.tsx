import React from 'react'
import{ StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'


interface BlueButtonPropos extends TouchableOpacityProps{
    title: string;
}

export function BlueButton({title, ...rest}: BlueButtonPropos){
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
        backgroundColor: colors.blue,
        height: 40,
        borderRadius:15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 20,
        color: colors.white,
        fontFamily: fonts.generic
    }
})