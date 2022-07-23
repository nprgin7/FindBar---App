import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, SafeAreaView, Dimensions } from "react-native";
import MapView, { Marker } from 'react-native-maps';



export default class B2Screen extends React.Component {
  //<Text>{this.state.displayName}</Text>
    render() {  
        return (
          
            <SafeAreaView style={styles.container}>
              <ScrollView>
                  <Text style = {styles.ime}> Metropolis </Text>
                  <Text style = {styles.podnaslov}> restoran ・ bar </Text>
                 <ScrollView style={styles.bot} horizontal={true}>
                 <TouchableOpacity><Image style={styles.logo} source={require('./Images/m1.jpg')}/></TouchableOpacity>
                 <TouchableOpacity><Image style={styles.logo} source={require('./Images/m2.jpg')}/></TouchableOpacity>
                 <TouchableOpacity><Image style={styles.logo} source={require('./Images/m3.jpg')}/></TouchableOpacity>
                 <TouchableOpacity><Image style={styles.logo} source={require('./Images/m4.jpg')}/></TouchableOpacity>
                 <TouchableOpacity><Image style={styles.logo} source={require('./Images/m5.jpg')}/></TouchableOpacity>
                 <TouchableOpacity><Image style={styles.logo} source={require('./Images/m6.jpg')}/></TouchableOpacity>
                 <TouchableOpacity><Image style={styles.logo} source={require('./Images/m7.jpg')}/></TouchableOpacity>
                 <TouchableOpacity><Image style={styles.logo} source={require('./Images/m8.jpg')}/></TouchableOpacity>
                
                  </ScrollView>
                  <Text style = {styles.naslov}> Lokacija </Text>
                  <MapView style={styles.map} provider={MapView.PROVIDER_GOOGLE}  initialRegion={{
                    latitude: 45.2600,
                    longitude: 17.3828,
                    latitudeDelta: 0.002,
                    longitudeDelta: 0.002,
                }}>
                    <Marker coordinate={{ latitude: 45.2600, longitude: 17.3828 }} />
                </MapView>
                <Text style = {styles.naslov}> Gužva </Text>
                  <Image style={styles.guzva} source={require('./Images/guzva.jpg')}/>
                  <Text style = {styles.naslov}> Radno vrijeme </Text>
                  <Text style={styles.tekst}>09:00 - 22:00</Text>
                  <Text style = {styles.naslov}> Epidemioloske mjere </Text>
                  <Text style={styles.tekst}>- Obavezno korištenje maske za lice</Text>
                  <Text style={styles.tekst}>- Radno vrijeme do 22h</Text>
                  <Text style={styles.tekst}>- Posluživanje na otvorenom prostoru</Text>
                  <Text style={styles.tekst}>- Održavanje fizičke distance</Text>
                  <Text style={styles.tekst}>- Razmak između stolova 2 metra</Text>
                  <Text style={styles.tekst}>- Broj stolova na raspolaganju: 10</Text>
                  <Text style = {styles.naslov}> Usluge </Text>
                  <Text style={styles.tekst}>- Kava za ponijeti</Text>
                  <Text style = {styles.naslov}> Kontakt </Text>
                  <Text style={styles.tekst}>099 760 860</Text>
                </ScrollView>
                
            </SafeAreaView>

             
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