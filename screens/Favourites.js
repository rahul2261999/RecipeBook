import React from 'react';
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import NavHeaderButton from '../components/NavHeaderButton'
import MealList from '../components/MealList'
import {useSelector} from 'react-redux'
const Favourites = props =>{

    const favItem = useSelector(state=>state.meals.filteredMeals)
    return <MealList meal={favItem} navigation={props.navigation} />

    
}

Favourites.navigationOptions = navinfo => {
    return {
        headerTitle:'Favourites',
        headerLeft:()=><HeaderButtons HeaderButtonComponent={NavHeaderButton}>
            <Item 
                title="Menu"
                iconName='ios-menu'
                onPress={()=>navinfo.navigation.toggleDrawer()} />
        </HeaderButtons>
    }
}


export default Favourites