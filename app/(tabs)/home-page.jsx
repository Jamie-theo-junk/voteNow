import { StyleSheet, Image, View, Dimensions,Text,ScrollView, TouchableOpacity } from 'react-native';

import handShakeImage from "@/assets/images/hand-shake.png";
import userCircle from "@/assets/images/user_circle.png";

const{ width } = Dimensions.get("window")


export default function TabTwoScreen() {
  return (
  <ScrollView style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        <TouchableOpacity onPress={() => navigation.navigate("create-vote")}>
      <View style={[styles.box, {backgroundColor:'#BE0B31'}]} >
      <Image source={userCircle} style={styles.images}/>
      <Text style={styles.boxText}> Begin Democracy </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("join-vote")}>
        <View style={[styles.box, {marginRight:20, backgroundColor:'#012969'}]} >
        <Image source={handShakeImage} style={styles.images} />
        <Text style={styles.boxText}> Join Vote </Text>
        </View>
        </TouchableOpacity>
      </ScrollView>
    <Text style={styles.currentVotesTitle}> Current Votes</Text>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  box:{
    width: 340,
    height:230,
    alignItems:'center',
    backgroundColor:'#D7D7D7',
    flexDirection: "row",
    marginTop:135,
    marginLeft: 20,
    marginBottom:20,
    borderRadius: 30
    
  },
  images:{
    width: 150,
    height:150,
    marginLeft:20
  },
  boxText:{
    color: '#FFFFFF',
    fontSize: 20,
    marginLeft:20,
    maxWidth:150,
  },
  currentVotesTitle:{
    fontWeight:'bold',
    fontSize:32,
    marginLeft: 45,
  }
});

