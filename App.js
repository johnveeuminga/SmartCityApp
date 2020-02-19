import React from 'react';
import { View, Text, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './src/screens/homescreen';
import FireScreen from './src/screens/firescreen'
import HealthScreen from './src/screens/healthscreen'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Root } from 'native-base';

import OfficeMain from './src/screens/OfficeMain'
import HealthOffice from './src/screens/HealthOffice'
import Forms from './src/screens/Forms'
import Camera from './src/screens/Camera'
import Success from './src/screens/Success'




const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator();


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
    <View style={{height: 200, margin:10, backgroundColor: 'white', borderBottomWidth: 1, backgroundColor: '#0F85FB'}}>
      <View style={{paddingTop: 20, paddingLeft:20}}>
        <Image source={require('./src/screens/images/profile.png')} style={{height: 100, width: 100}} />
      </View>
      <View style={{margin:10}}> 
        <Text style={{fontSize:20,fontWeight: 'bold', color: 'white'}}>Juana Dela Cruz</Text>
        <Text style={{fontSize:15, color: 'white'}}>thorgwapz4ever@gmail.com</Text>
      </View>
    </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator style={{ backgroundColor: 'red' }}>
      <Tab.Screen name="Explore" component={HomeScreen} options={{ tabBarIcon: config => <Icon name="home" size={23} color='white'>
      </Icon>}} />
      <Tab.Screen name="Map" component={FireScreen} options={{ tabBarIcon: config => <Icon name="map" size={23} color='white'>
      </Icon>}} />
      <Tab.Screen name="Profile" component={FireScreen} options={{ tabBarIcon: config => <Icon name="user" size={23} color='white'>
      </Icon>}} />
      <Tab.Screen name="Inbox" component={FireScreen} options={{ tabBarIcon: config => <Icon name="inbox" size={23} color='white'>
      </Icon>}} />
    </Tab.Navigator>
  );
}

const HealthOfficeStack = () => 
  <Stack.Navigator initialRouteName="HealthOffice" screenOptions={{}}>
    <Stack.Screen name="HealthOffice" component={HealthOffice} />
    <Stack.Screen name="Forms" component={Forms} />
    <Stack.Screen name="Camera" component={Camera} />
    <Stack.Screen name="Success" component={Success} />
    <Stack.Screen name="OfficeMain" component={OfficeMain} />



  </Stack.Navigator>

const HomeStack = () =>
  <Stack.Navigator initialRouteName="MyTabs" screenOptions={{headerShown: false}}>
    <Stack.Screen name="MyTabs" component={MyTabs} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="HealthOfficeStack" component={HealthOfficeStack} />
    <Stack.Screen name="FireBureau" component={FireScreen} />
  </Stack.Navigator>

export default class App extends React.Component{

  render(){
    return(
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => CustomDrawerContent(props)}>
          <Drawer.Screen name="Home" children={HomeStack} options={{
            drawerIcon: config => <Icon size={23} name="home" color="#407EC2"></Icon>
          }}/>
          <Drawer.Screen name="Bureau of Fire Protection" component={OfficeMain } options={{
            drawerIcon: config => <Icon size={23} name="chevron-right" color="#407EC2"></Icon>
          }} />
          <Drawer.Screen name="Health Services Office" component={HealthOfficeStack} options={{
            drawerIcon: config => <Icon size={23} name="chevron-right" color="#407EC2"></Icon>
          }}/>
          <Drawer.Screen name=" City Treasurer's Office" component={FireScreen} options={{
            drawerIcon: config => <Icon size={23} name="chevron-right" color="#407EC2"></Icon>
          }}/>          
          <Drawer.Screen name=" City Building and Architecture Office" component={FireScreen} options={{
            drawerIcon: config => <Icon size={23} name="chevron-right" color="#407EC2"></Icon>
          }}/>      
          <Drawer.Screen name=" City Assessor's Office" component={FireScreen} options={{
            drawerIcon: config => <Icon size={23} name="chevron-right" color="#407EC2"></Icon>
          }}/>                    
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}
