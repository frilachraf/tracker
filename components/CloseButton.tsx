import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BackButtonProps } from '@/types'
import { useRouter } from 'expo-router'
import { CaretLeft, X } from 'phosphor-react-native'
import { colors, radius } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'

const CloseButton = ({
    style,
    iconSize = 26
}:BackButtonProps) => {
    const router = useRouter()
    const handleBack = ()=>{
        router.back()
    }
  return (
    <TouchableOpacity 
        onPress={handleBack} 
        style={[style,styles.button]}
        >
        <X 
        size={verticalScale(iconSize)} 
        color={colors.white} 
        weight='bold'
        />
    </TouchableOpacity>
  )
}

export default CloseButton

const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.neutral600,
        alignSelf:'flex-start',
        borderRadius: radius._12,
        borderCurve:"continuous",
        padding:5
    }
})