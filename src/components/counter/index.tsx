import { Button, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'

const Counter = () => {
    const [isCounter,setIsCounter] = useState(1);

    const incrementFunction = () => {

    }

    function decrease(){

    }
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20}}>{isCounter}</Text>
      <View style={{flexDirection:"row"}}>

      <Button
      title='increase'
      onPress={()=>{
        setIsCounter((prev)=>prev+1);
      }}
      />
      <Button
      title='decrease'
      onPress={()=>{
        setIsCounter((prev)=>prev-1);
      }}
      />
      </View>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})