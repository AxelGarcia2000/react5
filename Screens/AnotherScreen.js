import React from 'react'
import { StyleSheet, Text, View,Image, Button } from 'react-native'

const AnotherScreen = ({navigation}) => {
    return (
        <View style={[styles.container,styles.estilo]}>
           <Image source = {{uri: 'https://coder.clothing/images/stories/virtuemart/product/react-logo.png' }}
   style = {{width: 300, height: 300}}/>
        </View>
    )
}

export default AnotherScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },

    estilo:{
        backgroundColor:'#929288'
    }
});