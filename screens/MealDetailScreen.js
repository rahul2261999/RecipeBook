import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import NavHeaderButton from '../components/NavHeaderButton'
import { MEAL } from '../data/raw-data'

const MealDetailsScreen = props =>{
    const mealId = props.navigation.getParam('Meal_id')
    const selectedMeal = MEAL.find(meal=>meal.id===mealId)

    return(
        <View style={style.screen}>
            <Text>{selectedMeal.title}</Text>
        </View>
    )

   
}

MealDetailsScreen.navigationOptions = navigateData=>{
    const mealId = navigateData.navigation.getParam('Meal_id')
    const selectedMeal = MEAL.find(meal=>meal.id===mealId)
    return {
        headerTitle:selectedMeal.title,
        headerRight:()=><HeaderButtons HeaderButtonComponent={NavHeaderButton}>
                <Item 
                    title='Favourite'
                    iconName='ios-star'
                    onPress={()=>{console.log('added to fav')}}
                />
             </HeaderButtons>
       
        
    }
}
const style = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default MealDetailsScreen