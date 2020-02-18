import React from 'react'
import { View, Image, StyleSheet, ImageBackground } from 'react-native'
import { Container, Text, Button } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler'


class HealthOffice extends React.Component{
    render(){
        return(
            <Container>
                <ScrollView>
                    <View>
                        <View style= {{ justifyContent:'center', alignItems: 'center' }}>
                            <Image source= {require('../Images/doh.png')} style={style.img}> 
                            </Image>
                        </View>
                        <View>
                            <View style= {{ justifyContent:'center', alignItems: 'center' }}>
                                <Text style = {style.txt}>
                                    Frontline Services
                                </Text>
                                <Button rounded style = {style.btn} >
                                    <Text style = {style.txt1}>APPLY Medical Certificate</Text>
                                </Button>
                                <Button rounded style = {style.btn}>
                                    <Text style = {style.txt1}>RENEW Medical Certificate</Text>
                                </Button>
                            </View>
                        </View>
                        <View>
                            <Text style = {style.txt}>
                                HEALTH SERVICES OFFICE
                            </Text>
                            <Text style= {{  padding: 15 }}>
                              Universal Health Care or Kalusugan Pangkalahatan has been adopted as the
                              Department of Health implementation framework for health sector reforms by 
                              seeking to improve, streamline and scale up reform strategies in Health Sector
                              Reform Agenda (HSRA). Kalusugan Pangkalahatan aims to attain the goals of better 
                              health outcomes, more responsive health systems and equitable health care financing 
                              especially for the poor by pursuing the three (3) strategic thrust of financial risk 
                              protection, improved access to quality health care facilities and attainment of
                             health-related Sustainable Development Goals (SDGs) non-communicable diseases.
                            </Text>
                        </View>

                        <View>
                            <Text style = {style.txt}>
                                Contact Us
                            </Text>
                        <View style= {{  padding: 15 }}>
                            <Text>
                                OFFICE OF THE CITY HEALTH OFFICER
                            </Text>
                            <Text>
                                 DR. ROWENA P. GALPO   
                            </Text>
                            <Text>
                                RM. 203 Health Services Office
                            </Text>
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
        height: 200,
        marginTop: 25
    },
     txt:{
        paddingTop: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
     },
     txt1:{
        
        textAlign: 'center'
     },
     btn:{
        backgroundColor: 'green',
        fontWeight: 'bold',
        fontSize: 12,
        margin: 10,
    },
    bg:{
        position:'absolute',
        marginVertical: 225,
        marginHorizontal: 65,
        opacity: 0.1,
        
    }
    
})
export default HealthOffice;