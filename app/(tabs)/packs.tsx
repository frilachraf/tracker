import { View, Text } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import Button from '@/components/Button'
import { useRouter } from 'expo-router'

const packs = () => {
  const router = useRouter()
  return (
    <ScreenWrapper>
      <Typo>Packs</Typo>
      <Button onPress={()=> router.push('/(modals)/PacksAddModal')}>
        Add Pack
      </Button>
    </ScreenWrapper>
  )
}

export default packs