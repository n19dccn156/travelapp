import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

export function CustomButton({onPress,text, type="PRIMARY", bgColor, fgColor, url}) {
    console.log("url", url);
    return(
        
        <Pressable 
         onPress={onPress} 
         style={[styles.container, 
                styles[`container_${type}`],
                bgColor ? {backgroundColor: bgColor}:{},
                styles.buttonIcon
                ]}>
        

            {url? <Image
                style={styles.icon} 
                source={url}/> : null
             }
           
            
            <Text style={[styles.text,
                         styles[`text_${type}`],
                         fgColor ? {color : fgColor}: {},
                         ]}>{text}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container:{
       
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems:'center',
        borderRadius:5,
        
    },

    container_PRIMARY:{
        backgroundColor:'#3B71F3',
    },

    container_TERIARY:{
        
    },

    text:{
        fontWeight:'bold',
        color:'white',
    },

    text_TERIARY:{
        color:'gray',
    },
    buttonIcon:{
        flexDirection:'row',
        alignItems:'center'
    },
    icon:{
        width:30,
        height:30,
        
    }
});