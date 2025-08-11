import {FlatList, StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React, {FC, useState} from 'react';
import {categoryItem} from '../../data/shoppingCartData/cardData';
import {s, vs} from 'react-native-size-matters';

interface CategoryItemProps {
  id: number;
  icon: React.ReactNode;
}

interface categoryItem{
     data:CategoryItemProps[],
  style: StyleProp<ViewStyle>;
}

const CategoryItem:FC<categoryItem> = ({data,style}) => {
  const [isActiveId,setIsActiveId] = useState(1);

 

  const renderCategoryItem = (item: CategoryItemProps) => {
    const isActive = item.id === isActiveId
    return (
      <TouchableOpacity
        style={[style, isActive && {backgroundColor: '#F17547'}]}
        onPress={()=>setIsActiveId(item.id)}
        >
        {item.icon}
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => renderCategoryItem(item)}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  
});
