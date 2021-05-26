import React,{useEffect,useCallback} from 'react';
import {StyleSheet,View,Text,ScrollView,Image} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import NavHeaderButton from '../components/NavHeaderButton'
import DefaultText from '../components/DefaultText'
import {useSelector,useDispatch} from 'react-redux'
import {toggleFavourites} from '../store/actions/mealAction'

const MealDetailsScreen = props =>{
    const {navigation} = props
    const mealId = props.navigation.getParam('Meal_id')

    const allMeal= useSelector(state=>state.meals.allMeals)
    const isFavourite= useSelector(state=>state.meals.favourites.some(item=> item.id === mealId))
   
    const selectedMeal = allMeal.find(meal=>meal.id===mealId)

    const dispatch = useDispatch()

    const toggleFavouriteHandler = useCallback(() =>{
        dispatch(toggleFavourites(mealId))
    },[dispatch,mealId])

    useEffect(()=>{
        navigation.setParams({toggleFavourites:toggleFavouriteHandler,isFav:isFavourite})
    },[toggleFavouriteHandler,isFavourite])


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
   const mealTitle = navigateData.navigation.getParam('mealTitle')
   const toggleFav = navigateData.navigation.getParam('toggleFavourites')
   const isFav = navigateData.navigation.getParam('isFav')
    return {
        headerTitle:mealTitle,
        headerRight:()=><HeaderButtons HeaderButtonComponent={NavHeaderButton}>
                <Item 
                    title='Favourite'
                    iconName={isFav?'ios-star':'ios-star-outline'}
                    onPress={toggleFav}
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