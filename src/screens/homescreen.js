import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image, Dimensions } from 'react-native'
import { Container, Header, Body, Right, Button, Icon, Title, List, Left, Thumbnail, ListItem } from 'native-base';
import FireScreen from './firescreen'
import News from '../components/news'
import Announcements from '../components/announcements'
import Swiper from 'react-native-swiper'

const { width } = Dimensions.get('window')

export default class HomeScreen extends React.Component{
  render(){
    return(
      <Container>
         <View>
        <Header style={{backgroundColor: '#0F85FB'}}>
          <Body>
          <Title>Home</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
      </View>
      <View>
        <ScrollView scrollEventThrottle={16}> 
          <View style={{flex:1, paddingTop: 20, }}>
          <Text style={{fontSize:15, fontWeight:'700', paddingHorizontal:20, color:'#0F85FB'}}>Local News</Text>
            <View style={{height: 120, marginTop: 10}}>
              <ScrollView horizontal={true}>
                <News imageUri={require('./images/news1.jpg')} heading="Cordillera PUIs now 24"/>
                <News imageUri={require('./images/news4.jpg')} heading="Arrival honors for Guillermo Eleazar"/>
                <News imageUri={require('./images/news2.jpg')} heading="Student wears face mask during PE"/>
                <News imageUri={require('./images/news3.jpg')} heading="Jeepney modernization protest"/>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{paddingTop: 20, height: 225}}>
        <Text style={{fontSize:15, fontWeight:'700', paddingHorizontal:20, color:'#0F85FB'}} >Public Announcements</Text>
        <ScrollView>
          <Announcements uri={require('./images/anc1.jpg')} announcement="Clean Up Drive" description="The city government clean chova chova"/>
          <Announcements uri={require('./images/anc2.jpeg')} announcement="Anti Obstruction Seminar" description="Obstruction pa more"/>
          <Announcements uri={require('./images/anc3.jpg')} announcement="Eco Toilet" description="Toilet toilet toilet, echo."/>
          <Announcements uri={require('./images/anc4.jpg')} announcement="For a Better Baguio" description="Smart City na this"/>
          <Announcements uri={require('./images/anc5.jpeg')} announcement="Rabies Free Baguio" description="Pag kinagat ng aso, kagatin mo din"/>
          <Announcements uri={require('./images/anc6.jpg')} announcement="Waste Management at Home" description="Basura mo kain mo"/>
        </ScrollView>
      </View>
      <View style={{paddingTop: 20, height:120, borderWidth:0.5, borderColor:'#ddddd'}}>
        <Text style={{fontSize:15, fontWeight:'700', paddingHorizontal:20, color:'#0F85FB'}}>Offices</Text>
        <Swiper style={styles.wrapper} 
          onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
          dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          paginationStyle={{
            bottom: -23, left: null, right: 10
          }} loop>
          <View style={styles.slide} title={<Text numberOfLines={1} style={{fontWeight:'bold'}}>Bureau of Fire Protection</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('./images/bfp.jpg')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1} style={{fontWeight:'bold'}}>Baguio City Health Services Office</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('./images/chso.jpg')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1} style={{fontWeight:'bold'}}>Treasury Office</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('./images/cto.jpg')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1} style={{fontWeight:'bold'}}>City Buildings and Architecture Office</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('./images/cbao.jpg')} />
          </View>
        </Swiper>
      </View>
    </Container>
    )
  }
}

const styles = {
  container: {
    flex: 1
  },

  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingTop: 10
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
}

