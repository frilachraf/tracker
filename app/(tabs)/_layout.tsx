import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import CustomTabs from '@/components/CustomTabs'
import AuthProvider from '@/context/AuthProvider'

const _layout = () => {
  return (
    
        <Tabs tabBar={CustomTabs} screenOptions={{headerShown:false}}>
          <Tabs.Screen name="home"/>
          <Tabs.Screen name="suppliers"/>
          <Tabs.Screen name="packs"/>
          <Tabs.Screen name="profile"/>
      </Tabs>
  )
}

export default _layout