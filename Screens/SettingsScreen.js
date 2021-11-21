
import React from 'react'
import { StyleSheet, Text, View, Image, } from 'react-native'

export default function SettingsScreen() {
    return (
        <View style={[styles.container,styles.estilo]}>    
            <Image source = {{uri: 'https://pngimg.com/uploads/github/github_PNG45.png' }}
            style = {{width: 300, height:300 }}/>
            <Text style={{fontWeight: "bold",fontSize: 24}}> AxelGarcia2000</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    estilo:{
        backgroundColor:'#0C676C'
    }
});