import {
  Alert,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {s, vs} from 'react-native-size-matters';
import AppColors from '../../themes/colors';
import AppText from '../../components/appText';
import {FlatList} from 'react-native-gesture-handler';
import BookCard from '../../components/bookCard/BookCard';
import axios from 'axios';
import {Icons} from '../../assests/icons/iconpath';

const HomeEbook = () => {
  const [bookData, setBookData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bkName, setBkName] = useState('');
  const [an, setAn] = useState('');
  const [price, setPrice] = useState('');
  const [bUrl, setBurl] = useState('');
  const [updateBookData,setUpdateBookData] = useState({});

  const getBookData = async () => {
    const endPointUrl = 'https://688b0d662a52cabb9f4fd283.mockapi.io/getBooks';
    try {
      const response = await axios.get(endPointUrl);
      console.log('ResponseData', response.data);
      setBookData(response.data);
    } catch {}
  };

  useEffect(() => {
    getBookData();
  }, []);

  const updateApi = async () => {
    const udateEndpoint =
      'https://688b0d662a52cabb9f4fd283.mockapi.io/getBooks';
    try {
      const response = await axios.post(udateEndpoint, {
        bookName: bkName,
        authorName: an,
        bookImage: bUrl,
        price: price,
      });
      if (response) {
        setIsModalOpen(false);
        getBookData();
        Alert.alert('Data Posted succesfully..');
        setBkName('');
        setAn('');
        setPrice('');
        setBurl('');
      }
    } catch (err) {
      console.log('error an occured', err);
    }
  };

  const deleteItem = async item => {
    console.log('first', item.id);
    const bkId = item.id;
    const endPointUrl = 'https://688b0d662a52cabb9f4fd283.mockapi.io/getBooks';
    try {
      const response = await axios.delete(`${endPointUrl}/${bkId}`);
      console.log('delete', response.data);
      if (response.status === 200) {
        getBookData();
        Alert.alert('Book Deleted succesfully..');
      }
    } catch {}
  };

  const updateItem = async (item) => {
    setUpdateBookData(item);

    setBkName(item.bookName)
    setAn(item.authorName)
    setPrice(item.price)
    setBurl(item.bookImage)
    setIsModalOpen(true)
  };

  const updateCallApi = async(item)=>{
        console.log('first', item.id);
    const bkId = item.id;
    const endPointUrl = 'https://688b0d662a52cabb9f4fd283.mockapi.io/getBooks';
    try {
     await axios.put(`${endPointUrl}/${bkId}`,{
         bookName: bkName,
        authorName: an,
        bookImage: bUrl,
        price: price,
      }).then((response)=>{
           getBookData();
        Alert.alert('Book Updated succesfully..');
        setIsModalOpen(false)
      }).catch((err)=>{
        console.log("first",err)
      })
     
    } catch {}
  }

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={bookData}
          keyExtractor={item => item?.id?.toString()}
          renderItem={({item}) => (
            <BookCard data={item} 
            deleteOnClick={() => deleteItem(item)}
            updateOnClick={()=>updateItem(item)}
            />
          )}
        />
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => setIsModalOpen(true)}>
          {Icons.add({color: 'white', size: 40})}
        </TouchableOpacity>
        <Modal
          visible={isModalOpen}
          animationType="slide"
          // transparent={true}
          onRequestClose={() => setIsModalOpen(false)}
          onShow={() => console.log('Modal Shown')}>
          <SafeAreaView style={styles.modalContent}>
            <View style={{padding: 15, flex: 1}}>
              <View>
                <TextInput
                  value={bkName}
                  onChangeText={setBkName}
                  placeholder="BooK name..."
                  placeholderTextColor={'black'}
                  style={{
                    borderColor: AppColors?.lightBorderGray,
                    borderWidth: 1,
                    width: '95%',
                    padding: 20,
                  }}
                />
              </View>
              <View>
                <TextInput
                  value={an}
                  onChangeText={setAn}
                  placeholder="Author name..."
                  placeholderTextColor={'black'}
                  style={{
                    borderColor: AppColors?.lightBorderGray,
                    borderWidth: 1,
                    width: '95%',
                    padding: 20,
                    marginTop: 20,
                  }}
                />
              </View>
              <View>
                <TextInput
                  value={price}
                  onChangeText={setPrice}
                  placeholder="Price ..."
                  placeholderTextColor={'black'}
                  style={{
                    borderColor: AppColors?.lightBorderGray,
                    borderWidth: 1,
                    width: '95%',
                    padding: 20,
                    marginTop: 20,
                  }}
                />
              </View>
              <View>
                <TextInput
                  value={bUrl}
                  onChangeText={setBurl}
                  placeholder="BooKUrl ..."
                  placeholderTextColor={'black'}
                  style={{
                    borderColor: AppColors?.lightBorderGray,
                    borderWidth: 1,
                    width: '95%',
                    padding: 20,
                    marginTop: 20,
                  }}
                />
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={styles.addBtn}
                onPress={() => updateBookData?updateCallApi(updateBookData): updateApi()}>
                <Text style={{color: 'white'}}>Update</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </>
  );
};

export default HomeEbook;

const styles = StyleSheet.create({
  addBtn: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: AppColors?.royalBlue,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  modalContent: {
    flex: 1,
    padding: 10,
    // backgroundColor:"red",
  },
});
