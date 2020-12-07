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
  ImageStore,
  ScrollView
} from 'react-native';

var { height } = Dimensions.get('window');
 
var box_count = 2;
var box_height = height / box_count;
 
export default class AlignItems extends Component {
  render() {
    return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
      <ScrollView style={[styles.scrollView]} >
    
    <Text style={[styles.text]}> 
      Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
      commodo consequat.  Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam
          
    </Text>
    </ScrollView>
        <TouchableOpacity style={[styles.box3]}  
          onPress={() => Alert.alert('Simple Button pressed') }>

          <ImageModal
            //justifyContent= 'center'
            //alignItems= 'stretch'
            resizeMode= 'contain'
            //flexDirection= 'row'
            //resizeMode="contain"
            imageBackgroundColor="#000000"
            source={require('./Images/logo.png')} style={[styles.box3]}
          />
                  
                  
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
      <ScrollView style={[styles.scrollView]} >
    
    <Text style={[styles.text]}> 
      Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
      commodo consequat.  Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam
          
    </Text>
    </ScrollView>
        <TouchableOpacity style={[styles.box3]}  
          onPress={() => Alert.alert('Simple Button pressed') }>

          <ImageModal
            resizeMode="contain"
            imageBackgroundColor="#000000"
            source={require('./Images/logo.png')} style={[styles.box3]}
          />
                  
                  
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
      <ScrollView style={[styles.scrollView]} >
    
        <Text style={[styles.text]}> 
          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
          commodo consequat.  Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam
              
        </Text>
        </ScrollView>
        <TouchableOpacity style={[styles.box3]}  
          onPress={() => Alert.alert('Simple Button pressed') }>

          <ImageModal
            resizeMode="contain"
            imageBackgroundColor="#000000"
            source={require('./Images/logo.png')} style={[styles.box3]}
          />
                  
                  
        </TouchableOpacity>
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
  box3: {
    width: 110,
    height: 100,
    flexWrap: 'wrap',
    marginTop: 18,
    flex: 2.5
    
    
  },
  text: {
    flex: 5, 
    flexWrap: 'wrap',
    margin:8
  },
  scrollView: {
    marginHorizontal: 20,
    width: 160
  },
  
});
 
//export default HomeScreen;