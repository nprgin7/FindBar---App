import React from "react";
import { StyleSheet, Text, View, FlatList,TouchableOpacity, ScrollView, Image, SafeAreaView, Dimensions } from "react-native";
import MapView, { Marker } from 'react-native-maps';




export default class R1Screen extends React.Component {



  constructor(){
    super();
    this.state = { 
      hasLocationPermission: false,
      latitude: 0,
      longitude: 0,   
      objekt: []
    }
  }
  

  componentDidMount(){
    let idURL = `https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyBNcrQtcayXhIgQN6ZUVyapGTAV0ZwuL-Y&place_id=${this.props.route.params.id}`;
    fetch(idURL)
      .then((response) => response.json())
      .then(result => {
        var list = [];
        list.push(result.result);
        this.setState({
          objekt: list
        });
      })
      
    }
    renderPhotoRef = (item) => {
     
        let pic = <View><Image style={styles.logo} source={{uri:`https://maps.googleapis.com/maps/api/place/photo?photoreference=${item.photos[0].photo_reference}&sensor=false&maxheight=1600&maxwidth=1600&key=AIzaSyBNcrQtcayXhIgQN6ZUVyapGTAV0ZwuL-Y`}}/></View>;
        let pic1 = <View><Image style={styles.logo} source={{uri:`https://maps.googleapis.com/maps/api/place/photo?photoreference=${item.photos[1].photo_reference}&sensor=false&maxheight=1600&maxwidth=1600&key=AIzaSyBNcrQtcayXhIgQN6ZUVyapGTAV0ZwuL-Y`}}/></View>;
        let pic2 = <View><Image style={styles.logo} source={{uri:`https://maps.googleapis.com/maps/api/place/photo?photoreference=${item.photos[2].photo_reference}&sensor=false&maxheight=1600&maxwidth=1600&key=AIzaSyBNcrQtcayXhIgQN6ZUVyapGTAV0ZwuL-Y`}}/></View>;
        let pic3= <View><Image style={styles.logo} source={{uri:`https://maps.googleapis.com/maps/api/place/photo?photoreference=${item.photos[3].photo_reference}&sensor=false&maxheight=1600&maxwidth=1600&key=AIzaSyBNcrQtcayXhIgQN6ZUVyapGTAV0ZwuL-Y`}}/></View>;
        let pic4 = <View><Image style={styles.logo} source={{uri:`https://maps.googleapis.com/maps/api/place/photo?photoreference=${item.photos[4].photo_reference}&sensor=false&maxheight=1600&maxwidth=1600&key=AIzaSyBNcrQtcayXhIgQN6ZUVyapGTAV0ZwuL-Y`}}/></View>;

        
        return (
          <View>
          <ScrollView horizontal={true}>
          <View>{pic}</View>
          <View>{pic1}</View>
          <View>{pic2}</View>
          <View>{pic3}</View>
          <View>{pic4}</View>
          </ScrollView>
        </View>);
      
    } 
    renderItem = ({item}) => {
      return(
        <SafeAreaView style={styles.container}>
              <ScrollView>{console.log(item.place_id)}
                  <Text style = {styles.ime}> {item.name} </Text>
                  <Text style = {styles.podnaslov}> {item.types[0]} </Text>
                 <ScrollView style={styles.bot} horizontal={true}>
                 <View>{this.renderPhotoRef(item)}</View>
                  </ScrollView>
                  <Text style = {styles.naslov}> Lokacija </Text>
                  <MapView style={styles.map} provider={MapView.PROVIDER_GOOGLE}  initialRegion={{
                    latitude: item.geometry.location.lat,
                    longitude: item.geometry.location.lng,
                    latitudeDelta: 0.002,
                    longitudeDelta: 0.002,
                }}>
                    <Marker coordinate={{ latitude: item.geometry.location.lat, longitude: item.geometry.location.lng }} />
                </MapView>
                <Text style = {styles.naslov}> Adresa </Text>
                  <Text style={styles.tekst}> {item.formatted_address}</Text>
                <Text style = {styles.naslov}> Gužva </Text>
                  <Image style={styles.guzva} source={require('./Images/guzva.jpg')}/>
                  <Text style = {styles.naslov}> Radno vrijeme </Text>
                  <Text style={styles.tekst}>{item.opening_hours.weekday_text[0]}</Text>
                  <Text style={styles.tekst}>{item.opening_hours.weekday_text[1]}</Text>
                  <Text style={styles.tekst}>{item.opening_hours.weekday_text[2]}</Text>
                  <Text style={styles.tekst}>{item.opening_hours.weekday_text[3]}</Text>
                  <Text style={styles.tekst}>{item.opening_hours.weekday_text[4]}</Text>
                  <Text style={styles.tekst}>{item.opening_hours.weekday_text[5]}</Text>
                  <Text style={styles.tekst}>{item.opening_hours.weekday_text[6]}</Text>

                <Text style = {styles.naslov}> Epidemioloske mjere </Text>
                  <Text style={styles.tekst}>- Obavezno korištenje maske za lice</Text>
                  <Text style={styles.tekst}>- Radno vrijeme do 22h</Text>
                  <Text style={styles.tekst}>- Posluživanje na otvorenom prostoru</Text>
                  <Text style={styles.tekst}>- Održavanje fizičke distance</Text>
                  <Text style={styles.tekst}>- Razmak između stolova 2 metra</Text>
                  <Text style={styles.tekst}>- Broj stolova na raspolaganju: 10</Text>
                  <Text style = {styles.naslov}> Usluge </Text>
                  <Text style={styles.tekst}>- Mogućnost dostave</Text>
                  <Text style={styles.tekst}>- Hrana i kava za ponijeti</Text>
                  <Text style = {styles.naslov}> Kontakt </Text>
                  <Text style={styles.tekst}>{item.formatted_phone_number}</Text>
                </ScrollView>
                
            </SafeAreaView>
      )
  }

  //<Text>{this.state.displayName}</Text>
    render() {  
        return (
         
          <View>
            <View>
              <FlatList  
                style={styles.bot} 
                data={this.state.objekt}
                keyExtractor={item => item.place_id}
                renderItem={this.renderItem}
                extraData={this.state.objekt}
            /> 
            </View>
            
          </View>

             
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 5,
        marginLeft: 10,
    },
    logo: {
      width: 150,
      height: 150,
      backgroundColor: "grey",
      borderWidth: 5,
      borderRadius: 20,
      marginRight: 10
    },
    ime: {
      fontSize: 25,
      paddingBottom: 20,
      marginTop: 30,
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
      fontSize: 20,
      paddingBottom: 10,
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
    }
});