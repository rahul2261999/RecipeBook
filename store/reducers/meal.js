import {MEAL} from '../../data/raw-data'
import {SET_FILTER, TOGGLE_FAVOURITE_MEAL} from '../actionType'

const initialState = {
    allMeals:MEAL,
    filteredMeals:MEAL,
    favourites:[]
}

const mealReducer = (state=initialState,action)=>{
    switch (action.type) {
        case TOGGLE_FAVOURITE_MEAL:
            const mealIndex = state.favourites.findIndex(item=>item.id===action.mealId)

            if(mealIndex>=0){
                const oldFavMeals = [...state.favourites]
                oldFavMeals.splice(mealIndex,1)
                return{
                    ...state,
                    favourites:oldFavMeals
                }
            }else{
                const newMeal = state.allMeals.find(item=>item.id===action.mealId)
                return{
                    ...state,
                    favourites:state.favourites.concat(newMeal)
                }
            }
        
        case SET_FILTER:
            const updateFilteredMeals = state.allMeals.filter(meals=>{
                if(action.payload.Gulten && !meals.isGlutenFree){
                    return false
                }

                if(action.payload.Lactos && !meals.isLactoseFree){
                    return false
                }

                if(action.payload.Vegan && !meals.isVegan){
                    return false
                }

                if(action.payload.Vegetarian && !meals.isVegetarian){
                    return false
                }

                return true
            })
            console.log(updateFilteredMeals.length)
            return {
                ...state,
                filteredMeals:updateFilteredMeals
            }

        default:
            return state
    }
}

export default mealReducer