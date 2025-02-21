import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import Typo from './Typo';
import { colors } from '@/constants/theme';
import { verticalScale } from '@/utils/styling';
import * as Icons from 'phosphor-react-native'

const SupplierItem = ({name="Johne Doe",phone='0612345678',id, index=0}:{name?:string; phone?: string; id?:string,index?:number}) => {
    const isPressed = index == 2 ? true: false
    const [hovered,setHovered] = useState(false)
    return (
    <Animated.View onPointerEnter={()=>setHovered(true)} onPointerLeave={()=>setHovered(false)}
        
        entering={FadeIn.duration(300).delay(index*50)} 
        exiting={FadeIn.duration(300)}
        style={[styles.container, {backgroundColor: hovered ? colors?.neutral800 : ''} ]}
        className={'group'}
        >
      <View style={{flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap:10}}>
            <View style={styles.avatar} >
                <Typo>{name.slice(0,2)}</Typo>
            </View>
            <View >    
                <Typo size={20}>{name}</Typo>
                <Typo color={colors.neutral500}>{phone}</Typo>
            </View>
      </View>
      <View style={{flexDirection:'row',gap:10}}>
        {hovered && <>
            <TouchableOpacity className='group-focus:inline hidden'>
                <Icons.Plus size={22} color={colors?.neutral400}/>
            </TouchableOpacity> 
            <TouchableOpacity className='group-focus:inline hidden'>
                <Icons.CaretRight size={22} color={colors?.neutral400}/>
            </TouchableOpacity>
        </>}
      </View>
    </Animated.View>
  )
}

export default SupplierItem

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        // backgroundColor:colors.neutral800,
        borderRadius:5,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap:10,
        
    },
    avatar:{
        color:colors?.white,
        backgroundColor:colors?.neutral600,
        width:verticalScale(40),
        height:verticalScale(40),
        borderRadius:100 ,
        padding:3,
        justifyContent:'center',
        alignItems:'center',
        fontSize:verticalScale(20)

    }
})