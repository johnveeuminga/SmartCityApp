import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import { Container, Header, Body, Right, Button, Icon, Title } from 'native-base';


export default class News extends React.Component{
  render(){
    return(
        <View style={{height:120, width: 120, marginLeft:20, borderWidth: 0.5, borderColor: '#ddddd'}}>
            <View style={{flex:2}}>
                <Image source={this.props.imageUri} style={{flex:1, width:null,height:null,resizeMode:'cover'}}>
                </Image>
            </View>
            <View style={{flex:1, paddingLeft: 10, paddingTop: 10}}>
                <Text style={{fontWeight:'bold'}}>
                {this.props.heading}
                </Text>
            </View>
        </View>

    )
    }
}

