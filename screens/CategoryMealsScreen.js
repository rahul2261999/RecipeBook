import React from 'react';
import {CATEGORIES,MEAL} from '../data/raw-data'
import MealList from '../components/MealList'

const CategoryMealScreen = props =>{
    const catId = props.navigation.getParam('cateId')
    const displayItem = MEAL.filter(
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