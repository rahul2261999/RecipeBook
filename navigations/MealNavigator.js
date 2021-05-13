import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavouriteScreen from '../screens/Favourites'
import { Platform } from 'react-native'
import color from '../Constant/colors'
import {Ionicons} from '@expo/vector-icons'
import colors from '../Constant/colors'

const MealNavigator = createStackNavigator({
    Category:CategoriesScreen,
    CategoriesMeal:{
        screen:CategoryMealsScreen,
    },
    MealDetail:{
        screen:MealDetailScreen
    }
},
{   
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Platform.OS==='android'?color.bg:'',
        },
        headerTintColor:Platform.OS==='android'?color.white:color.bg
    }
})

const tabNavconfig={
    Meal:{
        screen:MealNavigator,
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}  />}
        }
    },
    Favourite:{
        screen:FavouriteScreen,
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}  />}
        }
    }
}
const mainNavigator = Platform.OS==='android'?
createMaterialBottomTabNavigator(tabNavconfig,{
    activeColor:'white',
    shifting:true,
    barStyleLight:{
        backgroundColor:colors.bg
    }
})
:createBottomTabNavigator(tabNavconfig,{
    tabBarOptions:{
        tintColor:color.bg
    }
})

export default createAppContainer(mainNavigator)