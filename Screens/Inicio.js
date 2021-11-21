import React from 'react'
import { StyleSheet, Text, View, Image,  } from 'react-native'

export default function Inicio() {
    return (
        <View style={styles.container}>
            <Text style={{fontWeight: "bold",fontSize: 24}}> Bienvenido</Text>
            <Image source = {{uri: 'https://i.pinimg.com/originals/da/93/b6/da93b6529f16c39146560e8032dba38c.png' }}
            style = {{width: 300, height: 280}}/>
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
});