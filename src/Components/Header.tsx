import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { HeaderSimple } from '.';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface HeaderProps{
    titleScreen: string
}
export function Header({titleScreen}: HeaderProps){

    return(
        <View>
            <HeaderSimple
                titleScreen={titleScreen}
            />
            <View style={styles.container}>  
                <MaterialIcons style={styles.incons} name="menu" size={24} color="black" />
                <View style={styles.textContainer}>
                    <Text style={styles.textNameApp}>
                        MoniPaEp
                    </Text>
                </View>
            </View>
        </View>
            
        
        
            
    )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: Dimensions.get('window').height * 0.15,
      justifyContent: 'center',
    },
    incons: {
        paddingLeft: 5
    },
    textNameApp:{
        fontSize: 32,
        color: colors.blue,
        fontFamily: fonts.appName,
    },
    textContainer:{
        alignItems: 'center'
    }
  });