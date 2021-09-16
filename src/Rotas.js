import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Servicos from './telas/Servicos';
import Carrinho from './telas/Carrinho';
import { cores } from './estilos';

const Tab = createBottomTabNavigator();

export default function Rotas() {

  return <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;


          iconName = '';


          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        "tabBarActiveTintColor": cores.roxo,
        "tabBarInactiveTintColor": cores.claro,
        "tabBarActiveBackgroundColor": cores.roxo,
        "tabBarInactiveBackgroundColor": cores.laranja,
        "tabBarLabelStyle": {
          "width": "100%",
          "flex": 4,
          "fontWeight": "bold",
          "fontSize": 16,
          "lineHeight": 21,
          "marginTop": 1,
          "paddingTop": 7,
          "paddingBottom": 5,
          "backgroundColor": cores.laranja
        },
        tabBarHideOnKeyboard: true,
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ]
      }}>
      <Tab.Screen name="Serviços" component={Servicos} />
      <Tab.Screen name="Carrinho" component={Carrinho} />
    </Tab.Navigator>
  </NavigationContainer>

}