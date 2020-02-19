import React from 'react'
import { View, Text, Button, Container } from 'native-base'
import { Image, StyleSheet } from 'react-native'

export default class Success extends React.Component{
    navigate(screenName){
        this.props.navigation.push(screenName)
    }
    render(){
        return(
            <Container>
                <View style= {{ justifyContent:'center', alignItems: 'center', paddingTop: 25 }}>
                    <Image source= {require('../Images/success.png')} style = {style.img}>
                
                    </Image>
                </View>

                <View style= {{ justifyContent:'center', alignItems: 'center', paddingTop: 25 }}>
                    <Button rounded block source= {require('../Images/success.png')} style = {style.btn}
                    onPress = {() => this.navigate('Forms')} >
                        <Text>
                            Go Back!
                        </Text>

                    </Button>
                </View>
            </Container>
                
               
        )
    }
}
const style = StyleSheet.create({
    img:{
        width:200,
        height: 200,
        paddingTop: 50

    },
    btn:{
        backgroundColor: 'green',
        fontWeight: 'bold',
        fontSize: 12,
        margin: 50,
    }
})