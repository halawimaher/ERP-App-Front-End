
import React, { useEffect, useState } from 'react'
import {  NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import * as SecureStore from "expo-secure-store";
import LogIn from './pages/LogIn'
import AllEmployees from './pages/AllEmployees'
import EmployeeProfile from './pages/EmployeeProfile';
import KpiPage from './pages/KpiPage'
import Reports from './pages/Reports'
import { Ionicons } from '@expo/vector-icons';
import Dashboard from './pages/Dashboard'


const LoginStack = createStackNavigator();

// const HomeStack = createStackNavigator();
// const ProfileStack = createStackNavigator();
// const KpiStack = createStackNavigator();
// const ReportsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const LoginStackScreen = ({navigation}) => (
  <LoginStack.Navigator initialRouteName="Login" screenOptions={{
            headerStyle:{
            backgroundColor: '#009387',
          },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}>
            <LoginStack.Screen name="Login" component={LogIn} options={{
              title: 'Login',
              headerTitle: "Login"
            }} />
        </LoginStack.Navigator>
  )

  const RootStack = createStackNavigator();
const RootStackScreen = () => (
<RootStack.Navigator initialRouteName="Dashboard" screenOptions={{
          headerStyle:{
          backgroundColor: '#009387',
        },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}>
          <RootStack.Screen name="Dashboard" component={Dashboard} options={{
            title: 'Dashboard',
            // headerLeft: ({navigation}) => (
            //   <Ionicons name="menu" size={25} backgroundColor="#009387" onPress ={() => navigation.openDrawer()} ></Ionicons>
              
            // )
          }} />
          <RootStack.Screen name="All Employees" component={AllEmployees} options={{
            title: 'All Employees',
          }} />
            <RootStack.Screen name="Profile" component={EmployeeProfile} options={{
            title: 'Profile',
          }} />
                    <RootStack.Screen name="KPI" component={KpiPage} options={{
            title: 'KPI',
          }} />
                    <RootStack.Screen name="Reports" component={Reports} options={{
            title: 'Reports',
          }} />
          
      </RootStack.Navigator>
)

function App() {

  const [token, setToken] = useState("dshjdsada");

  SecureStore.setItemAsync("token", "token");

  console.log(SecureStore.getItemAsync("token"));

  return (

    <NavigationContainer independent={true}>
      {token ? <RootStackScreen /> : <LoginStackScreen />}
    </NavigationContainer>
  );
}

export default App;