import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { InputProps } from '@/types'
import { colors, radius, spacingX } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'

const Input = (props:InputProps) => {
  return (
    <View style={[styles.container , props?.containerStyle ]}>
        {props?.icon}
      <TextInput
      className='focus:outline-none h-full focus:bg-transparent'
      style={[
        styles.input,
        props?.inputStyle
      ]}

      placeholderTextColor={colors.neutral400}
      ref={props?.inputRef}
      {...props}
      ></TextInput>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container:{
        // display:'flex',
        alignItems:'center',
        flexDirection:"row",
        height:verticalScale(54),
        justifyContent:'center',
        borderWidth:1,
        borderColor: colors.neutral300,
        borderRadius: radius._17,
        borderCurve:'continuous',
        paddingHorizontal:spacingX._15,
        gap: spacingX._10

    },
    input:{
        flex:1,
        color: colors.white,
        fontSize: verticalScale(14),
        outline:'none',
        backgroundColor:'transparent'
        

    }
})