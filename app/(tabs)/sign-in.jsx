import { Text,View,StyleSheet,TextInput ,TouchableOpacity} from "react-native";
import { useState } from "react";


export default function SiginInScreen(){

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState(false)

    const handleSignUp = async()=>{
        console.log("hi")
    }

    return(
        
<View style={styles.container}>
    <TextInput  style={[styles.loginName, error && styles.errorInput]} 
                placeholder="Email"
                placeholderTextColor="#000000"
                value={email}
                onChangeText={setEmail}/>

    <TextInput  style={[styles.loginName, error && styles.errorInput]} 
                placeholder="password"
                secureTextEntry
                placeholderTextColor="#000000"
                value={password}
                onChangeText={setPassword}/> 
                 <TextInput  style={[styles.loginName, error && styles.errorInput]} 
                placeholder="Confirm Password"
                secureTextEntry
                placeholderTextColor="#000000"
                value={password}
                /> 
    <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText} onPress={handleSignUp}>Enter</Text>
    </TouchableOpacity>
</View>
    );
}

const styles = StyleSheet.create({
container:{
    flex:1,
    padding:5,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center'
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

});