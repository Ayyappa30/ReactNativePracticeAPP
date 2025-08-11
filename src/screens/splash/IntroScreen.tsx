import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { s, vs } from 'react-native-size-matters'
import FoodLogo from '../../assests/svg/FoodLogo'
import BottomLogo from '../../assests/svg/BottomLogo'
import navigationSerivices from '../../routes/navigationSerivices'
import { useFocusEffect } from '@react-navigation/native'

const IntroScreen = () => {

    useFocusEffect(
      useCallback(()=>{
          const time = setTimeout(()=>{
            navigationSerivices.navigate("Login")
        },3000)
        return () =>clearTimeout(time);
      },[]))

  return (
    <View style={styles.container}>
      <FoodLogo/>
        <BottomLogo style={styles.bottomLogo}/>
    </View>
  )
}

export default IntroScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        padding:s(16)
    },
    bottomLogo:{
        position:"absolute",
        bottom:s(10),
        width: s(30),
        height:vs(30),
        right:s(10)
    }
})