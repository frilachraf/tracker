import { colors, radius } from '@/constants/theme';
import { ScreenWrapperProps } from '@/types'
import { account, getCurrentUser, logoutUser } from '@/utils/appwrite';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react'
import { Dimensions, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Models } from 'react-native-appwrite';
import Animated, { FadeIn, FadeInLeft, FadeInRight } from 'react-native-reanimated'
const {height} = Dimensions.get('window');
function ScreenWrapper({style,children}: ScreenWrapperProps) {
    let paddingTop  = Platform.OS == 'ios' ? height * 0.06 : 50
    const [user, setUser] = useState<Models.User<{}> | null>(null);
    const router  = useRouter()
    useEffect(() => {
        async function fetchUser() {
          const userData = await getCurrentUser();
          // setUser(userData);
          // if(!userData){
          //   router.push('/login')
          // }
        }
        fetchUser();
      }, [user]);
    return (
    <View style={[style,{
        paddingTop,
        flex:1,
        backgroundColor: colors.neutral900,
        padding:20
    }]}>
        <StatusBar />
        {/* <Text></Text> */}
        {/* <TouchableOpacity onPress={()=> logoutUser()}>
          <Animated.View 
              entering={FadeInLeft.duration(500)}
              exiting={FadeInRight.duration(500)}
              className='top-2 rounded-2xl p-4 w-fit right-2' style={{backgroundColor:colors.neutral800,position:'fixed', borderRadius:radius._15, padding:10, left:10,top:10,cursor:'pointer'}}>
              <Text style={{color:colors.textLight}}>
                  {user?.name}
              </Text>
          </Animated.View>
        </TouchableOpacity> */}
        {children}
    </View>
  )
}

export default ScreenWrapper
const styles = StyleSheet.create({})