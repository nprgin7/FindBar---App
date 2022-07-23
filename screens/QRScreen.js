import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default class QRScreen extends React.Component {
   

    render() {  
        return (
            <View style={styles.container}>
                <Text style = {styles.naslov}> QR Kod </Text>
                <Image style={styles.qr} source={require('./Images/qr.jpg')}/>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    qr: {
        width:300,
        height: 300,
        marginTop: 25
    },
    naslov: {
        fontSize: 25,
        paddingBottom: 20,
        marginTop: 24,
        paddingBottom: 5,
        color: '#3E5481',
        fontWeight: 'bold',
        textAlign: "center"
    }

});