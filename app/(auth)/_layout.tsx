import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { colors } from '@/constants/theme'

const _layout = () => {
  return (
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
  )
}

export default _layout

const styles = StyleSheet.create({})