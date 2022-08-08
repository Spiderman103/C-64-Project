import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import dictionary from '../database';

export default class App extends Component{
constructor(){
  super();

    getWorde = (text) =>{
      try{
        var word = dictionary[text]["word"]
        var lexicalCategory = dictionary[text]["lexicalCategory"];
        var definition = dictionary[text]["definition"];
      
      
        this.setState({
          "word": word,
          "lexicalCategory": lexicalCategory,
          "definition": definition
        })
      }
      
      catch(err){
        alert("Sorry This word is not available for now");
        this.setState({
          'text': '',
          'isSearchPressed':false
        })
      }
    
    }

}


  render(){
    return(
      <View style={{flex:1}}>
        <HomeScreen />
      </View>
    )
  }

  
}
