import { Image, StyleSheet, View,Text, Button, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

export default function LoginScreen() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Vote Now</Text>
    <View style={styles.redRectangle}/>
    <View style={styles.blueRectangle}/>
    <View style={styles.whiteRectangle}/>
    <TextInput  style={styles.loginName} 
                placeholder="Name"
                placeholderTextColor="#000000"/>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("explore")}>
      <Text style={styles.buttonText}>Enter</Text>
    </TouchableOpacity>
   </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 85,
    alignItems:'center'
  },
  title: {
    fontSize: 30,
    fontWeight:'bold',
    marginBottom:20,
  },
redRectangle: {
 height: 64,
 width: 369,
 marginBottom:25,
 alignSelf:'flex-start',
 backgroundColor: '#BE0B31',
 borderRadius:30,
 borderTopLeftRadius:0,
 borderBottomLeftRadius:0,
 shadowColor:'#000',
 shadowOffset: {width:0, height: 4},
  shadowOpacity:0.25,
  shadowRadius:4,
  elevation: 5,
},
blueRectangle: {
  height: 64,
  width: 290,
  marginBottom:25,
  alignSelf:'flex-start',
  backgroundColor: '#012969',
  borderRadius:30,
  borderTopLeftRadius:0,
  borderBottomLeftRadius:0,
  shadowColor:'#000',
  shadowOffset: {width:0, height: 4},
   shadowOpacity:0.25,
   shadowRadius:4,
   elevation: 5,
 },
 whiteRectangle: {
  height: 64,
  width: 64,
  marginBottom:115,
  alignSelf:'flex-start',
  backgroundColor: '#FCFFFE',
  borderRadius:30,
  borderTopLeftRadius:0,
  borderBottomLeftRadius:0,
  shadowColor:'#000',
  shadowOffset: {width:0, height: 4},
   shadowOpacity:0.25,
   shadowRadius:4,
   elevation: 5,
 },
 loginName:{
  height:55,
  width:300,
  background: '#FFFFFF',
  borderRadius: 30,
  marginBottom: 14,
  padding:5,
  paddingLeft:30,
  fontSize:16,
  shadowColor:'#000',
  shadowOffset: {width:0, height: 4},
   shadowOpacity:0.25,
   shadowRadius:4,
   elevation: 5,
 },
 button:{
  height:50,
  width: 300,
  borderRadius: 30,
  backgroundColor: "#DDDDDD",
  justifyContent:"center",
  alignItems:'center',
  shadowColor:'#000',
  shadowOffset: {width:0, height: 4},
   shadowOpacity:0.25,
   shadowRadius:4,
   elevation: 5,
 },
 buttonText:{
  fontSize: 20,
 }

});
