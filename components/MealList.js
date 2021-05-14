import React from 'react'
import {StyleSheet,FlatList,View} from 'react-native'
import MealItem from './MealItem'

const MealList = props =>{

    const renderMealItem = ItemData=>{
        return <MealItem 
        title={ItemData.item.title}
        duration={ItemData.item.duration}
        complexity={ItemData.item.complexity}
        affordability={ItemData.item.affordability}
        image={ItemData.item.imageUrl}
        onSelectMeal={()=>{props.navigation.navigate('MealDetail',{Meal_id:ItemData.item.id})}} />
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