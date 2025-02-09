import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import BackButton from '@/components/BackButton'
import { colors, spacingY } from '@/constants/theme'
import Input from '@/components/Input'
import * as Icons from 'phosphor-react-native'
import { verticalScale } from '@/utils/styling'
import Button from '@/components/Button'
import { Link, useRouter } from 'expo-router'
import { getCurrentUser, loginAuth } from '@/utils/appwrite'
const login = () => {
    const [isSubmiting,setIsSubmiting] = useState(false);

    
    const [form, setForm] = useState({
        email:'',
        password:''
    })
    const router = useRouter()
    const handleSubmit = async () =>{
            // Alert.alert('Error','Please Fill in all fields')
            if(!form.email || !form.password){
                Alert.alert('Error','Please Fill in all fields')
            }
            else{
                // Alert.alert('submited',`Hi ${form.username} we will send you verfication code in your email ${form.email}`)
                try{
                    
                    setIsSubmiting(true)
                    const result = await loginAuth(form.email,form.password)
                    console.log(result)
                    Alert.alert('submited',`Hi ${form.email} we will send you verfication code in your email ${form.email}`)
                    router.replace('/welcome')
              
                  }
                  catch (error){
                    console.log(error)
                    Alert.alert('error :',"Can't Sign up")
                  }
                  finally{
                    setIsSubmiting(false)
                  }
              
            }
          
        }
  return (
    <ScreenWrapper>
        <View>
            <BackButton iconSize={28} />
        </View>
        <View style={{gap:5,marginTop:spacingY._20}}>
            <Typo size={30} fontWeight={"800"}>Hey, </Typo>
            <Typo size={30} fontWeight={"800"}>Welcome</Typo>
        </View>
        
        <View style={styles.form}>
            <Typo size={16} color={colors.textLight}>Login now to track all you expenses</Typo>
            {/* input */}
            <Input
                onChangeText={(value)=>setForm({...form,email:value})}
                placeholder="Enter your email" 
                 autoComplete='email'
                icon={<Icons.At size={verticalScale(26)} color={colors.neutral300} weight='fill' />}
            />
            <Input
                secureTextEntry
                onChangeText={(value)=> setForm({...form,password:value})}
                placeholder="Your password" 
                autoComplete='password'
                icon={<Icons.Lock size={verticalScale(26)} color={colors.neutral300} weight='fill' />}
            />
            <Typo size={14} color={colors.text}>
                Forgot password ?
            </Typo>
            <Button onPress={handleSubmit} loading={isSubmiting}>
                <Typo size={21} fontWeight={'700'} color={colors.black}>
                    Login
                </Typo>
            </Button>
            {/* submit */}
            <View style={[styles.footer]}>
                
            </View>
        </View>
      
      <View className='text-center flex-row justify-center items-end gap-2'>
          <Typo>Don't have an account </Typo>
      
        <Link href={'/register'} className='m-0 p-0'>
        <Typo color={colors.primary}>Sign up</Typo>
        </Link>
      </View>
    </ScreenWrapper>
  )
}

export default login

const styles = StyleSheet.create({
    form:{
        flexDirection:'column',
        gap:20,
        // padding:10
    },
    footer:{

    }
})