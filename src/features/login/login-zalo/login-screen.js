import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView  } from 'react-native';
import React, {useState } from 'react';
import Logo from './images/sun.jpg';
import { CustomInput } from "./components/CustomInput/CustomInput.js";
import { CustomButton } from "./components/CustomButton/CustomButton.js";

// const LoginScreen = ({navigation}: {navigation: any}) => {
//   const {username, setUsername} = useState('');
//   const {password, setPassword} = useState('');

//   const {height} = useWindowDimensions();

//   return(
//     <View>
//       <Image 
//         source={Logo} 
//         style={styles.logo, {height:height*0.3}}
//         resizeMode="containt"/>

//         <CustomInput placeholder="Username" value={username} setValue={setUsername} secureTextEntry={true}/>
//         <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>

//   </View>
//   );
// }

export function LoginScreen({navigation}) {

  const {username, setUsername} = useState('');
  const {password, setPassword} = useState('');

  const onSignInPressed=()=>{
    console.warn("Sign in");
  }

  const onForgotPasswordPressed = () =>{
    console.warn('onForgotPasswordPressed');
    
  };

  const onSigninFacebook=() =>{
    console.warn('onSigninFacebook');
    
  };

  const onSigninGoogle=() =>{
    console.warn('onSigninGoogle');
    
  };

  const onSigninApple=() =>{
    console.warn('onSigninApple');
    
  };

  const onSignUpPressed=() =>{
    console.warn('onSignUpPressed');
    
  };

  const {height} = useWindowDimensions();

  return(
    <ScrollView>
      <View style={styles.root}>
      <Image 
        source={Logo} 
        style={[styles.logo, {height:height*0.3}]}
        resizeMode="contain"/>

        <CustomInput placeholder="Username" value={username} setValue={setUsername} secureTextEntry={false}/>
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>

        <CustomButton text='Sign in' onPress={onSignInPressed} />
        <CustomButton text='Forget password?' onPress={onForgotPasswordPressed} type="TERIARY"/>
        
        <CustomButton 
          text='Sign in with Facebook' 
          onPress={onSignInPressed}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
          url={require('./images/sun.jpg')} />
        <CustomButton 
          text='Sign in with Google' 
          onPress={onSignInPressed}
          bgColor="#FAE9EA"
          fgColor="#DD4D44" />
        <CustomButton 
          text='Sign in with Apple' 
          onPress={onSignInPressed} 
          bgColor="#e3e3e3"
          fgColor="#363636"/>

        <CustomButton  
          text="Don't have an account? Create one" 
          onPress={onSignUpPressed} type="TERIARY"/>
  </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#F9FBFC',
   
  },
  logo:{
    width:'70%',
    maxWidth: 300,
    height:100,
    
  }
})

// export default LoginScreen;