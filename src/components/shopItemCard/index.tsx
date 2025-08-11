import {FlatList, StyleSheet, Text, TouchableOpacity, View,Image, Dimensions} from 'react-native';
import React from 'react';
import {dummyData} from '../../data/shoppingCartData/data';
import {s, vs} from 'react-native-size-matters';
import AppText from '../appText';

const screenWidth = Dimensions.get('screen').width;
console.log("first",screenWidth)
interface RenderCardItems {
  id: string;
  image: any;
  title: string;
  price: string;
  heart: React.ReactNode
}
const ShopItemCard = () => {
  const renderCard = (item: RenderCardItems) => {
    return (
      <TouchableOpacity style={styles.card}>
        {/* <View style={styles.overlay}/> */}
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              width: s(55),
              height: vs(20),
              margin:s(6),
              borderRadius:s(12)
            }}>
            <AppText
              title="50% OFF"
              style={{
                fontSize: 10,
                fontWeight: '600',
                color: '#000000BF',
              }}
            />
          </View>
          <TouchableOpacity  style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              width: s(20),
              height: vs(20),
              margin:s(6),
              borderRadius:s(10),
              borderColor:"#D3D3D3",
              borderWidth:1
            }}>
                {item.heart}
          </TouchableOpacity>
        </View>
        <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
           <Image source={{uri:item.image}} style={{width:100,height:100}} resizeMode='cover'/>
        </View>
        <View style={{marginBottom:20,paddingLeft:20}}>
            <AppText title={item.title} style={{}}/>
            <AppText title={item.price} style={{}}/>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={dummyData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => renderCard(item)}
        numColumns={2}
        contentContainerStyle={{
          columnGap: 10,
          rowGap: 10,
          paddingBottom: 150,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ShopItemCard;

const styles = StyleSheet.create({
  card: {
    width: (screenWidth-60)/2,
    height: vs(160),
    borderRadius: s(15),
    backgroundColor: 'white',
    marginRight: 20,
  },
//   overlay:{
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor:"rgba(0,0,0,0.45)"
//   }
});
