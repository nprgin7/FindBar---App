import React from "react";
import { StyleSheet,Image, Text, View, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as firebase from "firebase";
import MapView, { Marker } from 'react-native-maps';
export default class MapsScreen extends React.Component {
    state = {
        email: "",
        displayName: ""
    };
    
    componentDidMount() {
        const {email, displayName} = firebase.auth().currentUser;

        this.setState({email, displayName});
    };


    signOutUser = () => {
        firebase.auth().signOut();
    };

    

    render() {  
        return (
            <View style={styles.container}>
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
                
                <MapView style={StyleSheet.absoluteFillObject} provider={MapView.PROVIDER_GOOGLE}  initialRegion={{
                    latitude: 45.2582,
                    longitude: 17.3840,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                }}>
                    <Marker coordinate={{ latitude: 45.2582, longitude: 17.3840 }} />
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }

});