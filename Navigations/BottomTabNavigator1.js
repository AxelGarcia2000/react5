import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; 
import SettingsScreen from '../Screens/SettingsScreen';
import AboutScreen from '../Screens/AboutScreen';
import Inicio from '../Screens/Inicio';
import Contacto from '../Screens/Contacto';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../Navigations/StackNavigation1';
//import Contacto2Screen from '../Navigations/TopTapNavigator1'; 

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Inicio"
            tabBarOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606",
                showLabel:true,
                labelStyle:{
                    fontSize:12
                },
                style:{
                    paddingBottom:5,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
        <Tab.Screen
                name="a "
                component={Inicio}
                options={{
                    headerShown:false,
                    tabBarLabel:"Inicio",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-home-outline"} size={20} color={color}/>
                    )
                }}
            />
           
         
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    headerShown:false,
                    tabBarLabel:"Programar",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-logo-github"} size={20} color={color}/>
                    )
                }}
            />
               <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{                    
                    headerShown:false,
                    tabBarLabel:"GitHub",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-logo-javascript"} size={20} color={color}/>
                    )
                }}
            
            />

               <Tab.Screen
                name="Contacto"
                component={Contacto}
                options={{            
                    headerShown:false,
                    tabBarLabel:"Contacto",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-man"} size={20} color={color}/>
                    )
                }}
            />

            <Tab.Screen
                name=" "
                component={AboutScreen}
                options={{
                    headerShown:false,
                    tabBarLabel: "Acerca de" ,
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-help-circle"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}