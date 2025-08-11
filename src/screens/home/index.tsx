import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import BaseContainer from '../../components/baseContainer';
import Entypo from 'react-native-vector-icons/Entypo';
import {s, vs} from 'react-native-size-matters';
import AppText from '../../components/appText';
import styles from './styles';
import HandSwing from '../../assests/svg/handSwing';
import ShopHomeCard from '../../components/shoppingCart';
import CategoryItem from '../../components/categoryItem';
import { Icons } from '../../assests/icons/iconpath';
import ShopItemCard from '../../components/shopItemCard';
import { categoryItem } from '../../data/shoppingCartData/cardData';
import { getWatches } from '../../api';

const Home = () => {

  const [isOfferCardData,setIsOfferCardData] = useState([]);
  const [isHeaderChange, setIsHeaderChange] = useState(false)

    useEffect(()=>{
  
          const getWatchesProductList = async()=>{
               const data = await getWatches();
          const responseData = await data?.data
          console.log("first",JSON.stringify(responseData,null,3))
          setIsOfferCardData(responseData);
          }
         getWatchesProductList();
      },[])
  
  return (
    <BaseContainer
    headerStyle={{}}
      header={
      undefined
      }
      bodyStyle={{flex: 0.92, padding: 5}}
      body={
        <>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <AppText title="Hello Fellow" style={styles.headerText} />
              <HandSwing style={{marginStart: s(5)}} />
            </View>
            <AppText
              title="Let's Start Shopping"
              style={{
                fontSize: 12,
                fontWeight: '600',
                color: '#00000080',
                marginTop: 8,
              }}
            />
          </View>
          <View style={{marginTop: vs(15)}}>
            <ShopHomeCard shopCardData={isOfferCardData} />
          </View>
          <View style={{marginTop: vs(20),flex:1}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <AppText
                title="Top Categories"
                style={{fontSize: 20, fontWeight: '600'}}
              />
              <AppText
                title="See All"
                style={{fontSize: 16, fontWeight: '500', color: '#F17547'}}
              />
            </View>
             <View style={{marginTop: vs(20)}}>
              <CategoryItem data={categoryItem} style={styles.card}/>
            </View>
             <View style={{marginTop: vs(20)}}>
              <ShopItemCard/>
            </View>
          </View>
        </>
      }
    />
  );
};

export default Home;
