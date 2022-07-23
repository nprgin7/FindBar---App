import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, configureFonts } from "react-native";
import * as firebase from "firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LoginScreen extends React.Component {
    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    removeValue = async () => {
        try {
          await AsyncStorage.removeItem('Username')
        } catch(e) {
          // remove error
        }
      
        console.log('Done.')
      }

    storeData = async (email) => {
        try {
          await AsyncStorage.setItem('Username', email)
        } catch (e) {
          // saving error
        }
      }

    handleLogin = () => {
        const {email, password} = this.state;
        this.storeData();
        firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
            this.setState({errorMessage: error.message}); 
            this.removeValue;});
    }

    render() {  
        return (
            <View style={styles.container}>
                
                <ImageBackground style={styles.bg} source={require('./Images/bg.jpg')}>
                <Image style={styles.jezik} source={require('./Images/hrv.png')}/>
                <Text style={styles.greeting}>{"Prijava"}</Text>
            
                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
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
                <TouchableOpacity style = {styles.button} onPress = {this.handleLogin}>
                    <Image source={require('../assets/Default.png')} style = {styles.prijava} />
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {{alignSelf: "center", marginTop: 32}}
                    onPress = {() => this.props.navigation.navigate("Register")}
                >
                    <Text style={{color: "#000000", fontSize: 15, marginBottom : 115, fontWeight: "bold"}}>
                        Novi ste na Findbaru?{"\n"} <Text style={{color: "#ffffff", fontWeight: "bold"}}>     Registrirajte se!</Text>
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
        fontSize : 40,
        fontWeight : "400",
        textAlign : "center",
        fontWeight: "500"
    },
    errorMessage: {
        height : 72,
        alignItems : "center",
        justifyContent : "center",
        marginHorizontal : 30
    },
    error: {
        color : "white",
        fontSize : 13,
        fontWeight : "600",
        textAlign : "center"
    },
    form: {
        marginBottom : 27,
        marginHorizontal : 50
    },
    inputTitle: {
        color : "white",
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
        paddingLeft: 30,
        alignItems : "center",
    },
    password: {
        marginTop : 15
    },
    /*button: {
        marginHorizontal : 80,
        backgroundColor : "#737373",
        borderRadius : 300,
        height : 52,
        alignItems : "center",
        justifyContent : "center",
        marginBottom : 30
        
    },*/
    bg:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    prijava: {
        alignSelf: 'center',
        
    },
    jezik: {
        height:25,
        width: 45,
        marginLeft: 317,
        marginTop: 70
        
    }

});
