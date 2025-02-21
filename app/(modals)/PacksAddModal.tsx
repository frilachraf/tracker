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
import {Picker} from '@react-native-picker/picker';

const PacksAddModal = () => {
  const router = useRouter()
      const [isSubmiting,setIsSubmiting] = useState(false);
      const [selectedLanguage, setSelectedLanguage] = useState();

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
            <Header title="Ajouter un pack"/>
            
                
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
            <Button onPress={handleSubmit} loading={isSubmiting}>
                <Typo size={21} fontWeight={'700'} color={colors.black}>
                    Add pack
                </Typo>
            </Button>
            {/* submit */}
            <View style={[styles.footer]}>
                
            </View>
        </View>
    </ModalWrapper>
  )
}

export default PacksAddModal

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