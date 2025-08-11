import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppColors from '../../themes/colors';


export const Icons = {
  search: <Feather name="search" size={24} color="black" />,
  shop: <Entypo name="shop" size={24} color="black" />,
  dress: <MaterialCommunityIcons name="tshirt-crew" size={24} color="black" />,
  glasses: <MaterialCommunityIcons name="glasses" size={24} color="black" />,
  cart:({color,size}:any)=> <Feather name="shopping-cart" size={size} color={color} />,
  back: <Entypo name="chevron-left" size={24} color="black" />,
  watch: <Feather name="watch" size={24} color="black" />,
  eye: <Feather name="eye" size={24} color="black" />,
  heart: <AntDesign name="heart" size={18} color="grey" />,
  add: ({ color, size }:any)=>  <MaterialIcons name="add" size={size} color={color} />,

   delete: <MaterialIcons name="delete" size={24} color="red" />,
  edit: <Feather name="edit" size={15} color="orange" />,

  //payment types
  cash: <FontAwesome5 name="money-bill-wave" size={24} color="green" />,
  visa: <FontAwesome5 name="cc-visa" size={24} color="#1A1F71" />,
  paypal: <FontAwesome5 name="cc-paypal" size={24} color="#003087" />,
  mastercard: <FontAwesome5 name="cc-mastercard" size={24} color="#EB001B" />,
  rupay: <MaterialCommunityIcons name="credit-card-chip" size={24} color="#1B4F9C" />, // Since RuPay is not direct, using a chip icon
  gpay: <MaterialCommunityIcons name="google" size={24} color="#4285F4" />,
  applepay: <FontAwesome5 name="apple-pay" size={24} color="black" />,
};
