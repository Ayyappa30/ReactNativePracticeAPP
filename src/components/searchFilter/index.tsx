import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icons } from '../../assests/icons/iconpath'

const data = [
    {
        id:1,
        title:"ayyappa",
        isComplete:"true"
    },
      {
        id:2,
        title:"ajith",
        isComplete:"true"
    },
      {
        id:3,
        title:"reks",
        isComplete:"false"
    },
      {
        id:4,
        title:"dhiyan",
        isComplete:"false"
    },
      {
        id:5,
        title:"darvik",
        isComplete:"true"
    }
]

let arr = ["1",1,true,null,undefined,["arr",1],{1:1}]

const SearchFilter = () => {

    const [filteredData,setFilteredData]= useState(data);
    const [searchText,setSearchText] = useState('')

    useEffect(()=>{
        const time = setTimeout(()=>{
        if(searchText.trim() === ''){
            setFilteredData(data)
        }else{
            // const filteredList = setFilteredData((existingData)=>existingData.filter((item)=>item.title.toLowerCase() === searchText.toLowerCase()))
            const filteredList = data.filter((item)=>item.title.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredData(filteredList)
            console.log("first",filteredList);
        }
            },10)
            return ()=> clearTimeout(time)
        
    },[searchText])

  return (
    <View style={{flex:1,margin:10}}>
        <View style={{
            padding:10,
            borderRadius:8,
            borderColor:"grey",
            borderWidth:1,
            flexDirection:"row"
        }}>

     <TextInput style={{flex:1}}
     value={searchText}
     onChangeText={setSearchText}
     />
     <TouchableOpacity>
        {Icons.search}
     </TouchableOpacity>
        </View>
        <View>
            <FlatList
            data={filteredData}
            keyExtractor={(item)=>item.id.toString()}
            contentContainerStyle={{
                margin:10,
                paddingTop:10,
                rowGap:10
            }}
           
            renderItem={({item})=>{
                return (
                    <View>
                        <Text>{item?.title}</Text>
                    </View>
                )
            }}
            />
        </View>
    </View>
  )
}

export default SearchFilter

const styles = StyleSheet.create({})