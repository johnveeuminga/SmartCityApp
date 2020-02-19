
import React from 'react'
import { Container, View,Text, Button } from 'native-base'
import {StyleSheet, Image} from 'react-native'

class Camera extends React.Component{
    navigate(screenName){
        this.props.navigation.push(screenName)
    }
    render(){
       
        return(
            <Container>
                <View>
                    
                    <View  style= {{ justifyContent:'center', alignItems: 'center', paddingTop: 25 }}>
                        <Image  source= {require('../Images/1x1.png')} style = {style.img}>

                        </Image>
                    </View>
                    <View>
                        <Button block rounded style = {style.btn}>
                            <Text>
                             Access your CAMERA for 1x1 I.D
                            </Text>
                        </Button>
                    </View>

                    <View>
                        <Button block rounded style = {style.btn} onPress= {() => this.navigate('Success')}>
                            <Text>
                                Submit
                            </Text>

                        </Button>
                    </View>
                    
                </View>
            </Container>
        )
    }
}

const style = StyleSheet.create({
    btn:{
        backgroundColor: 'green',
        fontWeight: 'bold',
        fontSize: 12,
        margin: 50,
    },
    img:{
        width: 165,
        height: 165,
        paddingTop: 25
        
    }

})
export default Camera