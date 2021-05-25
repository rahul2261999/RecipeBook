import React from 'react'
import { Platform } from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavouriteScreen from '../screens/Favourites'
import FilterScreen from '../screens/FilterScreen'

import color from '../Constant/colors'
import {Ionicons} from '@expo/vector-icons'
import colors from '../Constant/colors'

const stackconfig = {   
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Platform.OS==='android'?color.bg:'',
        },
        headerTintColor:Platform.OS==='android'?color.white:color.bg
    }
}

const MealNavigator = createStackNavigator({
    Category:CategoriesScreen,
    CategoriesMeal:{
        screen:CategoryMealsScreen,
    },
    MealDetail:{
        screen:MealDetailScreen
    }
},stackconfig)

const FavouriteStack = createStackNavigator({
    Favourite:FavouriteScreen,
    MealDetail:{
        screen:MealDetailScreen
    }
},stackconfig)


const tabNavconfig={
    Meal:{
        screen:MealNavigator,
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}  />}
        }
    },
    Favourite:{
        screen:FavouriteStack,
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}  />}
        }
    }
}
const mealsFavNavigator = Platform.OS==='android'?
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

const FilterStack = createStackNavigator({
    Filter:FilterScreen
},stackconfig)

const mainNavigator = createDrawerNavigator({
    MealFav:mealsFavNavigator,
    Filter:FilterStack
},{
    contentOptions:{
        activeTintColor:color.bg,
        itemsContainerStyle: {
            marginTop: 50,
          }
    }
})

export default createAppContainer(mainNavigator)