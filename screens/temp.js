import React, {useState, useEffect} from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, SafeAreaView, FlatList } from "react-native";

const GooglePlacesInput = () => {
    return (
      <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyBNcrQtcayXhIgQN6ZUVyapGTAV0ZwuL-Y',
          language: 'eng',
          components: 'country:hrv',
          
        }}
        GooglePlacesSearchQuery={{
            type: 'restaurant'
          }}
          fetchDetails = {true}
          
      />
    );
  };
//https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=400&photoreference=ATtYBwLxGG0jU0y5mDCACeYxHISWim5MRQVo6MqN6PmmOmYUi8u6jfUsA7sBUUlRrin6veY4BtruYutNYAzwobhTYSa5tO6p6wfBH0LjcmGPXvJegicRRwCInzL9juE24h7kZIWFOMi5-xA_43t-DI01KcBgNpf4CaVScW9t-w8cfVC7JtMS&key=AIzaSyBNcrQtcayXhIgQN6ZUVyapGTAV0ZwuL-Y
  const Test = () =>{
    

    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(apiURL)
        .then((response) => response.json())
        .then((result) => this.setState({restaurantList: result}))
        .catch((error) => alert(error));
    });

    return(
      <View>
      <GooglePlacesInput/>
     </View>
    );
    }
  

    const apiURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=45.2582,17.3840&radius=2000&type=restaurant&key=AIzaSyBNcrQtcayXhIgQN6ZUVyapGTAV0ZwuL-Y"

export default class temp extends React.Component {
  state = { 
    hasLocationPermission: false,
    latitude: 0,
    longitude: 0,   
    restaurantList: []
  }
  

  handleRestaurantSearch = () => {
    fetch(apiURL)
      .then(response => response.json())
      .then(result => this.setState({restaurantList: result}))
      .catch( e => console.log(e))
      .finally(() => {return null})
  }

    renderItem = ({item}) => {  
      
        return(
          <View>
              <View>
                <TouchableOpacity><Text>{item.name}</Text></TouchableOpacity>
              </View>
          </View>
          )
    }
   
    renderPhotoRef = () => {
      var temp = <View><View><Text>{this.state.restaurantList.results[0].photos[0].photo_reference}</Text></View></View>;
      return temp;
    }

   
    
    render() { 
      console.log("Bok Branko")
        return (
          <View>
            <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyBNcrQtcayXhIgQN6ZUVyapGTAV0ZwuL-Y',
          language: 'eng',
          components: 'country:hrv',
          
        }}
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
              zIndex: 1000, //To popover the component outwards
              position: 'absolute',
              top: 45
            },
          }}
          
      />
            <View><Text></Text>
          <FlatList  
          data={this.state.restaurantList.results}
          keyExtractor={(item) => item.place_id}
          renderItem={this.renderItem}
          style={{backgroundColor: 'grey', width: '80%', margin: 60, padding: 5}}
        />
        <View>{console.log(this.state.restaurantList)}</View>
        
        </View></View>
          

       
        );
    }
}

