import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import colors from '../styles/colors';
import { Login, Profile, SignUp } from '../pages';

const AuthStack = createStackNavigator()

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name = "Login" component ={Login}/>
        <AuthStack.Screen name = "SignUP" component ={SignUp}/>
    </AuthStack.Navigator>
)

export default AuthRoutes;