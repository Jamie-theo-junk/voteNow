import { StyleSheet, Image, View, Dimensions,Text,ScrollView } from 'react-native';

import handShakeImage from "@/assets/images/hand-shake.png";
import qrCodeImage from "@/assets/images/qr_code.png";

const{ width } = Dimensions.get("window")


export default function TabTwoScreen() {
  return (
  <ScrollView style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      <View style={styles.box}>
      <Image source={qrCodeImage} style={styles.images}/>
      <Text style={styles.boxText}> Begin Democracy </Text>
      </View>
        <View style={[styles.box, {marginRight:20}]}>
        <Image source={handShakeImage} style={styles.images} />
        <Text style={styles.boxText}> Join Vote </Text>
        </View>
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

