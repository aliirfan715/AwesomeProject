// import React, { useState } from 'react';
// import { Text,View,TextInput, Image, useWindowDimensions,} from 'react-native';
// function ProductItem({data}) {
//     const {width} = useWindowDimensions()
//     const CARDWIDTH = (width/2)-30
//     return <View style={{borderRadius:15,marginTop:10,overflow:'hidden',paddingBottom:15,backgroundColor:'#fff',marginRight:10}}>
// <View style={{height: 10}}/>
//   <Image
//     source={{ uri: data.image }}
//     style={{ width:(width/2)-30, height: CARDWIDTH}}
//   />
//   <View style={{marginTop:10, marginHorizontal:10}}/>
//   <Text 
//   numberOfLines={2}
//   style={{fontWeight:'bold',fontSize:16,maxWidth:CARDWIDTH}}>
//     {data.title}
//   </Text>
//   <View style={{flexDirection:'row'}}>
//   <Text>Price:</Text> 
//   <Text style={{color:'green'}}>${data.price}</Text>
//   </View>
// </View>
// }
// export default ProductItem;


import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity,useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductItem = ({ data }) => {
  const { width } = useWindowDimensions();
  const CARDWIDTH = (width / 2) - 30;
  const navigation:any = useNavigation();

  const handlePress = () => {
    navigation.navigate('ProductDetails', { item: data });
 };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Image source={{ uri: data.image }} style={{ width: CARDWIDTH, height: CARDWIDTH }} />
        <View style={{ marginTop: 10, marginHorizontal: 10 }} />
        <Text numberOfLines={2} style={{ fontWeight: 'bold', fontSize: 16, maxWidth: CARDWIDTH }}>
          {data.title}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text>Price:</Text>
          <Text style={{ color: 'green' }}>${data.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginTop: 10,
    overflow: 'hidden',
    paddingBottom: 15,
    backgroundColor: '#fff',
    marginRight: 10,
  },
});

export default ProductItem;
