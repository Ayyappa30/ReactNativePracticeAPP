import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AppColors from '../../themes/colors';
import auth from "@react-native-firebase/auth"
import navigationSerivices from '../../routes/navigationSerivices';

const Profile = () => {
  return (
    <SafeAreaView style={{flex:1,marginTop:10}}>
    <TouchableOpacity style={styles.row}>
        <Text style={{flex:1}}>My Orders</Text>
       <Icon name="chevron-right" size={20} color="#333" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.row}>
        <Text style={{flex:1}}>Language</Text>
       <Icon name="chevron-right" size={20} color="#333" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.row} 
    onPress={()=>{
      auth().signOut().then(()=>{
        console.log("User signed out successfully")
        Alert.alert("User signed out successfully");
        navigationSerivices.navigate("Login")
      }).catch((err)=>console.log("first",err))
    }}
    >
        <Text style={{flex:1}}>Logout</Text>
       <Icon name="chevron-right" size={20} color="#333" />
    </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
    row:{
        flexDirection:"row",
        padding:15,
        borderBottomColor:AppColors.lightBorderGray,
      borderBottomWidth:1
    }
})