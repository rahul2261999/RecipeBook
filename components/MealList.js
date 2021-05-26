import React from 'react'
import {StyleSheet,FlatList,View} from 'react-native'
import MealItem from './MealItem'
import {useSelector} from 'react-redux'

const MealList = props =>{
    const favMeals = useSelector(state=>state.meals.favourites)

    const renderMealItem = ItemData=>{
        const isFavourite = favMeals.some(item=> item.id===ItemData.item.id)
        return <MealItem 
        title={ItemData.item.title}
        duration={ItemData.item.duration}
        complexity={ItemData.item.complexity}
        affordability={ItemData.item.affordability}
        image={ItemData.item.imageUrl}
        onSelectMeal={()=>{
            props.navigation.navigate('MealDetail',{
                Meal_id:ItemData.item.id,
                mealTitle:ItemData.item.title,
                isFav:isFavourite
            }
                )}} 
        />
    }

    return (
        <View style={style.list}>
            <FlatList
                data={props.meal}
                renderItem={renderMealItem}
                style={{width:'100%'}} />
        </View>
    )
}

const style = StyleSheet.create({
    list:{
        margin:10
    }
})

export default MealList