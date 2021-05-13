import React from 'react'
import {Platform} from 'react-native'
import {HeaderButton} from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
import Color from '../Constant/colors'

const NavHeaderButton = props=>{
    return (<HeaderButton  
    {...props}
     IconComponent={Ionicons} 
     iconSize={22} 
     color={Platform.OS==='android'?Color.white:Color.bg}   />)
}

export default NavHeaderButton