import React from 'react';
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import NavHeaderButton from '../components/NavHeaderButton'
import MealList from '../components/MealList'
import {useSelector} from 'react-redux'
import { View,StyleSheet } from 'react-native';
import DeafultText from '../components/DefaultText';
const Favourites = props =>{

    const favItem = useSelector(state=>state.meals.favourites)

    if(favItem.length===0 || !favItem){
        return(
            <View style={style.content}>
                <DeafultText>No favourite meals found.</DeafultText>
            </View>
        )
    }

    return <MealList meal={favItem} navigation={props.navigation} />

    
}

Favourites.navigationOptions = navinfo => {
    return {
        headerTitle:'Favourites',
        headerLeft:()=><HeaderButtons HeaderButtonComponent={NavHeaderButton}>
            <Item 
                title="Menu"
                iconName='ios-menu'
                onPress={()=>navinfo.navigation.toggleDrawer()} />
        </HeaderButtons>
    }
}

const style = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Favourites