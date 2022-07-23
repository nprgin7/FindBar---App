import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from "react-native";
import * as firebase from "firebase";

export default class OptionsScreen extends React.Component {
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
                <Text style = {styles.naslov}>Obavijesti</Text>
                <Image style={styles.obavijesti} source={require('./Images/obavijesti.png')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    naslov: {
        fontSize: 25,
        paddingBottom: 20,
        marginTop: 30,
        paddingBottom: 2,
        color: '#3E5481',
        fontWeight: 'bold',
    },
    podnaslov: {
        fontSize: 20,
        paddingBottom: 10,
        color: '#3E5481'
    },
    obavijesti: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: Dimensions.get('window').width*0.96,
        height: 480,
        marginTop: 30
    }

});