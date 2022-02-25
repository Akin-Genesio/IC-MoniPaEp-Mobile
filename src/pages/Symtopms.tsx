import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    View,
    FlatList,
    Alert
} from 'react-native';
import { GreenButton, HeaderSimple, SafeAreaView, Symptom } from '../Components';
import api from '../services/api';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface SymptomsProps{
    symptom: string
}

export function Symtopms(){
    const[isSearchFocused, setIsSearchFocused] = useState(false)
    const [isSearchFilled, setIsSearchFilled] = useState(false)
    const [search, setSearch] = useState<string>('')
    const [symptoms, setSymptoms] = useState<SymptomsProps[]>([])
    const searchRef = useRef(null)
    const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
    const navigation = useNavigation()

    
    useEffect(() => {
        async function fetchSymptoms(){
            console.log("search: "+search)
            const response = await api.get("/symptom", {params: {symptom: search}});
            setSymptoms(response.data.symptoms)

        }
        fetchSymptoms();
    },[])


    function handleProfile(){
        navigation.navigate('Profile')
    }
    //Functions handle for Search
    function handleInputSearchBlur(){
        setIsSearchFocused(false)
        setIsSearchFilled(!!search)
    }

    function handleInputSearchFocus(){
        setIsSearchFocused(true)
    }

    function handleInputSearchChange(value: string){
        setIsSearchFilled(!!value)
        setSearch(value)
        
    }

    function handleSeach(){
        //console.log(search)
    }

    function handleSymptomSelection(title: string){
        if(selectedSymptoms.includes(title)){
            setSelectedSymptoms(selectedSymptoms.filter((symptom) => {
                return symptom != title
            }))
        }
        else{
            setSelectedSymptoms([...selectedSymptoms,title])
        }
        
    }

    function handleSymptom(){
        Alert.alert(
            "Atualização concluida",
            `Simtomas cadastrados: ${selectedSymptoms}`,
            [
                {
                    text: "Ok",
                    onPress: () => (handleProfile())
                }
            ]
        )
    }

    return(
        <SafeAreaView 
            accessible={true}
        >
            <HeaderSimple
                titleScreen = "Atualizar Sintomas"
            /> 
                <View style={styles.container}>
                    <View style={styles.bodyUp} accessible={true}>
                        <MaterialIcons style={styles.icons} name="menu" size={24} color="black" />
                        <View style={styles.textAPP} accessible={true}>
                            <Text style={styles.appName}>MoniPaEp</Text>
                        </View>
                    </View>
                    <View style={[
                            styles.search,
                            (isSearchFocused || isSearchFilled) && 
                            {borderColor: colors.blue}
                        ]}>
                        <TextInput
                            accessible={true}
                            placeholder="Digite um sintoma"
                            style={styles.textSerch}
                            value={search}
                            onBlur={handleInputSearchBlur}
                            onFocus={handleInputSearchFocus}
                            onChangeText={handleInputSearchChange}
                        />
                        <MaterialIcons 
                            name="search" 
                            size={24} 
                            color="gray"
                            style={[
                                styles.Icon,
                                (isSearchFocused || isSearchFilled) && 
                                {color: colors.blue}
                            ]}
                            onPress={handleSeach} 
                            />
                    </View>
                    <View style={styles.symptomsList}>
                    <FlatList
                        data={symptoms}
                        keyExtractor = {(item: { symptom: any; }) => String(item.symptom)}
                        renderItem = {({item}) => (
                            <Symptom
                            parentHandleSelection = {handleSymptomSelection}
                            title = {item.symptom}
                        />
                        )}
                    />
                    </View>
                    <View style={styles.bottom}>
                        <GreenButton
                            
                            accessibilityLabel="Botão. Clique para ir para a página de atualizar sintomas"
                            title="Atualizar Sintomas"
                            onPress={handleSymptom}
                        />
                    </View>
                    

                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bodyUp: {
        width: '100%',
        height: Dimensions.get('window').height * 0.15,
        justifyContent: 'center',
        paddingBottom: 15
    },
    icons: {
        padding: 20
    },
    appName:{
        fontFamily: fonts.appName,
        fontSize: 32,
        color: colors.blue
    },
    textAPP: {
        alignItems: 'center',
    },
    search: {
        flexDirection: 'row',
        borderWidth: 1,
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: colors.gray_light1,
        borderColor: colors.black,
        height: 50,
        borderRadius: 100,
        
        alignItems: 'center'
    },
    textSerch:{
        color: colors.gray_dark2,
        width: '70%',
        fontFamily: fonts.generic,
        fontSize: 16,
    },
    Icon:{
        padding: 10,
    },
    symptomsList: {
        width: Dimensions.get('window').width * 0.8,
        paddingTop: 20,
        justifyContent: 'center'
    },
    bottom:{
        //marginTop: 40,
        width: Dimensions.get('window').width * 0.9,
        paddingBottom: 20,
        paddingTop: 30,
        
        
    }
})
