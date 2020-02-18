import React from 'react'
import {Container, Button} from 'native-base'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'




class OfficeMain extends React.Component{
    render(){
        
        return(
            
            <Container>
               <ScrollView >
                <View  style= {{ justifyContent:'center', alignItems: 'center' }}>

                    <View style = {{marginTop: 25}}>
                        <Image source= {require('../Images/bfplogo.png')} style = {style.img}>
                        </Image>
                    </View>

                    <View style = {style.services} style = {{paddingTop: 25}} >
                        <Text style = {style.services} >Frontline Services</Text>
                    </View>

                    <View >

                        <Button rounded style = {style.btn}>
                            <Text>
                                Fire Safety Evaluation Clearance (FSEC)
                            </Text>
                        </Button>

                        <Button rounded style = {style.btn}>
                            <Text>
                                Fire Safety Inspection Certificate (FSIC)
                            </Text>
                        </Button>
                        
                    </View>
                    

                    <View style= {{ justifyContent:'center', alignItems: 'center' }}>
                        <Text style = {style.title}>
                            City Fire Station
                        </Text>
                        <Text style= {style.txtstyle}>
                            Ensures the prevention and suppression of destructive fires within the City, 
                            investigation of its cause, immediate response to any natural and/or
                            man-made disasters and the strict implementation of the Fire Code of the 
                            Philippines 2008 (RA 9415).
                        </Text>
                    </View>

                    <View style= {{ justifyContent:'center', alignItems: 'center' }}>
                        <Text  style = {style.title}>Contact Us!</Text>
                        <View style={style.txtstyle}>
                            <Text style= {{fontWeight: 'bold'}}>FSUPT JOE FERNAND L BANGYOD,MPA
                                City Fire Marshal
                            </Text>
                            <Text>
                                0919-994-4147
                            </Text>

                            <View >
                                <Text style= {{fontWeight: 'bold'}}>Irisan-Pucay Fire Sub Station
                                </Text>
                                <Text>
                                    Irisan, Baguio City
                                    Tel. No.: (074) 442-4357
                                </Text>
                            </View>

                            <View >
                                    <Text style= {{fontWeight: 'bold'}}>
                                        BAGUIO CITY FIRE STATION
                                    </Text>
                                    <Text>
                                        No. 1, Corner Abanao and Kayang Sts., Baguio City
                                        Hotline No.: 160
                                        Telephone Numbers: (074) 442-2222
                                        (074) 443-7089
                                        Facebook Page: Baguio City Fire Station (facebook.com/bcfs123)
                                        Email: bcfs_cfm@yahoo.com
                                    </Text>
                            </View>
                    
                        </View>
                    </View>
                   
                </View>
                </ScrollView>
                <Image source= {require('../Images/baguiologo.png')} style= {style.bg}>

                </Image>

            </Container>
           
        )
    }
}

const style = StyleSheet.create({
    img:{
        width: 200,
        height: 200.
    },
    services:{
        fontSize: 20,
        fontWeight: 'bold',
        
    },
    title:{
        paddingTop: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    size:{
        fontSize: 9,
        fontWeight: 'bold'
    },
    btn:{
        backgroundColor: 'red',
        fontWeight: 'bold',
        fontSize: 12,
        margin: 10,
    },
    bg:{
        position:'absolute',
        marginVertical: 225,
        marginHorizontal: 65,
        opacity: 0.1,
        
    },
    txtstyle:{
        paddingTop:25,
        paddingHorizontal: 15
    }






})
export default OfficeMain;