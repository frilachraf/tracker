import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { colors } from '@/constants/theme'
import AuthProvider from '../../context/AuthProvider'
const _layout = () => {
  return (
    // <AuthProvider>

    <Stack
          screenOptions={{
            headerShown: false,
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.neutral900,
            headerTitleStyle: {
              fontWeight: '800',
            },
          }}

    >
    </Stack>
    // </AuthProvider>
  )
}

export default _layout

// const styles = StyleSheet.create({})