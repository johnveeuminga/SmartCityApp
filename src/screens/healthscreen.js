
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Headerr from '../components/header'

export default class healthScreen extends React.Component{
  render(){
    return(
      <Container>
        <Header style={{backgroundColor: '#387805'}}>
          <Body>
          <Title>Smart City</Title>
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

