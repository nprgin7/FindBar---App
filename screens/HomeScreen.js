import React from "react";
import Stacks from "../components/Tabs";
import { NavigationContainer } from "@react-navigation/native";

export default class NavScreen extends React.Component {

    render() {  
        return (
           <NavigationContainer>
               <Stacks/>
           </NavigationContainer>
        );
    }
}