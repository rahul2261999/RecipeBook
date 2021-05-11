import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

const MealDetailsScreen = props =>{
    return(
        <View style={style.screen}>
            <Text>The Meal Detail  Screen</Text>
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
export default MealDetailsScreen