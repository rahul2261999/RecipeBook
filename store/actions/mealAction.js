import {SET_FILTER, TOGGLE_FAVOURITE_MEAL} from '../actionType'

export const toggleFavourites = (id)=>{
    return {
        type:TOGGLE_FAVOURITE_MEAL,
        mealId:id
    }
}

export const setFilter = selectedFilter =>{
    return{
        type:SET_FILTER,
        payload:selectedFilter
    }
}