import {
  Button,
  FlatList,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Icons} from '../../assests/icons/iconpath';

interface TodoProps {
  id: number;
  title: string;
  toggleCondition: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState('');
  const [todoList, setTodoList] = useState<TodoProps[]>([]);
  const [selectedItem, setSeletedItems] = useState<number[]>([]);
  const [toggle, setToggle] = useState<boolean[]>([]);
  const [isDark,setIsDark] = useState<boolean>(false)

  const onDeletePress = (item: TodoProps) => {
    console.log('DeleteItemID', item.id);
    const filteredData = todoList.filter(todo => todo.id != item.id);
    console.log('first,', filteredData);
    setTodoList(filteredData);
  };

  const selectMultipleTodo = (id: number) => {
    if (selectedItem.includes(id)) {
      // const filteredSelected =selectedItem.filter((item)=>item?.id != id);
      setSeletedItems(prev => prev.filter(itemId => itemId != id));
      console.log('selectedItems', selectedItem);
    } else {
      setSeletedItems(prev => [...prev, id]);
    }
  };

  const renderToggle = (toggleId: number) => {
    const updateTODOs:any = todoList.map(prev =>
      prev.id === toggleId
        ? {...prev,toggleCondition : !prev.toggleCondition}
        : prev,
    );
    setTodoList(updateTODOs);
  };

  const renderToDos = (item: any) => {
    // console.log("todo's List", item);
    const isSelected = selectedItem.includes(item.id);

    return (
      // todoList.length !=0 &&(

      <View
        style={{
        //   flex: 1,
          flexDirection: 'row',
          alignItems:"center",
          //   backgroundColor: 'blue',
          padding: 10,
          marginTop: 15,
        }}>
        <TouchableOpacity
          onPress={() => selectMultipleTodo(item.id)}
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 1,
          }}>
          {isSelected && (
            <View
              style={{
                width: 18,
                height: 18,
                borderRadius: 9,
                backgroundColor: 'green',
              }}></View>
          )}
        </TouchableOpacity>
        <View style={{flex: 1, marginStart: 20}}>
          <Text>{item.title}</Text>
        </View>
        <TouchableOpacity onPress={() => onDeletePress(item)}>
          {Icons?.delete}
        </TouchableOpacity>
        <View>
          <Switch
            value={item?.toggleCondition}
            onValueChange={() => renderToggle(item.id)}
          />
        </View>
      </View>
      // )
    );
  };

  const addToDos = () => {
    if (todos.trim() === '') return;
    setTodoList([
      ...todoList,
      {id: Date.now(), title: todos, toggleCondition: false},
    ]);
    setTodos('');
  };

  const changeTheme = () =>{
    setIsDark(!isDark)
  }

  return (
    <View style={[{padding: 16, flex: 1, },{backgroundColor:isDark?"black":"orange"}]}>
      <Text>TodoList</Text>
      <View
        style={{
          flexDirection: 'row',
          borderColor: 'black',
          borderWidth: 1,
          alignItems: 'center',
          marginTop: 10,
        }}>
        <TextInput
          value={todos}
          onChangeText={setTodos}
          placeholder="Add ToDo's..."
          placeholderTextColor={'black'}
          style={{
            // marginTop:10,
            padding: 15,
            flex: 1,
          }}
        />
        <Button title="Add" onPress={() => addToDos()} />
      </View>

      <View style={{flex: 1}}>
        {/* <Text style={{fontSize:30,color:"black"}}>{arr[0]}</Text> */}
        <FlatList
          data={todoList}
          keyExtractor={item => item?.id?.toString()}
          renderItem={({item}) => renderToDos(item)}
          contentContainerStyle={{
            flex:1,
            
          }}
          ListEmptyComponent={()=>{
             return(
                <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"grey"}}>
                    <Text>No Todo's List</Text>
                    </View>
            )
          }
           
          }
        />
      </View>
      <Button
      onPress={()=>changeTheme()}
      title='theme'
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({});
