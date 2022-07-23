import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, SafeAreaView } from "react-native";




export default class HomeScreen extends React.Component {

    //<Text>{this.state.displayName}</Text>
    render() {  
        return (
          
            <SafeAreaView style={styles.container}>
                <Text style = {styles.naslov}> Omiljeno </Text>
              
                  <View style = {styles.novi}>
                 <TouchableOpacity onPress = {() => this.props.navigation.navigate("R1")}><Image style={styles.logo} source={require('./Images/r1.jpg')}/></TouchableOpacity>
                 <TouchableOpacity><Image style={styles.logo} source={require('./Images/r2.jpg')}/></TouchableOpacity>
                 </View>
            </SafeAreaView>

             
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 25,
        //flexDirection: "row"

        
    },
    logo: {
      width: 180,
      height: 180,
      backgroundColor: "grey",
      borderWidth: 5,
      borderRadius: 20,
      marginHorizontal: 8
    
    },
    naslov: {
      fontSize: 25,
      paddingBottom: 20,
      marginTop: 30,
      paddingBottom: 10,
      color: '#3E5481',
      fontWeight: 'bold',
    
    },
    bot: {
      marginBottom: 20,
      marginTop: 10
    },
    novi: {
      flexDirection: "row"
    }

});