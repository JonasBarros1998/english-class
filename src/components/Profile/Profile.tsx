import React from 'react';
import { Image, Text, View } from 'react-native';
import {styles} from "./styles/profile";
import store from "@state/redux/store";
import { LogoutButton } from '@auth/components/LogoutButton';

const [{email, name, photoUrl}] = store.getState().user;

export function Profile() {
  return (
    <>
      <View style={{
        ...styles({direction: "row"}).container
      }}>
        <View 
          style={{
            ...styles().card,
          }}>
          <View style={{...styles({direction: "row"}).container}}>
            <Image 
              style={{
                ...styles().photo}}
              source={{
                uri: photoUrl
              }} 
            />
          </View>
          <View>
            <Text style={{...styles().description}}>{name}</Text>
            <Text style={{...styles().description}}>{email}</Text>
          </View>
          <LogoutButton />
        </View>
      </View>
    </>
  )
}
