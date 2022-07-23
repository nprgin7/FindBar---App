import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Dimensions } from "react-native";
import * as firebase from "firebase";

export default class EditProfileScreen extends React.Component {
    state = {
        email: "",
        displayName: ""
    };
    
    componentDidMount() {
        const {email, displayName} = firebase.auth().currentUser;

        this.setState({email, displayName});
    };

    changeUsername = () => {
            this.setState({displayName: this.state.displayName})
        };

    render() {  
        return (
            <View style={styles.container}>
                <Image style={styles.change} source={require('./Images/change.png')}/>
                <Text style = {styles.podnaslov}> Ime i prezime </Text>
                <TextInput 
                            placeholder = "unesite ime i prezime" 
                            style={styles.input} 
                            autoCapitalize="none"
                ></TextInput>
                <Text style = {styles.podnaslov}> Korisničko ime </Text>
                <TextInput 
                            placeholder = "promijeni korisničko ime" 
                            style={styles.input} 
                            autoCapitalize="none"
                            onChangeText = {displayName => this.setState({displayName})}
                            
                ></TextInput>
                <Text style = {styles.podnaslov}> Email </Text>
                <TextInput 
                            placeholder = "promijeni email" 
                            style={styles.input} 
                            autoCapitalize="none"
                ></TextInput>
                
                <Text style = {styles.podnaslov}> O meni </Text>
                <TextInput 
                            placeholder = "napišite tekst" 
                            style={styles.input} 
                            autoCapitalize="none"
                ></TextInput>
                
                
                <TouchableOpacity onPress = {() => this.changeUsername()}>
                    <Image 
                            style={styles.potvrdi} source={require('./Images/potvrdi.png')}/>
                </TouchableOpacity>
            
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
    change: {
        alignSelf:"center",
        marginBottom: 15,
        marginTop: 10
    },
    podnaslov: {
        fontSize: 18,
        paddingBottom: 5,
        color: '#3E5481',
        fontWeight: "bold",
        paddingTop: 5
    },
    input: {
        borderColor : "white",
        height : 60,
        width: Dimensions.get("window").width*0.95,
        fontSize : 15,
        color : "#161F3D",
        borderRadius: 300,
        backgroundColor: "white",
        paddingLeft: 30,
        alignItems : "center",
        paddingBottom: 5
    },
    potvrdi: {
        marginTop: 17,
        width:250,
        height:50,
        borderRadius: 50,
        alignSelf: "center",
        marginLeft: 70
    }

});