import React from 'react'
import * as Permissions from 'expo-permissions'
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native';

export default class WriteScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      typed:'',
      send:''
    }
  }
  
  render(){
      return(
        
          <View backgroundColor = 'black'>
           
            <View style={styles.inputView}>

            <TextInput
              style={styles.inputBox}
              value = {this.state.typed}/>
            </View>

            <Text style={styles.submitAlert}>{this.state.send}</Text>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={()=>{
                {this.state.send = 'Thank you '}
              }}>
              <Text style={styles.buttontxt}>Submit</Text>
            </TouchableOpacity>
          </View>
        
      )
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputView:{
    flexDirection: 'row',
    margin: 20,
  },
  inputBox:{
    width:340,
    height: 255,
    borderWidth: 1,
    fontSize: 13,
    padding : 15,
    borderColor:'grey',
    textAlign : 'left',
    textAlignVertical: 'top'
  },
  submitButton:{
    backgroundColor: '#FBC02D',
    width: 100,
    height:50,
    alignSelf:'center',
    marginBottom:50
  },
  buttontxt:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight:"bold",
    color: 'black'
  }
});