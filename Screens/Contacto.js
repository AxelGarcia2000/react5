import React from 'react'
import { StyleSheet, Text, View, Image, Button, } from 'react-native'

const Contacto = ({navigation}) => {
    return (
        <View style={[styles.container]}>
               <Text style={{fontWeight: "bold",fontSize: 24}}>Disculpe la tardansa, no pude con el codigo siempre me salio error 500 y me atrase intentandolo</Text>
            <Image source = {{uri: 'https://cdn.memegenerator.es/imagenes/memes/full/32/25/32250280.jpg' }}
             style = {{width: 300, height: 350}}/>
       </View>
    )
}

export default Contacto

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  
});