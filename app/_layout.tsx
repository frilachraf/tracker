import { Stack } from 'expo-router'
import React from 'react'
import "../global.css";
import { Text, View } from 'react-native';

function _layout() {
  return (
    <Stack
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen 
        name='modal'
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen 
        name='(modals)/SupplierAddModal'
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen 
        name='(modals)/PacksAddModal'
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  )
}

export default _layout