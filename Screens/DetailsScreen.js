import React from 'react'
import { StyleSheet, Text, View, Image, Button, } from 'react-native'

const DetailsScreen = ({navigation}) => {
    return (
        <View style={[styles.container]}>
            <Text></Text>
            <Image source = {{uri: 'https://www.britefish.net/wp-content/uploads/2019/06/logo-javascript-2.png' }}
             style = {{width: 300, height: 280}}/>
       </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  
});