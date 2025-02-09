import { Stack } from 'expo-router'
import React from 'react'
import "../global.css";
import { Text, View } from 'react-native';

function _layout() {
  return (
    <Stack
      screenOptions={{headerShown: false}}
    >
    </Stack>
  )
}

export default _layout