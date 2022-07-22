import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@components/Home/Home";
import { Create } from "@modules/lists/components/Create";
import { Lists } from "@modules/lists/components/Lists";
import { Profile } from "@components/Profile/Profile";
import Icon from "react-native-vector-icons/MaterialIcons";
import {Text, useTheme} from "react-native-paper";

const Tab = createBottomTabNavigator();

export default function Menu() {

  const {colors} = useTheme() as any;

  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home}
        options={({route}) => ({
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

      <Tab.Screen name="lists" component={Lists}
        options={({route}) => ({
          tabBarIcon: ({focused}) => {
            if (focused === true && route.name === "lists") {
              return <Icon name="list" size={27} color={colors.primary} />
            }
            return <Icon name="list" size={27}/>
          },
          tabBarLabelStyle: {
            fontSize:  12,
          },
          tabBarLabel: ({focused}) => {
            if (focused === true && route.name === "lists") {
              return <Text style={{
                fontWeight: "600",
                color: colors.primary
              }}>Listas</Text>
            }
            return <Text style={{
              fontSize: 12,
              color: colors.text
            }}>Listas</Text>
          },
          
        })}
      />
      <Tab.Screen name="profile" component={Profile} 
         options={({route}) => ({
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
              }}>Listas</Text>
            }
            return <Text style={{
              fontSize: 12,
              color: colors.text
            }}>Listas</Text>
          },
          
        })}
      />
    </Tab.Navigator>
  )
}
