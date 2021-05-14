import React from 'react';
import {FlatList} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons'

import {CATEGORIES} from '../data/raw-data'

import CategoryGridTile from '../components/CategoryGridTile'
import NavHeaderButton from '../components/NavHeaderButton'



const CategoriesScreen = props =>{

    const renderListItem = itemData =>{
        return <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={()=>props.navigation
                .navigate({
                    routeName:'CategoriesMeal',
                    params:{cateId:itemData.item.id}
                })
            }
        />
    }

    return(
            <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderListItem}/>
    )
}

CategoriesScreen.navigationOptions = navinfo =>{
    return{
        headerTitle:'Category',
        headerLeft:()=><HeaderButtons HeaderButtonComponent={NavHeaderButton}>
            <Item 
                title="Menu"
                iconName='ios-menu'
                onPress={()=>navinfo.navigation.toggleDrawer()} />
        </HeaderButtons>
    }
}


export default CategoriesScreen