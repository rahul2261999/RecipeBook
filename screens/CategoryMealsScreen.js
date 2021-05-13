import React from 'react';
import {StyleSheet,View,FlatList,Text} from 'react-native';
import {CATEGORIES,MEAL} from '../data/raw-data'
import MealItem from '../components/MealItem'

const CategoryMealScreen = props =>{

    const renderMealItem = ItemData=>{
        return <MealItem 
        title={ItemData.item.title}
        duration={ItemData.item.duration}
        complexity={ItemData.item.complexity}
        affordability={ItemData.item.affordability}
        image={ItemData.item.imageUrl}
        onSelectMeal={()=>{props.navigation.navigate('MealDetail',{Meal_id:ItemData.item.id})}} />
    }

    const catId = props.navigation.getParam('cateId')
    const displayItem = MEAL.filter(
        meal=>meal.categoryIds.indexOf(catId)>=0
        )

    return (
        <View style={style.screen}>
            <FlatList
                data={displayItem}
                renderItem={renderMealItem}
                style={{width:'100%'}} />
        </View>
    )

   
}

CategoryMealScreen.navigationOptions = navData =>{
    const catId = navData.navigation.getParam('cateId')
    const ItemData = CATEGORIES.find(item=>item.id===catId)
    return{
        headerTitle:ItemData.title
    }
}

const style = StyleSheet.create({
    screen:{
        margin:10
    }
})
export default CategoryMealScreen