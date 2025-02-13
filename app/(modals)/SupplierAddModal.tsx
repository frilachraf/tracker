import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ModalWrapper from '@/components/ModalWrapper'
import Typo from '@/components/Typo'
import Input from '@/components/Input'
import { colors, spacingY } from '@/constants/theme'
import * as Icons from 'phosphor-react-native'
import { verticalScale } from '@/utils/styling'
import { useRouter } from 'expo-router'
import { addSupplier } from '@/utils/appwrite'
import Button from '@/components/Button'
import Header from '@/components/Header'

const SupplierAddModal = () => {
  const router = useRouter()
      const [isSubmiting,setIsSubmiting] = useState(false);
      
      
      
      const [form, setForm] = useState({
        fullName:'',
        phone:'',
        description:''
      })
      
      
      const handleSubmit = async () =>{
          // Alert.alert('Error','Please Fill in all fields')
          if(!form.fullName){
              Alert.alert('Error','Please Fill in all fields')
          }
          else{
              // Alert.alert('submited',`Hi ${form.username} we will send you verfication code in your email ${form.email}`)
              try{
                  
                  setIsSubmiting(true)
                  const result = await addSupplier(form)
                  console.log(result)
                  Alert.alert('Created',`Le fournisseur ${form.fullName} été ajouter avec succée`)
                  router.replace('/suppliers')
            
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
    <ModalWrapper>
      <View style={styles.form}>
            {/* <Typo size={16} color={colors.textLight}>Ajouter </Typo> */}
            <Header title="Ajouter une fournisseur"/>
            {/* input */}
            <Typo>Le nom de fournissuer</Typo>
            <Input
                onChangeText={(value)=>setForm({...form,fullName:value})}
                placeholder="Johne doe" 
                autoComplete='name'
                icon={<Icons.User size={verticalScale(26)} color={colors.neutral300} weight='fill' />}
            />
            <Typo>phone</Typo>
            <Input
                onChangeText={(value)=>setForm({...form,phone:value})}
                placeholder="0612345678" 
                keyboardType="numeric"
                autoComplete='cc-number'
                icon={<Icons.Phone size={verticalScale(26)} color={colors.neutral300} weight='fill' />}
            />
            <Typo>Description</Typo>
            <Input
                onChangeText={(value)=> setForm({...form,description:value})}
                placeholder="Ex: Clothes provider,..." 
                autoComplete='off'
                icon={<Icons.Quotes  size={verticalScale(26)} color={colors.neutral300} weight='fill' />}
            />
            {/* <Typo size={14} color={colors.text}>
                
            </Typo> */}
            <Button onPress={handleSubmit} loading={isSubmiting}>
                <Typo size={21} fontWeight={'700'} color={colors.black}>
                    Create account
                </Typo>
            </Button>
            {/* submit */}
            <View style={[styles.footer]}>
                
            </View>
        </View>
    </ModalWrapper>
  )
}

export default SupplierAddModal

const styles = StyleSheet.create({
  container:{},
  form:{
    flexDirection:'column',
    gap:20,
    // padding:10
},
footer:{

}
})