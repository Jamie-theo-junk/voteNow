import { Stack } from 'expo-router';
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';

import LoginPage from '../(tabs)/index';
import HomePage from '../(tabs)/home-page';
import CreateVote from '../(tabs)/create-vote';
import JoinVote from './over-view';



export default function TabLayout() {


  return (
    
   <Stack screenOptions={{headerShown: false}}>
    <Stack.Screen name="index"  />
    <Stack.Screen name="home-page"/>
    <Stack.Screen name="create-vote"/>
    <Stack.Screen name="over-view"/>
   </Stack>
  );
}
