import React from 'react'
import{ StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'


interface GreenButtonProps extends TouchableOpacityProps{
    title: string;
}

export function FAQ({title, ...rest}: GreenButtonProps){
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
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.green
    },
    text:{
        fontSize: 16,
        color: colors.green,
        fontFamily: fonts.warning
    }
})