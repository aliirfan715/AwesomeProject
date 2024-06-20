// **
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
// In App.js in a new project

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// export function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;









  import React, { useEffect, useState } from 'react';
import { Text,View,TextInput, Image, useWindowDimensions,FlatList} from 'react-native';
import { ActivityIndicator } from 'react-native';
import ProductItem from '../components/Productitem';
import CategoryItem from '../components/CategoryItem';


function HomeScreen() {
  const [query, setQuery] = useState(""); 
  const [products,setProducts] = useState([])
  // const [fProducts,setFProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([])
  const [selectedCategories, setSelectedCategories] = useState('')
  const [loading,setLoading]= useState(false)
  const getProducts = async () => {
    try {
      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      setLoading(true)
      const response = await fetch("http://fakestoreapi.com/products", requestOptions);
      const result = await response.json();
  
      setProducts(result)
      setFilteredProducts(result);
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  };

  const getCategories =()=>{
  const requestOptions ={
    method: "GET",
    redirect:"follow"
 };
 setLoading(true)
 fetch("https://fakestoreapi.com/products/categories",
      requestOptions)
   .then((response) => response.json())
   .then((result) => {
    setCategories(result)
    setProducts(result)
    setLoading(false)
   })
   .catch((error) => console.error(error));
   
  }

  
  const getCategoryProducts =(category:string)=>{
    const requestOptions ={
      method: "GET",
      redirect:"follow"
   };
   //string Interpolation
    setLoading(true)
   fetch(`https://fakestoreapi.com/products/category/${category}`,
        requestOptions)
     .then((response) => response.json())
     .then((result) => {
      // setCategories(result)
      setProducts(result);
      setFilteredProducts(result);
      setLoading(false)
     })
     .catch((error) => console.error(error));
     
    }

  /*
  Display all categories with icons
  on click on category show selected category and its products
  also allow user to un select category to show all products
  */

  //when write text it should start filter
  //filter should start after atleast 2 characters
  //when use clear the text filed it should restore the last

  useEffect(()=>{
    getProducts()
    getCategories()
   

  },[])
  //destructuring


  const findItem = (text) => {
    const fProds = products.filter((p) => {
      if (text.length < 3) {
        return p.title.toLowerCase().includes(text.toLowerCase());
      } else {
        return (
          p.title.toLowerCase().includes(text.toLowerCase()) ||
          p.description.toLowerCase().includes(text.toLowerCase())
        );
      }
    });

    setFilteredProducts(fProds);
  }
  
  // const findItem = (query:string)=>{
  //   const fProds = fproducts.filter((p)=>{
  //     return p.title.includes(query)
  //   })

  //   setFProducts(fProds)
  // }


  // const obj = {name:'Ali Irfan',course:'Computer science'}
  // const {name,course} = obj

  // alert(name)
  
  // import Login from './src/screen/Login'
  // const App = () => {//arrow function
  //   const [text,setText] = useState('')
  //   const {width,height} = useWindowDimensions();
  return (
    <View style={{ flex: 1, alignItems: 'center',paddingHorizontal:10,}}>

<TextInput
        value={query}
        style={{
          width: '100%',
          backgroundColor: '#fff',
          height: 45,
          paddingHorizontal: 10,
          borderRadius: 7,
          borderWidth:1,
          borderColor:'#CCC',
          marginTop:10,
        }}
        placeholder='Enter your username'
        onChangeText={(text) => {
           setQuery(text)
           findItem(text)
          // if(text.length>2){
          //   findItem(text)
          // }else{
          //   setFProducts(products)
          // }
        }}
      />
      {/* {categories.map((item)=>{
      return <CategoryItem name={item}/>
    })} */}

    <View style={{height:5}}/>
    <FlatList
    style={{height:130}}
    data={categories}
    horizontal
    ItemSeparatorComponent={()=>{
      return <View style={{width:5}}/>
    }}
    showsHorizontalScrollIndicator={false}
    renderItem={({item})=>{
      return <CategoryItem
      onSelect={(name:string)=>{
        if(name == selectedCategories){
          setSelectedCategories('')
          getProducts()
        }else{
          getCategoryProducts(name)
          setSelectedCategories(name)
        }
        // alert(name)
        

      }} 
      isSelected={selectedCategories==item}
      name={item}/>
    }}
    />

      {/* { {categories.map((item)=> {
        return <Text>{item}</Text>
      })} }  */}

    <View style={{height: 5}}/>
    <View style ={{flex:50}}>
    {loading && <ActivityIndicator size={'large'} style={{marginTop:100}}/>}</View>
    { ! loading &&
      <FlatList
      numColumns={2}
      data={filteredProducts}
      renderItem={({item})=><ProductItem data={item}/>}
      keyExtractor={(item => item.id)}
     
      />
    }
    </View>
  );
}
export default HomeScreen;

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// export function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


