import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { screenPath } from '../screenPath';

const drawerTabs = () => {

    const Drawer = createDrawerNavigator();
  return (
  <Drawer.Navigator 
  // screenOptions={{
  //   title:"EShop"
  // }}
  >
    <Drawer.Screen name={"Home"} component={screenPath.bottomTabs}/>
    <Drawer.Screen name={"Ebook"} component={screenPath.HomeEbook}/>
    <Drawer.Screen name={"Counter"} component={screenPath.counter}/>
    <Drawer.Screen name={"TODO"} component={screenPath.TodoList}/>
    <Drawer.Screen name={"SearchFilter"} component={screenPath.SearchFilter}/>

  </Drawer.Navigator>
  )
}

export default drawerTabs

const styles = StyleSheet.create({})