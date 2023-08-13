import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@components/Home/Home";
import { Create } from "@modules/lists/components/Create";
import { Profile } from "@components/Profile/Profile";
import Icon from "react-native-vector-icons/MaterialIcons";
import CommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import {Text, useTheme} from "react-native-paper";
import Header from "@components/Home/Header";
import FlashCards from "@modules/flash-cards/FlashCards";


const Tab = createBottomTabNavigator();

export default function Menu() {

  const {colors} = useTheme() as any;

  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home}
        options={({route}) => ({
          headerTitle: 'Inicio',
          header: (headerProps) => {
            return <Header {...headerProps} />
          },
          tabBarIcon: ({focused}) => {
            if (focused === true && route.name === "home") {
              return <Icon name="home" size={27} color={colors.primary} />
            }
            return <Icon name="home" size={27}/>
          },
          tabBarLabelStyle: {
            fontSize:  12,
          },
          tabBarLabel: ({focused}) => {
            if (focused === true && route.name === "home") {
              return <Text style={{
                fontWeight: "600",
                color: colors.primary
              }}>Inicio</Text>
            }
            return <Text style={{
              fontSize: 12,
              color: colors.text
            }}>Inicio</Text>
          },
        })}
      />

      <Tab.Screen name="create" component={Create} 
        options={({route,}) => ({
          tabBarIcon: ({focused}) => {
            if (focused === true && route.name === "create") {
              return <Icon name="playlist-add" size={27} color={colors.primary} />
            }
            return <Icon name="playlist-add" size={27}/>
          },
          tabBarLabelStyle: {
            fontSize:  12,
          },
          tabBarLabel: ({focused}) => {
            if (focused === true && route.name === "create") {
              return <Text style={{
                fontWeight: "600",
                color: colors.primary
              }}>Criar</Text>
            }
            return <Text style={{
              fontSize: 12,
              color: colors.text
            }}>Criar</Text>
          },
          headerShown: false,
        })}
      />

      <Tab.Screen name="flashcards" component={FlashCards}
        options={({route}) => ({
          headerTitle: "Flash cards",
          tabBarIcon: ({focused}) => {
            if (focused === true && route.name === "flashcards") {
              return <CommunityIcons name="cards" size={27} color={colors.primary} />
            }
            return <CommunityIcons name="cards" size={27}/>
          },
          tabBarLabelStyle: {
            fontSize:  12,
          },
          tabBarLabel: ({focused}) => {
            if (focused === true && route.name === "flashcards") {
              return <Text style={{
                fontWeight: "600",
                color: colors.primary
              }}>Flash cards</Text>
            }
            return <Text style={{
              fontSize: 12,
              color: colors.text
            }}>Flash cards</Text>
          },
          
        })}
      />
      <Tab.Screen name="profile" component={Profile} 
         options={({route}) => ({
          headerTitle: 'Perfil',
          tabBarIcon: ({focused}) => {
            if (focused === true && route.name === "profile") {
              return <Icon name="account-circle" size={27} color={colors.primary} />
            }
            return <Icon name="account-circle" size={27}/>
          },
          tabBarLabelStyle: {
            fontSize:  12,
          },
          tabBarLabel: ({focused}) => {
            if (focused === true && route.name === "profile") {
              return <Text style={{
                fontWeight: "600",
                color: colors.primary
              }}>Perfil</Text>
            }
            return <Text style={{
              fontSize: 12,
              color: colors.text
            }}>Perfil</Text>
          },
          
        })}
      />
    </Tab.Navigator>
  )
}
