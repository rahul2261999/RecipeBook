import React from 'react';
import {StyleSheet,View,FlatList,Text} from 'react-native';
import {CATEGORIES,MEAL} from '../data/raw-data'

const CategoryMealScreen = props =>{

    const renderMealItem = ItemData=>{
        return <View><Text>{ItemData.item.title}</Text></View>
    }

    const catId = props.navigation.getParam('cateId')
    const displayItem = MEAL.filter(
        meal=>meal.categoryIds.indexOf(catId)>=0
        )

    return(
        <View style={style.screen}>
            <FlatList data={displayItem} renderItem={renderMealItem} />
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
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default CategoryMealScreen