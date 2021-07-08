import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { HeaderSimple } from './HeaderSimple';

interface HeaderProps{
    titleScreen: string
}
export function HeaderWithOutMenu({titleScreen}: HeaderProps){

    return(
        <View>
            <HeaderSimple
                titleScreen={titleScreen}
            />
            <View style={styles.container}>
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
    textNameApp:{
        fontSize: 32,
        color: colors.blue,
        fontFamily: fonts.appName,
    },
    textContainer:{
        alignItems: 'center'
    }
  });