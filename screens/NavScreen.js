import React, {useState, useEffect} from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { StyleSheet, Button, Text, View, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, ScrollView, Image, SafeAreaView, FlatList, Dimensions } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const apiURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=45.2582,17.3840&radius=1000&type=restaurant&key=AIzaSyBNcrQtcayXhIgQN6ZUVyapGTAV0ZwuL-Y"
const apiURL2 = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=45.2582,17.3840&radius=1000&type=bar&key=AIzaSyBNcrQtcayXhIgQN6ZUVyapGTAV0ZwuL-Y"

export default class HomeScreen extends React.Component {
  constructor(){
    super();
    this.state = { 
      hasLocationPermission: false,
      latitude: 0,
      longitude: 0,   
      restaurantList: [],
      restaurantList2: []
    }
  }
  
  calculateDeltaValues = (viewport) => {
    const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;

    const northeastLat = parseFloat(viewport.northeast.lat);
    const southwestLat = parseFloat(viewport.southwest.lat);
    const latDelta = northeastLat - southwestLat;
    const lngDelta = latDelta * ASPECT_RATIO;
    return {latDelta, lngDelta};
  }

  componentDidMount(){
    fetch(apiURL)
      .then((response) => response.json())
      .then(result => {
        if(result){
          var list = [];
          for(let i = 0; i < result.results.length; i++){
            list.push(result.results[i]);
          }
        } 
        this.setState({
          restaurantList: list
        });
      })
      .catch(e => console.log(e));

      fetch(apiURL2)
      .then((response) => response.json())
      .then(result => {
        if(result){
          var list = [];
          for(let i = 0; i < result.results.length; i++){
            list.push(result.results[i]);
          }
        } 
        this.setState({
          restaurantList2: list
        });
      })
      .catch(e => console.log(e));
  }
//onPress = {() => this.props.navigation.navigate("New York", {id: item.place_id})}
    renderItem = ({item}) => {
        let {latDelta, lngDelta} = this.calculateDeltaValues(item.geometry.viewport);
        return(
          <SafeAreaView style={styles.container}>   
          <ScrollView>
              <TouchableOpacity onPress = {() => this.props.navigation.navigate(" ", {id: item.place_id})}>
                {this.renderPhotoRef(item)}
                <Text style = {styles.ime}> {item.name} </Text></TouchableOpacity>
            </ScrollView>         
        </SafeAreaView>
        )
    }
    
   
    renderPhotoRef = (item) => {
      if(item.photos && item.photos.length) {
        let refPhoto = item.photos[0].photo_reference;
        return (
          <ImageBackground imageStyle={{ borderRadius: 20}} style={styles.logo} source={{uri:`https://maps.googleapis.com/maps/api/place/photo?photoreference=${refPhoto}&sensor=false&maxheight=1600&maxwidth=1600&key=AIzaSyBNcrQtcayXhIgQN6ZUVyapGTAV0ZwuL-Y`}}>
            <TouchableOpacity style = {styles.ikona}><MaterialCommunityIcons size= {30} name="heart" style = {styles.star}/></TouchableOpacity>
          </ImageBackground>
        );
      }
      return (
        <ImageBackground imageStyle={{ borderRadius: 20}} style={styles.logo} source={require('./Images/no.png')}>
          <TouchableOpacity style = {styles.ikona}><MaterialCommunityIcons size= {30} name="heart" style = {styles.star}/></TouchableOpacity>
        </ImageBackground>
      ); 
    } 
    
    render() { 

        return (
          <SafeAreaView style = {{marginTop: 25}}><View>
            <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data = null) => {
        // 'details' is provided when fetchDetails = true
        this.props.navigation.navigate(" ", {id: data.place_id})
      }}
      query={{
        key: 'AIzaSyBNcrQtcayXhIgQN6ZUVyapGTAV0ZwuL-Y',
        language: 'hrv',
        components: 'country:hrv',
      }}
      renderLeftButton={()  => <Image style={styles.obavijesti} source={require('./Images/search.png')}/>}
      GooglePlacesSearchQuery={{
        type: 'restaurant'
      }}
      fetchDetails = {true}
      styles={{
        description: {
          fontWeight: 'bold',
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
        },
        listView: {
          color: 'black', //To see where exactly the list is
          zIndex: 10000000, //To popover the component outwards
          position: 'absolute',
          top: 45
        },}}
      
    />

          <View style = {{marginTop: 50}}>
          <Text style = {styles.naslov}> Restorani </Text>
            <FlatList  
              style={styles.bot} 
              horizontal={true}
              data={this.state.restaurantList}
              keyExtractor={item => item.place_id}
              renderItem={this.renderItem}
              extraData={this.state.restaurantList}
          /> 
          <Text style = {styles.naslov}> Barovi i Kafići </Text>
          <FlatList  
              style={styles.bot} 
              horizontal={true}
              data={this.state.restaurantList2}
              keyExtractor={item => item.place_id}
              renderItem={this.renderItem}
              extraData={this.state.restaurantList2}
          />
          </View>
          
        </View></SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginTop: 0,
      marginLeft: 10,
  },
  logo: {
    width: 200,
    height: 200,
    backgroundColor: "grey",
    borderWidth: 0,
    borderRadius: 20,
    marginRight: 10,
    paddingLeft: 150,
    paddingTop: 10
  },
  ime: {
    fontSize: 19,
    paddingBottom: 20,
    marginTop: 10,
    paddingBottom: 5,
    color: '#3E5481',
    fontWeight: 'bold',
    textAlign: "center"
  },
  podnaslov: {
    color: "#9FA5C0",
    fontSize: 17,
    textAlign: "center",
    marginBottom: 10,
    
  },
  naslov: {
    fontSize: 30,
    paddingBottom: 0,
    marginBottom: 5,
    color: '#3E5481'
    
  },
  bot: {
    marginBottom: 20
  },
  map: {
      height: 300,
      width: Dimensions.get('window').width*0.96,
      marginRight: 20,
      marginBottom: 10
  },
  guzva: {
    height: 100,
    width: Dimensions.get('window').width*0.96,
    marginBottom: 10
  },
  tekst: {
    marginLeft:25,
    fontSize: 15,
    marginBottom: 10,
    color: '#2E3E5C'
  },
  obavijesti:{
    width: 30,
    height: 30,
    paddingHorizontal: 20,
    paddingVertical: 21
  },
  star: {
    color: "#d3d3d3",
    width: 30,
    borderRadius: 20,
    marginLeft: 4
    
  },
  starActive: {
    color: "red",
    width: 30,
    borderRadius: 20,
    marginLeft: 4,
  },
  ikona: {
    width: 50
  }
});
