import { colors } from '@/constants/theme'
import { useRouter } from 'expo-router'
import React, { useEffect } from 'react'
import { Text } from 'react-native';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

function index() {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/welcome')
        },1000) 
    },[])
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>{router.push('/welcome')}}>
        <Image 
            style={styles.logo}
            resizeMode='contain'
            source={require('../assets/images/splashImage.png')}
        />
        </TouchableOpacity>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.neutral900

    },
    logo: {
        height : '20%',
        aspectRatio: 1
    }
})