import { Text,View,TextInput, Image, useWindowDimensions,FlatList} from 'react-native';
import { ActivityIndicator } from 'react-native';
import ProductItem from '../components/Productitem';
import CategoryItem from '../components/CategoryItem';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import TodoListItem from '../components/TodoListItem';

function MyTodoList(){

  /**
   * TODOD:{
   * text
   * iscompleted
   * }
   */
  // //Add to todos to a list
  // //mark as complete
  // update MyTodoList
  // delete todolist
const[text,setText] = useState("")
const[todos,setTodos] = useState<Todo[]>([])

useEffect(()=>{
  getAllTodos().then((items)=>{
     setTodos()
  }).catch((e)=>{
    alert(e)
    
  })
})

const saveTodos = (todos:Todo[])=>{
 const json =JSON.stringify(todos)
AsyncStorage.setItem('@myTodos', json);
}
const getAllTodos = async () =>{
  const json = await AsyncStorage.getItem('my-key');
  const myList = JSON.parse(json)
  return myList

}
return(
  <View style ={{flex:1, paddingHorizontal:10,}}>

<TextInput
        value={text}
        style={{
          backgroundColor: '#fff',
          height: 45,
          paddingHorizontal: 10,
          borderRadius: 10,
          borderColor:'#ecf0f1',
          borderWidth:1
        }}
        placeholder='Enter item to remember'
        onSubmitEditing={(e)=>{
          // alert(e.nativeEvent.text)

          todos.push({
            text: e.nativeEvent.text,
            isDone: false
          } )
          setTodos(todos)
          saveTodos(todos)
          setText('')
        }}
        onChangeText={(e) => {
          setText(e)
        }}
      />

<FlatList
data={todos}
renderItem={({item})=>{
  return <TodoListItem
  onDone={(data)=>{
    const itemIndex = todos.findIndex(item=> item.text==data.text)
    const item=todos[itemIndex]
    item.isDone=true

    todos[itemIndex] = item
    setTodos([...todos])



  }}
  onDelete={(data)=>{
   const filterData =todos.filter((it)=>{
    return it!=data
   })
   setTodos(filterData)
  }}
  item={item}

  />
}}



/>
</View>
)

}
export default MyTodoList
  

  




 