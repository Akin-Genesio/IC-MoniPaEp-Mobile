import { MaterialIcons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import {
    Dimensions,


    StyleSheet,
    Text,

    TextInput,

    View
} from 'react-native';
import { HeaderSimple, SafeAreaView } from '../Components';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Symtopms(){
    const[isSearchFocused, setIsSearchFocused] = useState(false)
    const [isSearchFilled, setIsSearchFilled] = useState(false)
    const [search, setSearch] = useState<string>('')
    const searchRef = useRef(null)

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
        console.log(search)
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
})
