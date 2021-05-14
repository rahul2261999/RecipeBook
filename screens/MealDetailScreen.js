import React from 'react';
import {StyleSheet,View,Text,ScrollView,Image} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import NavHeaderButton from '../components/NavHeaderButton'
import DefaultText from '../components/DefaultText'

import { MEAL } from '../data/raw-data'

const MealDetailsScreen = props =>{
    const mealId = props.navigation.getParam('Meal_id')
    const selectedMeal = MEAL.find(meal=>meal.id===mealId)

    const RenderListItem = item =>{
        return (
            <View style={style.listItem}>
                <DefaultText>{item.children}</DefaultText>
            </View>
        )
    }

    return(
        <ScrollView>
            <Image source={{uri:selectedMeal.imageUrl}} style={style.image} />
            <View style={style.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity}</DefaultText>
                <DefaultText>{selectedMeal.affordability}</DefaultText>
            </View>
            <Text style={style.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient=><RenderListItem key={ingredient}>{ingredient}</RenderListItem>)}
            <Text style={style.title}>Steps</Text>
            {selectedMeal.steps.map(step=><RenderListItem key={step}>{step}</RenderListItem>)}
        </ScrollView>
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
    image:{
        width:"100%",
        height:200
    },
    details:{
        flexDirection:'row',
        padding:15,
        justifyContent:'space-around'
    },
    title:{
        fontSize:22,
        fontFamily:'open-sans',
        textAlign:'center'
    },
    listItem:{
        marginVertical:10,
        marginHorizontal:20,
        borderColor:'#ccc',
        borderWidth:1,
        padding:10
    }
})
export default MealDetailsScreen