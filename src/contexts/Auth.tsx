import React, {createContext, useContext, useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

interface User{
    id: string;
    name: string;
    CPF: string
    email: string
    phone: string
    lastGPSLocation: string
    allowSMS: string
    workAddress: string
    homeAddress: string
    neighborhood: string
    houseNumber: string
    hasHealthPlan: string
    birthdate: Date
    gender: string
    status: string
    activeAccount: boolean
    createdAt: Date
    lastUpdate: Date
}

interface data{
    data:{
        User: User;
        AccessToken: object;
        token: string;
    }
}

interface AutContextData{
    signed: boolean;
    user: User |null;
    refreshToken: object |null;
    token: string;
    signIn(CPF: string, password: string): Promise<data>;
    signOut(): void;
    
}

const AuthContext =  createContext<AutContextData>({} as AutContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<User | null>(null)
    const [refreshToken, setRefreshToken] = useState<object | null>(null)
    const [token, setToken] = useState<string>('')


    async function signIn(CPF: string, password: string){
        const response = await api.post('/patients/login',{
            CPF: CPF,
            password: password
        })

        setUser(response.data.patient)
        setRefreshToken(response.data.refreshToken)
        setToken(response.data.token)

        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        await AsyncStorage.setItem('@MHAuth:user', JSON.stringify(user))
        await AsyncStorage.setItem('@MHAuth:accessToken', JSON.stringify(refreshToken))
        await AsyncStorage.setItem('@MHAuth:token', token)

        //console.log(response.data)
        return response
    }

    async function signOut(){
        AsyncStorage.clear().then(() => {
            console.log("Entrei no singOut")
            setUser(null)
        })
    }
    return (
    <AuthContext.Provider value ={{user, refreshToken, token, signOut, signIn, signed: !!user,}}>
        {children}
    </AuthContext.Provider>
    )}
export function useAuth(){
    const context = useContext(AuthContext)


    return context
}