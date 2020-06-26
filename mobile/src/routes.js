import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Login from './pages/Login/index'
import Notes from './pages/Notes/index'
import CreateNote from './pages/CreateNote/index'
import Profile from './pages/Profile/index'
import Register from './pages/Register/index'
import { FontAwesome5 } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


function NoteTabs() {
    return (
      <Tab.Navigator       
      initialRouteName="Notas"
      activeColor="#2F2454"
      labeled = {false}
      style={{ backgroundColor: '#FFFFF' }}
      barStyle={{ backgroundColor: '#7159C1' }}>
      
        <Tab.Screen 
        name="Criar Nota" 
        component={CreateNote} 
        options={{                      
            tabBarIcon: ({ color, size  }) => (
              <FontAwesome5 name="paperclip" size={24} color={color}/>
            ),
        }}
        />

        <Tab.Screen 
        name="Notas" 
        component={Notes} 
        options={{
            tabBarLabel: 'NOTAS',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="clipboard-list" size={24} color={color} />
            ),
        }}/>

        <Tab.Screen 
        name="Perfil" 
        component={Profile} 
        options={{
            tabBarLabel: 'PERFIL',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="user-edit" size={24} color={color}/>
            ),
        }}/>
      </Tab.Navigator>
    );
  }
  
export default function Route(){
    return (
       <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="NotesTabs" component={NoteTabs} />
            </Stack.Navigator>
       </NavigationContainer>
    )
}