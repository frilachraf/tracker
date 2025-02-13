import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ScreenWrapper from '../components/ScreenWrapper'
import Typo from '../components/Typo'
import { Image } from 'react-native-web'
import Button from '../components/Button'
import { colors } from '../constants/theme'
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated'
import { Link, useRouter } from 'expo-router'

function welcome() {
    const router  = useRouter();
    const getStarted = () =>{
        // router.push('/(auth)/register')
        router.push('/(tabs)/suppliers')
    }
    return (
    <ScreenWrapper>
        <View className="flex flex-col justify-between h-full">
            {/* login  */}
            <View className='text-end'>
                 <Link href={'/(auth)/login'} className='w-fit ms-auto'>
                    <Typo size={17} fontWeight={"500"} style={{textAlign:"right"}}>Sign in</Typo>
                    </Link>
                    {/* <Text className="text-teal-400 text-4xl font-bold">Tailwind</Text> */}
                {/* <Typo>Sign in</Typo> */}
            </View> 
            <View>
                <Animated.Image 
                    entering={FadeIn.duration(2000)}
                    source={require('../assets/images/welcome.png')}
                    style={{width:"100%"}}
                    // source={{uri:'../assets/images/welcome.png'}}
                />
            </View>
            {/* Footer */}
            <View className="">
                <Animated.View 
                    entering={FadeInDown.duration(1000).springify().damping(12)}
                    className="flex flex-col items-center justify-center">
                    <Typo size={30} >Always take control</Typo>
                    <Typo size={30} >of your finance</Typo>
                </Animated.View >
                <Animated.View 
                entering={FadeInDown.duration(1000).delay(100).springify().damping(12)}
                className="flex flex-col items-center justify-center p-4">
                    <Typo color={colors.neutral500}
                    >Explore our wolrd</Typo>
                </Animated.View>

                {/* Button */}
                <Animated.View
                entering={FadeInDown.duration(1000).delay(100).springify().damping(12)}
                >
                <Button
                    onPress={getStarted}
                >

                    <Typo size={22} color={colors.neutral900} fontWeight="600">
                        Get started
                    </Typo>
                </Button>
                </Animated.View>
            </View>
        </View>
    </ScreenWrapper>
  )
}

export default welcome
const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:"space-between",
    }  
})
