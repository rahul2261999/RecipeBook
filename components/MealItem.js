import React from 'react'
import {StyleSheet,View,Text,TouchableOpacity,ImageBackground} from 'react-native'

const MealItem = props =>{
    return (
    <View style={style.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
            <View style={{...style.mealRow,...style.mealHeader}}>
                <ImageBackground source={{uri:props.image}} style={style.bgImage}>
                    <View style={style.titleContainer}>
                        <Text style={style.title} numberOfLines={1}>{props.title}</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={{...style.mealRow,...style.mealDetails}}>
                    <Text>{props.duration}</Text>
                    <Text>{props.complexity}</Text>
                    <Text>{props.affordability}</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}
const style = StyleSheet.create({
    mealItem:{
        height:200,
        width:'100%',
        backgroundColor:'#f5f5f5',
        marginBottom:5,
        borderRadius:10,
        overflow:'hidden'
    },
    bgImage:{
        height:'100%',
        width:'100%',
        justifyContent:'flex-end'
    },
    mealRow:{
        flexDirection:'row'
    },
    mealHeader:{
        height:'85%'
    },
    mealDetails:{
        paddingHorizontal:20,
        justifyContent:'space-between',
        height:'15%',
        alignItems:'center'
    },
    titleContainer:{
        backgroundColor:'rgba(0,0,0,0.6)',
        padding:5,
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:20,
        color:'white',
        textAlign:'center'
    }
})
export default MealItem