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
    status: string
}

interface data{
    data:{
        User: object;
        AccessToken: object;
        token: string;
    }
}

interface AutContextData{
    signed: boolean;
    user: User | null;
    refreshToken: object |null;
    token: string;
    loading: boolean;
    signIn(CPF: string, password: string): Promise<data>;
    signOut(): void;
    
}

const AuthContext =  createContext<AutContextData>({} as AutContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<User | null>(null)
    const [refreshToken, setRefreshToken] = useState<object | null>(null)
    const [token, setToken] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() =>{
        async function loadStorageData(){
            const storagedUser = await AsyncStorage.getItem('@MHAuth:user')
            const storagedAccessToken = await AsyncStorage.getItem('@MHAuth:accessToken')
            const storagedToken = await AsyncStorage.getItem('@MHAuth:token')
            
            if(storagedUser && storagedAccessToken && storagedToken){
                api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
                setUser(JSON.parse(storagedUser))
                setRefreshToken(JSON.parse(storagedAccessToken))
                setToken(storagedToken)
            }
            setLoading(false)
        }
        loadStorageData()
    })
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
        return response
    }

    function signOut(){
        AsyncStorage.clear().then(() => {
            setUser(null)
        })
    }
    return (
    <AuthContext.Provider value ={{user, refreshToken, token, signOut, signIn, signed: !!user, loading}}>
        {children}
    </AuthContext.Provider>
    )}
export function useAuth(){
    const context = useContext(AuthContext)

    return context
}