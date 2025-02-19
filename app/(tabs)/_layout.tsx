import { Stack } from 'expo-router';
import React from 'react';




export default function TabLayout() {


  return (
    
   <Stack screenOptions={{headerShown: false}} initialRouteName="create-vote">
    <Stack.Screen name="home-page"/>
    <Stack.Screen name="index"/>
    <Stack.Screen name="create-vote"/>
    <Stack.Screen name="over-view"/>
    <Stack.Screen name="sign-in"/>
   </Stack>
  );
}
