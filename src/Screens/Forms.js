
import React from 'react'
import { Text, Container, View, Item, Form, Input, Label, Button } from 'native-base'
import { StyleSheet, Image, Alert } from 'react-native'
import DatePicker from 'react-native-datepicker'



class Forms extends React.Component{

    navigate(screenName){
        this.props.navigation.push(screenName)
    }

    constructor(props){
        super(props)
        this.state = {date:"01-01-1800"}
      }
    //   componentDidMount() {
    //     var that = this;
    //     var date = new Date().getDate(); //Current Date
    //     var month = new Date().getMonth() + 1; //Current Month
    //     var year = new Date().getFullYear(); //Current Year
    //     that.setState({
    //       //Setting the value of the date time
    //       date:
    //         date + '/' + month + '/' + year,
    //     });
    //   }

 

    render(){
        var date = new Date().getDate(); //Current Date

        return(
            <Container>
                <View>
                <View style={{ position: 'relative', zIndex: 10}}>
                    <View>
                        <Text style= {style.s1} >APPLICATION FORM HEALTH CERTIFICATE
                        </Text>
                    </View>

                    <Form>
                        <Item style = {style.s4}>
                            <Label>Date: </Label>
                        </Item>
                        
                        <DatePicker
                            style={{width: 200}}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="MM-DD-YYYY"
                            minDate={"01-01-1800"}
                            maxDate="01-01-2050"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                           
                            }}
                            onDateChange={(date) => {this.setState({date: date})}}
                        />



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

                </View>

            </Container>
        )
    }
}

const style = StyleSheet.create({
    s1: {
        textAlign: 'center',
        marginTop: 15,
        fontSize: 18,
        paddingTop: 25,
        fontWeight: 'bold'
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
        marginVertical:150,
        marginHorizontal: 65,
        opacity: 0.1,
        
    }

    
    
})
    
export default Forms;