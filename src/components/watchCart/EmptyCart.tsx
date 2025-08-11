import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icons } from '../../assests/icons/iconpath'
import AppText from '../appText'

const EmptyCart = () => {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",}}>
      {Icons?.cart}
      <AppText title={'Your Cart Screen hello dude is Empty done eyy'} style={{fontSize:20,textAlign:"center",paddingHorizontal:30}}/>
    </View>
  )
}

export default EmptyCart

const styles = StyleSheet.create({})