import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {View, ActivityIndicator, StyleSheet} from 'react-native'

import {useAuth} from '../contexts/Auth'

import StackRoutes from './stack.routes'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'


const Routes = () =>{
    const {signed, loading} = useAuth()
    
    if(loading){
        return(
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#666"/>
            </View>
        )
    }
    
    return signed? <AppRoutes/> : <AuthRoutes/>
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Routes;