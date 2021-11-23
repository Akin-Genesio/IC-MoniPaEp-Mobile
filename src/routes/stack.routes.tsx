import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import colors from '../styles/colors';
import { Login, Profile, SignUp, Symtopms } from '../pages';

const stackRoutes = createStackNavigator()

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle:{
                backgroundColor: colors.white
            }
        }}
    > 
        <stackRoutes.Screen
            name = "Login"
            component={Login}
        />

        <stackRoutes.Screen
            name = "SignUP"
            component={SignUp}
        />

        <stackRoutes.Screen
            name = "Profile"
            component={Profile}
        />

        <stackRoutes.Screen
            name = "Symptoms"
            component={Symtopms}
        />
    </stackRoutes.Navigator>
)

export default AppRoutes;