import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, spacingY } from '@/constants/theme'
import { ModalWrapperProps } from '@/types'
import CloseButton from './CloseButton'
import { SafeAreaView } from 'react-native-safe-area-context'

const ModalWrapper = ({
      style,children, bg = colors.neutral800
    }: ModalWrapperProps
  ) => {
  return (
    <SafeAreaView style={{bottom:0,height:'100%'}}>
      <View style={[styles.container,{backgroundColor:bg},style]}>
      <View className='ms-auto'>
        <CloseButton/>
      </View>
      {children}
      
    </View>
    </SafeAreaView>
  )
}

export default ModalWrapper
const isIOS = Platform.OS == "ios"
const styles = StyleSheet.create({
  container:{
    flex:1,
    // paddingTop: isIOS ? spacingY._20 : spacingY._10 ,
    // justifyContent:":"
    // backgroundColor: colors.neutral900,
    padding: spacingY._20,
    // borderRadius: 10,

  }
})