import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {shipping_Fees, taxes} from '../../constants/constants';
import navigationSerivices from '../../routes/navigationSerivices';

interface TotalsViewProps {
  itemsPrice: number;
  orderTotal: number;
}
const TotalsView: FC<TotalsViewProps> = ({itemsPrice, orderTotal}) => {
  return (
    <View style={{margin: 10, padding: 10}}>
      <View style={{borderBottomColor: 'grey', borderBottomWidth: 1}}>
        <View style={styles.row}>
          <Text style={{flex: 1, fontSize: 18, fontWeight: '600'}}>
            Items Price
          </Text>
          <Text>$ {itemsPrice}</Text>
        </View>
        <View style={styles.row}>
          <Text style={{flex: 1, fontSize: 18, fontWeight: '600'}}>
            Taxes & Fees
          </Text>
          <Text>$ {taxes}</Text>
        </View>
        <View style={[styles.row, {paddingBottom: 20}]}>
          <Text style={{flex: 1, fontSize: 18, fontWeight: '600'}}>
            Shipping Fees
          </Text>
          <Text>$ {shipping_Fees}</Text>
        </View>
      </View>
      <View>
        <View style={styles.row}>
          <Text style={{flex: 1, fontSize: 18, fontWeight: '600'}}>
            Order Total
          </Text>
          <Text>$ {orderTotal}</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            padding: 10,
            borderRadius: 15,
            alignItems: 'center',
            marginTop: 20,
          }}
          onPress={()=>{
            navigationSerivices.navigate("CheckOut")
          }}
          >
          <Text style={{color: 'white'}}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TotalsView;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 15,
  },
});
