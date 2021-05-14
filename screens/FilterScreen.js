import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import NavHeaderButton from '../components/NavHeaderButton'

const FiletrScreen = props =>{
    return(
        <View>
            <Text>The Filter  Screen</Text>
        </View>
    )

    
}
const style = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

FiletrScreen.navigationOptions= navinfo =>{
    return{
        headerTitle:"Filter Screen",
        headerLeft:()=><HeaderButtons HeaderButtonComponent={NavHeaderButton}>
                <Item title="Menu" iconName="ios-menu" onPress={()=>navinfo.navigation.toggleDrawer()} />
            </HeaderButtons>
    }
}

export default FiletrScreen