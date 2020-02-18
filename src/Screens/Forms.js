import React from 'react'
import { Text, Container, View, Item, Form, Input, Label, Button } from 'native-base'
import { StyleSheet, Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'



class Forms extends React.Component{
    navigate(screenName){
        this.props.navigation.push(screenName)
    }
    render(){
        
        return(
            <Container>
                <View>

                    <View>
                        <Text style = {style.s1}>
                            Republic of the Philippines
                        </Text>
                        <Text style = {style.s2}> 
                            City Government of Baguio
                        </Text>
                        <Text style = {style.s2}>
                            HEALTH SERVICE OFFICE
                        </Text>
                    </View>

                    <View>
                        <Text style= {style.s1} >APPLICATION FORM HEALTH CERTIFICATE
                        </Text>
                    </View>

                       

                    <Form>
                        <Item style = {style.s4}>
                            <Label>Date: </Label>
                        <Input />
                        </Item>
                        <Item>
                            <Label>Name: </Label>
                        <Input />
                        </Item>

                        <Item style = {style.s4}>
                            <Label>Age:</Label> 
                            <Input />
                            <Label>Sex:</Label>
                            <Input />
                            <Label>Civil Status:</Label>
                            <Input />

                        </Item>
                        <Item style = {style.s4}>
                            <Label>
                                PLACE OF WORK or NAME of ESTABLISHMENT
                            </Label>
                              
                        </Item>
                        <Item>
                            <Input/>  
                        </Item>

                        <Item style = {style.s4}>
                            <Label> OCCUPATION:
                            </Label>
                            <Input/>  
                        </Item>

                    </Form>

                    <View style= {{ justifyContent:'center', alignItems: 'center' }}>
                    <Button rounded style= {style.btn} onPress= {() => this.navigate('Camera')}>
                        <Text>Submit</Text>
                    </Button>

                    </View>

                    

                </View>

                <Image source= {require('../Images/baguiologo.png')} style= {style.bg}>

                </Image>
            </Container>
        )
    }
}

const style = StyleSheet.create({
    s1: {
        textAlign: 'center',
        marginTop: 15,
        fontSize: 12,
        paddingTop: 25
    },
    s2:{
        textAlign: 'center',
        fontSize: 12,
        
    },
    s3:{

    width: '50%',
    paddingTop: 100
    },
    img:{
        width: 15,
        height: 185,
        width: '50%',
    },
    btn:{
        backgroundColor: 'green',
        fontWeight: 'bold',
        fontSize: 12,
        margin: 10,
        textAlign:'center'
       
    },
    s4:{
        paddingVertical: 20
    },
    bg:{
        position:'absolute',
        marginVertical: 225,
        marginHorizontal: 65,
        opacity: 0.1,
        
    }

    
    
})
    
export default Forms;