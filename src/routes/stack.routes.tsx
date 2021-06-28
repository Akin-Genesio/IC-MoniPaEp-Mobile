import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import colors from '../styles/colors';
import { Login, SignUp } from '../pages';

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
    </stackRoutes.Navigator>
)

export default AppRoutes;