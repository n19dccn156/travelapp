import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import React from 'react'


export function CustomInput ({value, setValue, placeholder, secureTextEntry}) {
  return (
    <View style={[styles.container,styles.inputIcon]}>
      <Image
        style={styles.icon} 
        source={require('../../images/sun.jpg')}/>
      <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:5,
    },
    inputIcon:{
      flexDirection:'row',
      alignItems:'center'
    },
    input:{
      
    },
    icon:{
      width:30,
      height:30
    }
});

// export default CustomInput;