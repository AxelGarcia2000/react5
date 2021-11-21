import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AboutScreen() {
    return (
        <View style={[styles.container,styles.estilo]}>
            <Text style={{fontWeight: "bold",fontSize: 24}}> Acerca de.</Text>
               
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

estilo:{
    backgroundColor:'green'
}
});