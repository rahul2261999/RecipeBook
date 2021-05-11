import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

const Favourites = props =>{
    return(
        <View style={style.screen}>
            <Text>The Category Meal Screen</Text>
        </View>
    )

    
}
const style = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Favourites