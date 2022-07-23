import React from "react";
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image, TextInput, SafeAreaView } from "react-native";
import * as firebase from "firebase";

export default class ProfileScreen extends React.Component {
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
            
            <SafeAreaView style={styles.container}>
                
            <Image source={require('./Images/profilna.png')} style = {styles.korisnik} />
            <Text style={styles.username}>{this.state.displayName}</Text>

            <TouchableOpacity style={styles.button}  onPress = {() => this.props.navigation.navigate("Uređivanje profila")}>
                <Text style={styles.opcija}>Uredivanje profila</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}  onPress = {() => this.props.navigation.navigate("Postavke privatnosti")}>
                <Text style={styles.opcija}>Sigurnost</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}  onPress = {() => this.props.navigation.navigate("QR")}>
                <Text style={styles.opcija}>QR kod</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}  onPress = {() => this.props.navigation.navigate("Stanje bodova")}>
                <Text style={styles.opcija}>Stanje bodova</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.signOutUser}>
                <Text style={styles.opcija}>Odjava</Text>
            </TouchableOpacity>
            </SafeAreaView>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 35
    },
    button:{
        width: '100%',
        justifyContent: "flex-start",
        alignItems: "center",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: "#D3D3D3",
        borderBottomColor: "#D3D3D3",
        padding: 20,
        backgroundColor: "white",
        
    },
    korisnik: {
        width: 100,
        height: 100,
        marginBottom: 20,
        marginTop: 15

    },
    username: {
        color: "#3E5481",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20
    },
    opcija: {
        color: "#3E5481",
        
    }

});