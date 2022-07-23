import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from "react-native";
import * as firebase from "firebase"; 

export default class RegisterScreen extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
        errorMessage: null
    };

    handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(UserCredentials => {
            return UserCredentials.user.updateProfile({
                displayName: this.state.username
            });
        })
    };

    render() {  
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.bg} source={require('./Images/bg.jpg')}>
                <Text style={styles.greeting}>{"Registracija"}</Text>
            
                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <TextInput 
                            placeholder = "Korisničko ime" 
                            style={styles.input} 
                            autoCapitalize="none"
                            onChangeText = {username => this.setState({username})}
                            value = {this.state.username}
                        ></TextInput>
                    </View>
                    
                    <View style={styles.password}>
                        <TextInput 
                            placeholder = "Email" 
                            style={styles.input} 
                            autoCapitalize="none"
                            onChangeText = {email => this.setState({email})}
                            value = {this.state.email}
                        ></TextInput>
                    </View>

                    <View style = {styles.password}>
                        <TextInput 
                            placeholder = "Lozinka" 
                            secureTextEntry
                            style={styles.input} 
                            autoCapitalize="none"
                            onChangeText = {password => this.setState({password})}
                            value = {this.state.password}
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style = {styles.button} onPress = {this.handleSignUp}>
                <Image source={require('../assets/reg.png')} style = {styles.registracija} />
                </TouchableOpacity>

                <TouchableOpacity 
                    style = {{alignSelf: "center", marginTop: -13}}
                    onPress = {() => this.props.navigation.navigate("Login")}
                >
                    <Text style={{color: "#000000", fontSize: 15, marginBottom: 40, fontWeight: "bold"}}>
                        Imate račun?{"\n"} <Text style={{color: "#ffffff", fontWeight: "bold"}}>Prijavite se!</Text>
                    </Text>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greeting: {
        marginTop : 5,
        fontSize : 35,
        fontWeight : "400",
        textAlign : "center", 
        marginBottom : -25
    },
    errorMessage: {
        height : 72,
        alignItems : "center",
        justifyContent : "center",
        marginHorizontal : 30
    },
    error: {
        color : "#E9446A",
        fontSize : 13,
        fontWeight : "600",
        textAlign : "center"
    },
    form: {
        marginBottom : 30,
        marginHorizontal : 50
    },
    inputTitle: {
        color : "#8A8F9E",
        fontSize : 10,
        textTransform: "uppercase"
    },
    input: {
        borderColor : "white",
        borderWidth : StyleSheet.hairlineWidth,
        height : 60,
        fontSize : 15,
        color : "#161F3D",
        borderRadius: 300,
        backgroundColor: "white",
        paddingLeft: 20,
        alignItems : "center",
    },
    password: {
        marginTop : 15
    },
    bg:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    registracija: {
        alignSelf: 'center',
        marginBottom: 20
    }

});
