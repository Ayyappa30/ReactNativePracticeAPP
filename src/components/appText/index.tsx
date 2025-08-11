import { StyleProp, StyleSheet, Text, View, TextStyle,ViewStyle } from 'react-native'
import React,{FC} from 'react'

interface AppTextProps{
    title: string | number,
    style: StyleProp< ViewStyle | TextStyle>
}

const AppText: FC<AppTextProps> = ({title,style}) => {
  return (
    <>
      <Text style={style}>{title}</Text>
    </>
  )
}

export default AppText

const styles = StyleSheet.create({})