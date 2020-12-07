import React, { Component } from 'react';
import ImageModal from 'react-native-image-modal';
import {
  StyleSheet, 
  View, 
  Dimensions, 
  Button, 
  Alert, 
  TouchableOpacity, 
  Text, 
  ImageBackground,
  Image,
  ImageStore
} from 'react-native';

var { height } = Dimensions.get('window');
 
var box_count = 2;
var box_height = height / box_count;
 
export default class AlignItems extends Component {
  render() {
    return (
    <View style={styles.wrapper}>
        <View style={styles.container2}></View>

          <View style={styles.container}>
            
              
              <View style={[styles.box, styles.box1, styles.tryhardbox]}></View>
              
                <Text style={[styles.tryhardbox]} style={{ flex: 6, flexWrap: 'wrap'}}> Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                  commodo consequat.  
              
                </Text>
              
                <View style={[styles.box3]}>
                
                  <TouchableOpacity style={[styles.box3, styles.tryhardbox]}  
                                  onPress={() => Alert.alert('Simple Button pressed') }>

                    <ImageModal
                      resizeMode="contain"
                      imageBackgroundColor="#000000"
                      source={require('./Images/logo.png')} style={[styles.box3]}
                    />
                  
                  
                  </TouchableOpacity>
              
                </View>
            
          </View>
         
        </View>
      );
    }
  }

 


const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: .23,
    flexDirection: 'row',
    justifyContent: 'center', //replace with flex-end or center
    //borderBottomWidth: 2,
    borderBottomColor: '#000',
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: '#2196F3',
    marginBottom: 10
  },
  container2: {
    flex: .2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start' //replace with flex-end or center
  },

  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  box: {
    width: 110,
    height: 100
  },
  box1: {
    backgroundColor: '#2196F3',
    flex: .5,
    flexDirection: 'row'
  },
  box2: {
    backgroundColor: '#8BC34A'
  },
  box3: {
    width: 110,
    height: 100
    
  },
  tryhardbox:{
   padding: 10
  }
});
 
//export default HomeScreen;