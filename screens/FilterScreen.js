import React, { useState,useEffect,useCallback } from 'react';
import {StyleSheet,View,Text, Switch, Platform} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import NavHeaderButton from '../components/NavHeaderButton'

import color from '.././Constant/colors'

const Filters= props =>{
    return(
        <View style={style.filterContainer}>
            <Text>{props.label}</Text>
            <Switch 
                trackColor={{true:'purple',false:''}}
                thumbColor={Platform.OS ==='android'?color.bg:''}
                value={props.value}
                onValueChange={props.onChange} />
        </View>
    )
}

const FiletrScreen = props =>{

    const {navigation} = props

    const [isGultenFree,setGultenFree] = useState(false)
    const [isLactosFree,setLactosFree] = useState(false)
    const [isVegan,setVegan] = useState(false)
    const [isVegetarian,setVegetarian] = useState(false)

    const saveFilter = useCallback(() =>{
        const filter = {
            Gulten:isGultenFree,
            Lactos:isLactosFree,
            Vegan:isVegan,
            Vegetarian:isVegetarian
        }
        console.log(filter)
    },[isGultenFree,isLactosFree,isVegan,isVegetarian])

    useEffect(()=>{
        console.log("hello")
        navigation.setParams({save:saveFilter})
    },[saveFilter])





    return(
        <View style={style.container}>
            <Text style={style.title}>Availabel Filters</Text>
            <Filters label="Gulten-free" value={isGultenFree} onChange={value=>setGultenFree(value)}/>
            <Filters label="Lactos-free" value={isLactosFree} onChange={value=>setLactosFree(value)}/>
            <Filters label="Vegan" value={isVegan} onChange={value=>setVegan(value)}/>
            <Filters label="Vegetarian" value={isVegetarian} onChange={value=>setVegetarian(value)}/>
        </View>
    )

    
}
const style = StyleSheet.create({
    container:{
        flex:1,
        padding:20
    },
    title:{
        fontSize:22,
        textAlign:'center',
        margin:20
    },
    filterContainer:{
        flexDirection:'row',
        width:'80%',
        justifyContent:'space-between',
        marginVertical:10
    }
})

FiletrScreen.navigationOptions= navinfo =>{
    return{
        headerTitle:"Filter Screen",
        headerLeft:()=><HeaderButtons HeaderButtonComponent={NavHeaderButton}>
                <Item title="Menu" iconName="ios-menu" onPress={()=>navinfo.navigation.toggleDrawer()} />
            </HeaderButtons>,
        headerRight:()=><HeaderButtons HeaderButtonComponent={NavHeaderButton}>
                            <Item title="Save" iconName="ios-save" onPress={navinfo.navigation.getParam('save')}  />
                        </HeaderButtons>
    }
}

export default FiletrScreen



// onPress={()=>navinfo.navigation.getParams('save')}