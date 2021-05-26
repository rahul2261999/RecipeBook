import React from 'react';
import {CATEGORIES} from '../data/raw-data'
import MealList from '../components/MealList'
import {useSelector} from 'react-redux'

const CategoryMealScreen = props =>{
    const meals = useSelector(state=>state.meals.filteredMeals)
    console.log(meals.length)
    const catId = props.navigation.getParam('cateId')
    const displayItem = meals.filter(
        meal=>meal.categoryIds.indexOf(catId)>=0
        )

    return <MealList meal={displayItem} navigation={props.navigation} /> 

   
}

CategoryMealScreen.navigationOptions = navData =>{
    const catId = navData.navigation.getParam('cateId')
    const ItemData = CATEGORIES.find(item=>item.id===catId)
    return{
        headerTitle:ItemData.title
    }
}

export default CategoryMealScreen