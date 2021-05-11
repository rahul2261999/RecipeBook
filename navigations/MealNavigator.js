import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import { Platform } from 'react-native'
import color from '../Constant/colors'

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

export default createAppContainer(MealNavigator)