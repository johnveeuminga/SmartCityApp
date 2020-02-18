import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import { Container, Header, Body, Right, Button, Icon, Title, List, Left, Thumbnail, ListItem } from 'native-base';


export default class HomeScreen extends React.Component{
  render(){
    return(
          <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={this.props.uri}/>
            </Left>
            <Body>
              <Text style={{fontWeight:'bold'}}>{this.props.announcement}</Text>
              <Text note numberOfLines={1}>
              {this.props.description}
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text style={{color:'green'}}>View</Text>
              </Button>
            </Right>
          </ListItem>
        </List>
    )
  }
}

