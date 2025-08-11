import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { screenPath } from './screenPath';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { getWatches } from '../api';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomTabs = () => {

  
    const Tab = createBottomTabNavigator();
  return (
   <Tab.Navigator 
   screenOptions={{
    headerShown:false,
    tabBarStyle:{
        height:60,
    },
    tabBarIconStyle:{
        width:30,
        color:"red"
    },
   tabBarActiveTintColor:"blue",
   tabBarInactiveTintColor:"red"
//    tabBarActiveBackgroundColor:"green"
   }}>
    <Tab.Screen name="home" component={screenPath?.Home} options={{title:"Home",tabBarIcon:({color})=>
<MaterialIcons name="home" size={24} color={color} />}}/>
    <Tab.Screen name="WatchCart" component={screenPath?.watchCart}options={{title:"Cart",tabBarIcon:({color})=>

<Feather name="shopping-cart" size={24} color={color}/>}}/>
    <Tab.Screen name="payment" component={screenPath?.paymentScreen} options={{title:"Payment",
        tabBarIcon:({color})=><MaterialCommunityIcons name="credit-card-outline" size={24} color={color}/>
    }}/>
      <Tab.Screen name="Profile" component={screenPath?.Profile} options={{
        tabBarIcon:({color})=> <Icon name="user" size={24} color={color} />
      }}/>

   </Tab.Navigator>
  )
}

export default BottomTabs
