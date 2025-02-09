import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Client, Account, ID, Models, Avatars, Databases, Query } from 'react-native-appwrite';
import React, { useState } from 'react';

export const appwriteConfig = {
    endpoint:'https://cloud.appwrite.io/v1',
    platform:'com.frildev.profitflow',
    projectId:'6792c9fe0013b19f0afd',
    databaseId:'6792cc5e0036392ac6cd',
    userCollectionId: '6792cc7c003c36c79566',
    supplierCollectionId:'6792ce34001234aa0883',
    storageId:'6792cfa4001bbada324c'
}




const client = new Client();
client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)   
  .setPlatform(appwriteConfig.platform);  

 export const account = new Account(client);
 const avatars = new Avatars(client);
 const databases = new Databases(client)
  export default function App() {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
  
    return (
      <></>
    );
  }
  


  export async function loginAuth(email, password) {
    try{
      await account.createEmailPasswordSession(email, password);
      // setLoggedInUser(await account.get());
    }
    catch (error) {
      throw new Error(error)
    }
  }

  export async function signupAuth(email, password, name) {
    try{
      const newAccount = await account.create(ID.unique(), email, password, name);
      // setLoggedInUser(await account.get());
      if(!newAccount) throw Error
      const avatarUrl = avatars.getInitials(name)
      await login(email, password);
      const newUser = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        ID.unique(),
        {
          accountId: newAccount.$id,
          email,
          username:name,
          avatar: avatarUrl,
        }

      )
    }
    catch (error) {
      throw new Error(error)
    }
  }

  export async function getCurrentUser() {
    try{
      const currentAccount = await account.get();
      // if(!currentAccount) throw Error;
      // const currentUser = await databases.listDocuments(
      //   appwriteConfig.databaseId,
      //   appwriteConfig.userCollectionId,
      //   [Query.equal('accountId',currentAccount.$id)]
      // )
      // if(!currentUser) throw Error;
      // // console.log('user from the context',currentUser.documents[0])
      // return currentUser.documents[0]
      return currentAccount
    }
    catch(error){
      console.log(error)
    }
  }

  export const getAllSuppliers = async () => {
    try{
      const suppliers  = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.supplierCollectionId
      )
      console.log(suppliers.documents)
      return suppliers.documents
    }
    catch(error){
      throw new Error
    }
  }
  export const searchSupplier = async () => {
    try{
      const suppliers  = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.supplierCollectionId
      )
      return suppliers.documents
    }
    catch(error){
      throw new Error
    }
  }
  
 export  async function logoutUser() {
    try {
      await account.deleteSession('current');
      console.log('User logged out successfully');
      return true;
    } catch (error) {
      console.error('Logout error:', error);
      return false;
    }
  }