
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Headerr from '../components/header'

export default class fireScreen extends React.Component{
  render(){
    return(
      <Container>
        <Header style={{backgroundColor: '#0F85FB'}}>
        <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("Home")}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
          <Title></Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
    </Container>
    )
  }
}