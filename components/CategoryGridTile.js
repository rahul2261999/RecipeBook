import React from 'react'
import {StyleSheet,TouchableOpacity,View,Text,TouchableNativeFeedback,Platform} from 'react-native'

const CategoryGridTile = props =>{
    let TouchableCmp = TouchableOpacity
    if(Platform.OS==='android'&& Platform.Version>=21 ){
        TouchableCmp = TouchableNativeFeedback
    }
    return(
        <View style={style.listItem}>
            <TouchableCmp 
                style={{flex:1}}
                onPress={props.onSelect}>
                    <View style={{...style.container,...{backgroundColor:props.color}}}>
                        <Text style={style.title} numberOfLines={2}>{props.title}</Text>
                    </View>
            </TouchableCmp>
        </View>
    )
}
const style = StyleSheet.create({
    listItem:{
        flex:1,
        margin:15,
        height:120,
    },
    container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        elevation:3,
        padding:10,
        alignItems:'flex-end',
        justifyContent:'flex-end'

    },
    title:{
        fontSize:22,
        textAlign:'right',
        fontFamily:'open-sans-bold'
    }
})
export default CategoryGridTile