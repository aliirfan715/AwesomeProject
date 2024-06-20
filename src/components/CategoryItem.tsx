import React, { useState } from 'react';
import { Image, Pressable, Text, TouchableOpacity, View, ViewStyle,  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getSentenceCase } from '../utils/utils';


const CategoryItem = ({ name,onSelect,isSelected }) => {
// const catName = (name+"").charAt(0).toUpperCase()+name.substring(1,name.length)
  // const[selected, setSelected] = useState(false)
  const getIcon =(name:string)=>{
     if(name=='electronics') return require('../assets/images/electronics.png')
     if(name=='jewelery') return require('../assets/images/jewelery.png')
     if(name=="men's clothing") return require('../assets/images/male-clothes.png')
     if(name=="women's clothing") return require('../assets/images/fashion.png')
  }

  return (
       <Pressable onPress={()=>{
        onSelect(name)
        console.log(name)
        // setSelected(!selected)
       }}>
      <View style={isSelected?viewStyleSelected:viewStyle}>
        <Image
        style={{height:40,width:40}}
         source={getIcon(name)}></Image>
        <Text style={{textAlign:'center'}}>{getSentenceCase(name)}</Text>
      </View>
    </Pressable>
  );
};
const viewStyle ={
  backgroundColor:'#fff',
   paddingVertical:10,
   paddingHorizontal:15,
   borderRadius:7,
   justifyContent:'center',
   alignItems:'center',
   width:110,
   height:100,
   
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

export default CategoryItem;
