import { Image, StyleSheet, View,Text, TouchableOpacity,ScrollView, TextInput} from 'react-native';
import {useState} from 'react';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import {auth ,signInWithEmailAndPassword } from "../firebaseConfig";


export default function LoginScreen() {
  const navigation = useNavigation(); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = async() =>{
    try{
      await signInWithEmailAndPassword(auth, email, password);
      console.log("entered")
      navigation.navigate("home-page")
    }catch(error) {
      setError(true);
      console.log("error " + error)
      Toast.show({
        type: "error",
        text1: "Login Failed",
        text2: "Invalid email or password",
      });
    }
  }
   
  return (
    <ScrollView style={{backgroundColor:'white'}}>
    <View style={styles.container}>
      <Text style={styles.title}>Vote Now</Text>
    <View style={styles.redRectangle}/>
    <View style={styles.blueRectangle}/>
    <View style={styles.whiteRectangle}/>
    <TouchableOpacity style={styles.google_btn} >
    <Image
      source={{ uri: "https://img.icons8.com/color/48/google-logo.png" }}
      style={{ width: 24, height: 24 }}
    />
    <Text style={{marginLeft:10}}>Sign In With Google</Text>
    </TouchableOpacity>

    <Text>or</Text>
    <TextInput  style={[styles.loginName, error && styles.errorInput]} 
                placeholder="Name"
                placeholderTextColor="#000000"
                value={email}
                onChangeText={setEmail}/>

    <TextInput  style={[styles.loginName, error && styles.errorInput]} 
                placeholder="password"
                secureTextEntry
                placeholderTextColor="#000000"
                value={password}
                onChangeText={setPassword}/>          
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text style={styles.buttonText}>Enter</Text>
    </TouchableOpacity>
    <Toast/>
   </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 85,
    alignItems:'center',
    paddingBottom:20,
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
  marginBottom:90,
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
  backgroundColor: '#FFFFFF',
  borderRadius: 30,
  marginBottom: 14,
  paddingLeft:30,
  paddingRight:30,
  fontSize:16,
  shadowColor:'#000',
  shadowOffset: {width:2, height: 4},
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
 google_btn:{
  height:50,
  width: 300,
  flexDirection:'row',
  borderRadius: 30,
  backgroundColor: "white",
  marginBottom:10,
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
 },
 errorInput: {
  color: "#BE0B31",
 }

});


