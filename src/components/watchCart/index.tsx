import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BookCard from '../bookCard/BookCard';
import {dummyData} from '../../data/shoppingCartData/data';
import {s} from 'react-native-size-matters';
import AppText from '../appText';
import { Icons } from '../../assests/icons/iconpath';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface WatchCartProps{
   imageUri:string,
  productName:string,
  price:number,
  quantity:number,
  onDeletePress:()=>void,
  onIncreasePress:()=>void,
  onDecressPress:()=>void
}

const WatchCart: React.FC<WatchCartProps> = ({
  imageUri,
  productName,
  price,
  quantity,
  onDeletePress,
  onIncreasePress,
  onDecressPress
}) => {
  return (
    <View style={{flex:1,margin:10}}>
      <View
        style={{
          width: '100%',
          backgroundColor: 'white',
          shadowColor: 'black',
          shadowOffset: {width: 10, height: 5},
          shadowOpacity:.5,
          shadowRadius:10,
        //   height:"18%",
        flexDirection:"row",
        // alignItems:"center",
        borderRadius:20
        }}>
            <View style={{flex:1.8,padding:5}}>
            <Image source={{uri:imageUri}} style={{width:100,height:100}} resizeMode='cover'/>
            </View>
            <View style={{flex:3.5,marginStart:10}}>
                <AppText title={productName} style={{fontSize:16,fontWeight:"700"}}/>
                {/* <AppText title={'Ayyappa'} style={{fontSize:14,fontWeight:"100"}}/> */}
                <AppText title={price} style={{fontSize:14,fontWeight:"600",marginTop:10}}/>
                <View style={{width:80,height:30,borderRadius:20,borderColor:"Black",borderWidth:1, marginTop:20,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
                    <TouchableOpacity onPress={onIncreasePress}>
                        {Icons?.add({ color:"black", size:17 })}
                    </TouchableOpacity>
                    <View>
                      <Text>{quantity}</Text>
                    </View>
                    <TouchableOpacity onPress={onDecressPress}>
                       <FontAwesome name="minus" size={15} color={"black"}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:1.5,position:"absolute",bottom:10,right:10}}>
                <TouchableOpacity onPress={onDeletePress} style={{flexDirection:"row",alignItems:"center"}}>
                    {Icons?.delete}
                    <AppText title={'delete'} style={undefined}/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

export default WatchCart;

const styles = StyleSheet.create({});
