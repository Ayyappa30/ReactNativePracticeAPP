import {FlatList, StyleSheet, Text, TouchableOpacity, View,Image, Dimensions, SafeAreaView} from 'react-native';
import React from 'react';
import {dummyData} from '../../data/shoppingCartData/data';
import {s, vs} from 'react-native-size-matters';
import AppText from '../appText';
import { products } from '../../data/products';
import { Icons } from '../../assests/icons/iconpath';
import AppColors from '../../themes/colors';
import { useDispatch } from 'react-redux';
import { addItemsToCart } from '../../store/reducers/cartSlice';

const screenWidth = Dimensions.get('screen').width;


interface RenderCardItems {
  id: number;
  imageURL: any;
  title: string;
  price: number;
}
const Home = () => {

    const dispatch = useDispatch();
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
              backgroundColor: AppColors?.lightGray,
              width: s(20),
              height: vs(20),
              margin:s(6),
              borderRadius:s(10),
              borderColor:"#D3D3D3",
              borderWidth:1
            }}
            onPress={()=>{
                dispatch(addItemsToCart(item))
            }}
            >
                {Icons?.cart({color:"black",size:10})}
          </TouchableOpacity>
        </View>
        <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
           <Image source={{uri:item.imageURL}} style={{width:100,height:100}} resizeMode='cover'/>
        </View>
        <View style={{marginBottom:20,paddingLeft:20}}>
            <AppText title={item.title} style={{}}/>
            <AppText title={`${item.price} $`} style={{}}/>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex:1,margin:10}}>
    <View >
      <FlatList
        data={products}
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
    </SafeAreaView>
  );
};

export default Home;

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
