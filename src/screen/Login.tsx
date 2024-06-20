// **
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
// In App.js in a new project

// import  as React from 'react';
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
import React, { useState } from 'react';
import { Alert, Text, TextInput, View, useWindowDimensions } from 'react-native';
import { Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'

function Login() {
  const navigation = useNavigation()
  let [username, setUsername] = useState(""); 
  let [password, setPassword] = useState("");
  let count = 0;
  const handleSignIn = () => {
    //  if (username === 'Ali.irfan' && password === 'abc123') {
      navigation.navigate('TodoList');
//      } else {
//        Alert.alert("Invalid credentials", "Please enter a valid username and password.");
//      }
//    };
//    const handleSignUp = () => {
//      navigation.navigate("Signup");
  };
   
//   import Login from './src/screen/Login'
//   const App = () => {//arrow function
//     const [text,setText] = useState('')
//     const {width,height} = useWindowDimensions();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        value={username}
        style={{
          width: '90%',
          backgroundColor: '#ecf0f1',
          height: 45,
          paddingHorizontal: 10,
          borderRadius: 10,
        }}
        placeholder='Enter your username'
        onChangeText={(e) => {
          setUsername(e)
        }}
      />
      <TextInput
        value={password}
        style={{
          width: '90%',
          backgroundColor: '#ecf0f1',
          height: 45,
          paddingHorizontal: 10,
          borderRadius: 10,
        }}
        placeholder='Enter your password'
        secureTextEntry={true}
        onChangeText={(e) => {
          setPassword(e)
        }}
      />
    
<View style={{height: 10}}/>
<Text>Count :{username.length}</Text>
<View style={{height: 10}}/>


<Button onPress={handleSignIn} mode='contained'>Sign in with gmail</Button>
<View style={{height: 10}}/>
{/* <Button onPress={handleSignUp} mode='outlined'>Create Account</Button> */}
    </View>
  );
}
export default Login;


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


