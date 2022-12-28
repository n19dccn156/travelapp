import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken, LoginResult } from 'react-native-fbsdk-next';
import { Profile } from "react-native-fbsdk-next";
import { useDispatch, useSelector } from 'react-redux';
const currentProfile = Profile.getCurrentProfile().then(
  function(currentProfile) {
    if (currentProfile) {
      console.log(
        // currentProfile.email + "_\n" +
        // currentProfile.firstName + "_\n" +
        // currentProfile.middleName + "_\n" +
        // currentProfile.lastName + "_\n" +
        currentProfile.imageURL + "_\n"
        // currentProfile.userID + "_\n"
      );
    }
  }
);

export function Login()  {
  const dispatch= useDispatch();
    return (
      <View>
        <LoginButton
          onLoginFinished={
            ((error: Record<string, unknown>, result: LoginResult) => {
              if (error) {
                console.log("login has error: " + error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data: any) => {
                    console.log(data.accessToken.toString());
                    currentProfile;
                  }
                )
              }
            })
          }
          onLogoutFinished={() => console.log("logout.")}/>
      </View>
    );
  
};