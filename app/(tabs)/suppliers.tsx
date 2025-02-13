import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import * as Icons from 'phosphor-react-native'
import { colors } from '@/constants/theme'
import { useRouter } from 'expo-router'
import { searchSupplier } from '@/utils/appwrite'
import { Query } from 'react-native-appwrite'
import Input from '@/components/Input'
import { verticalScale } from '@/utils/styling'
import SupplierItem from '@/components/SupplierItem'
import Typo from '@/components/Typo'

const suppliers = () => {
  const router = useRouter()
  const [filter,setFilter] = useState({
    query: ''
  })
  const [data,setData] = useState<any >();
  
  const addOption = {
    title: 'Ajouter Fournisseur',
    icon: <Icons.PlusCircle  size={45} color={colors.primary} weight="fill"/>,
    routeName : '/(modals)/SupplierAddModal'
  }
  
  const handleAddButton =(e:any)=>{
    router.push(e.routeName)
  }

  const fetchSupplier = async ()=>{
    const filteredSuppliers = await searchSupplier([
      Query.contains("fullName", filter.query)
    ]);
    setData(filteredSuppliers)

  } 
  useEffect(()=>{
    fetchSupplier()
  },[filter.query])
  return (
    <ScreenWrapper>
        <View className='relative h-full'>
          {/* <Typo>F</Typo> */}
          <Input
                onChangeText={(value)=> setFilter({...filter,query:value})}
                placeholder="Search..." 
                containerStyle={{backgroundColor:colors.neutral800,borderColor:'transparent'}}
                icon={<Icons.MagnifyingGlass size={verticalScale(26)} color={colors.neutral300} />}
            />


          <View className='h-full '>
            <ScrollView style={{marginTop:20,marginBottom:50,height:'auto'}}>
              {/* <FlatList 
                data={data}
                renderItem={(item)=>(<SupplierItem supplier={item} />)}
            
              /> */}
              <View className='gap-2'>
                {data && data.map((item:any,index:number)=>(
                  <>
                  <SupplierItem index={index} name={item?.fullName} id={item?.$id}/>
                  </>
                ))}
              </View>
            </ScrollView>
          </View>

          <View style={styles.addButton}>
              <TouchableOpacity onPress={() => handleAddButton(addOption)} >
                <Text>{addOption.icon}</Text>
              </TouchableOpacity>          
          </View>
        </View>  
    </ScreenWrapper>
  )
}

export default suppliers
const styles = StyleSheet.create({
  addButton: {
    position:'absolute',
    bottom: 0,
    right:0,
    // backgroundColor:colors.primary,
    borderRadius:100
  }
})
