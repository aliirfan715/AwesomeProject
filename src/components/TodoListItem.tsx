import React, { useState } from 'react';
import { Image, Pressable, Text, TouchableOpacity, View, ViewStyle,  } from 'react-native';
type TodoListItem ={
  item: Todo,
  onDelete:(item:Todo) => void
  onDone:(item:Todo) => void
}
function TodoListItem ({ item, onDelete,onDone }:TodoListItem) {
  
   
  return <><TouchableOpacity onPress={() => {
  } }>
    <View style={viewStyle}>
      <View>
        <Text> {item.text}</Text>
      </View>
    </View>
    <View style={{ flexDirection: 'row', marginTop: 10 }}>
      {!item.isDone && <TouchableOpacity onPress={() => {
        onDone(item);
      } }>
        <Text style={{ color: 'green' }}>
          Mark done
        </Text>
      </TouchableOpacity>}
      <TouchableOpacity onPress={() => {
        onDelete(item);
      } }>
        <Text style={{ color: 'red', marginLeft: 10 }}>
          Delete
        </Text>
      </TouchableOpacity>
    </View>

  </TouchableOpacity><View>
      {item.isDone && <Text style={{ color:'green'}}>Completed</Text>}
    </View></>
    
};
const viewStyle:ViewStyle ={
  backgroundColor:'#fff',
   paddingVertical:10,
   paddingHorizontal:15,
   borderRadius:7,
   justifyContent:'center',
   marginBottom:5,
   
}
const viewStyleSelected:ViewStyle ={
  backgroundColor:'#fff',
   paddingVertical:10,
   paddingHorizontal:15,
   borderRadius:7,
   justifyContent:'center',
   alignItems:'center',
   width:110,
   height:100,
   borderWidth:1,
   borderColor:'red'

}

export default TodoListItem;
