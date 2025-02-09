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
import {signupAuth} from '../../utils/appwrite'
const register = () => {
    const router = useRouter()
    const [isSubmiting,setIsSubmiting] = useState(false);
    
    
    
    const [form, setForm] = useState({
      username:'',
      email:'',
      password:''
    })
    
    
    const handleSubmit = async () =>{
        // Alert.alert('Error','Please Fill in all fields')
        if(!form.username || !form.email || !form.password){
            Alert.alert('Error','Please Fill in all fields')
        }
        else{
            // Alert.alert('submited',`Hi ${form.username} we will send you verfication code in your email ${form.email}`)
            try{
                
                setIsSubmiting(true)
                const result = await signupAuth(form.email,form.password,form.username)
                console.log(result)
                Alert.alert('submited',`Hi ${form.username} we will send you verfication code in your email ${form.email}`)
                router.replace('/login')
          
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
            <Typo size={30} fontWeight={"800"}>Let's, </Typo>
            <Typo size={30} fontWeight={"800"}>Get Started</Typo>
        </View>
        
        <View style={styles.form}>
            <Typo size={16} color={colors.textLight}>Login now to track all you expenses</Typo>
            {/* input */}
            
            <Input
                onChangeText={(value)=>setForm({...form,username:value})}
                placeholder="Johne doe" 
                autoComplete='name'
                autoFocus
                icon={<Icons.User size={verticalScale(26)} color={colors.neutral300} weight='fill' />}
            />
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
                autoComplete='new-password'
                icon={<Icons.Lock size={verticalScale(26)} color={colors.neutral300} weight='fill' />}
            />
            <Typo size={14} color={colors.text}>
                Forgot password ?
            </Typo>
            <Button onPress={handleSubmit} loading={isSubmiting}>
                <Typo size={21} fontWeight={'700'} color={colors.black}>
                    Create account
                </Typo>
            </Button>
            {/* submit */}
            <View style={[styles.footer]}>
                
            </View>
        </View>
      
      <View className='text-center flex-row justify-center items-end gap-2'>
          <Typo>Already have an account </Typo>
      
        <Link href={'/login'} className='m-0 p-0'>
        <Typo color={colors.primary}>Login</Typo>
        </Link>
      </View>
    </ScreenWrapper>
  )
}

export default register

const styles = StyleSheet.create({
    form:{
        flexDirection:'column',
        gap:20,
        // padding:10
    },
    footer:{

    }
})