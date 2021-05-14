import React from 'react';
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import NavHeaderButton from '../components/NavHeaderButton'
import MealList from '../components/MealList'
import {MEAL} from '../data/raw-data'

const Favourites = props =>{
    const favItem = MEAL.filter(meal=>meal.id==="m1"||meal.id==='m2')
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