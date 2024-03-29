import { initializeApp } from "firebase/app";

import Home from './src/components/home';
import Login from './src/components/login';
import Cadastro from './src/components/Cadastro';
import MeusCartoes from './src/components/MeusCartoes';
import AdicionarCartao from './src/components/AdicionarCartao';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers/rootReducer";


const Stack = createStackNavigator()

const store = configureStore({
  reducer: rootReducer,
})



const firebaseConfig = {
  apiKey: "AIzaSyDaZfGEtZNV9Z8O7cU8aejv-GJ4HMaN5OQ",
  authDomain: "vamuestudantes.firebaseapp.com",
  projectId: "vamuestudantes",
  storageBucket: "vamuestudantes.appspot.com",
  messagingSenderId: "262702748509",
  appId: "1:262702748509:web:969136e0de59e6c3264eb4",
  measurementId: "G-M55CEL8GPN"
};

const app = initializeApp(firebaseConfig);

export default function App() {
  return (

    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#2AAA8A',
                },
                headerTintColor: '#fff',
              }}
      >
      
        <Stack.Screen name="Home" 
        component={Home}
        options={{ headerShown: false }} 
        />
        
        <Stack.Screen name="Login" 
        component={Login} />

        <Stack.Screen name="Cadastro" 
        component={Cadastro} />

        <Stack.Screen name="MeusCartoes" 
        component={MeusCartoes} 
        options={{ headerShown: false }}/>

        <Stack.Screen name="AdcionarCartao" 
        component={AdicionarCartao} />

      
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}



