import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, Alert,TouchableOpacity, Image } from 'react-native';
import * as firebase from 'firebase';

export default class PasswordScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentPassword: "",
      newPassword: "",
      newEmail: "",
    };
  }
  onSignoutPress = () => {
    firebase.auth().signOut();
  }

  reauthenticate = (currentPassword) => {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
    return user.reauthenticateWithCredential(cred);
  }

  onChangePasswordPress = () => {
    this.reauthenticate(this.state.currentPassword).then(() => {
      var user = firebase.auth().currentUser;
      user.updatePassword(this.state.newPassword).then(() => {
        Alert.alert("Lozinka je uspješno promijenjena!");
      }).catch((error) => { console.log(error.message); });
    }).catch((error) => { console.log(error.message) });
  }

  
  
  render() {
    return (
      <ScrollView style={{flex: 1, flexDirection: "column", paddingVertical: 50, paddingHorizontal: 10,}}>

        <Text style = {styles.naslov}> Promijeni lozinku </Text>
        <TextInput style={styles.textInput} value={this.state.currentPassword}
          placeholder="trenutna lozinka" autoCapitalize="none" secureTextEntry={true}
          onChangeText={(text) => { this.setState({currentPassword: text}) }}
        />

        <TextInput style={styles.textInput} value={this.state.newPassword}
          placeholder="nova lozinka" autoCapitalize="none" secureTextEntry={true}
          onChangeText={(text) => { this.setState({newPassword: text}) }}
        />

        <TouchableOpacity onPress={this.onChangePasswordPress}>
          <Image style={styles.potvrdi} source={require('./Images/potvrdi.png')}/>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: { 
    color: "white", 
    fontWeight: "bold", 
    textAlign: "center", 
    fontSize: 20, 
},
  textInput: { 
    borderColor : "#D0DBEA",
    borderWidth : StyleSheet.hairlineWidth,
    height : 60,
    fontSize : 15,
    color : "#161F3D",
    borderRadius: 300,
    backgroundColor: "white",
    paddingLeft: 30,
    alignItems : "center",
    marginBottom: 2,
    marginTop: 15 
   },
  naslov: {
    fontSize: 20,
    paddingBottom: 20,
    marginTop: 0,
    paddingBottom: 5,
    color: '#3E5481',
    fontWeight: 'bold',
    textAlign: "center"
    },
    potvrdi: {
      marginTop: 17,
      alignSelf: 'center',
      width:250,
      height:50,
      borderRadius: 50,
    }
    
    
});