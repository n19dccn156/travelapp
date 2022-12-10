import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken, LoginResult, Profile } from 'react-native-fbsdk-next';

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