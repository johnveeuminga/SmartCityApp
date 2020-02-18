import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default class Headerr extends React.Component{
  render(){
    return(
      <Container>
        <Header>
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

