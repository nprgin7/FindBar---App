import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default class PointsScreen extends React.Component {
   

    render() {  
        return (
            <View style={styles.container}>
                <Text style = {styles.naslov}> Stanje bodova </Text>
                <Image style={styles.bodovi} source={require('./Images/bodovi.png')}/>
            <TouchableOpacity style={{marginTop: 32}}>
                
            </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    naslov: {
        fontSize: 25,
        paddingBottom: 20,
        marginTop: 24,
        paddingBottom: 5,
        color: '#3E5481',
        fontWeight: 'bold',
        textAlign: "center"
    },
    bodovi: {
        marginTop: 12
    }

});