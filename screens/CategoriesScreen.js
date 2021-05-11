import React from 'react';
import {FlatList} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile'
import {CATEGORIES} from '../data/raw-data'



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


export default CategoriesScreen