import{View,StyleSheet, ScrollView,Image,TextInput,Text} from 'react-native'
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

export default function CreateVote() {

    const [descriptionHeight, setDescriptionHeight] = useState(100);

    return(
        <View style={styles.container}>
        <ScrollView >
            <View style={styles.back_button}>
                <Ionicons name="arrow-back" size={30} color="white"  /> </View>
            <View style={styles.edit_image}>
                
                <View style={styles.edit_button}>
                    <Ionicons name="create" size={15} color="black"/>
                    </View>
            </View>
            
            <TextInput placeholder="Title" style={styles.title}></TextInput>
            <TextInput placeholder="Description" style={[styles.description, {height:descriptionHeight}]}
             multiline={true} 
             onContentSizeChange={(event) =>
                setDescriptionHeight(event.nativeEvent.contentSize.height)}
             ></TextInput>
            <View></View>
             
        </ScrollView>
        
        <View style={styles.create_vote_btn}>
        <Text style={styles.create_vote_text}>Create Vote</Text>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    back_button:{
        width:40,
        height:40,
        marginTop: 20,
        marginLeft: 20,
        backgroundColor:'#012969',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
},
edit_image:{
    width:331,
    height:240,
    marginTop:40,
    backgroundColor:'#D7D7D7',
    borderRadius:30,
    alignSelf:'center'
},
edit_button:{
    width:30,
    height:30,
    borderRadius:30,
    backgroundColor:'#FFFFFF',
    justifyContent:'center',
    alignItems:'center',
    
    position: 'absolute',
    bottom: -5,  // Distance from the bottom
    right: -5
    
},
title:{
    color:'black',
    fontSize:25,
    marginStart:60,
    marginEnd:60,
    marginTop:30,
    fontWeight:'bold',

},
description:{
    color:'black',
    fontSize:20,
    marginStart:60,
    marginEnd:60,
    marginTop:30,
    minHeight:100,
    textAlignVertical:'top',
    paddingBottom:150,
},
create_vote_btn:{
position:'absolute',
bottom:30,
alignSelf: 'center',
borderRadius:20,
backgroundColor:'#012969',
width:300,
height:60,
justifyContent:'center',
alignItems:'center'
},
create_vote_text:{
    fontSize: 20,
    color:'white',
    fontWeight:'bold'
}
})