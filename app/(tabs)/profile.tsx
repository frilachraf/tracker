import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import { getCurrentUser, logoutUser } from '@/utils/appwrite';
import Typo from '@/components/Typo';
import Header from '@/components/Header';
import { PersonSimpleCircle } from 'phosphor-react-native';
import BackButton from '@/components/BackButton';
// import { spacingX } from '@/constants/theme';
import { colors, spacingY,spacingX } from '@/constants/theme'
import Loading from '@/components/Loading';
import Button from '@/components/Button';
import { router } from 'expo-router';

type AppwriteUser = {
  $id: string;
  name: string;
  email: string;
  labels: any;
};
const Profile = () => {
  const [user, setUser] = useState<AppwriteUser | null>(null);

  const handleLogout = ()=>{
    logoutUser()
    router.push('/login')
  }
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getCurrentUser();
        if (userData) {
          setUser(userData);
          console.log('profile',userData)
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []); // Empty dependency array to run once on mount

  return (
    <ScreenWrapper>
        <Header title="Profile" leftIcon={<BackButton />} />
        <View style={styles.container}>
          {user ? (
          <View className="my-8">
            <View className='flex gap-4 items-center'>
              <Image 
                  source={require('../../assets/images/profile.jpg')} 
                  style={{ width: 100, height: 100, borderRadius: 100}} 
                />
              <View>
                <Typo size={30}>Hey <View style={{}}>{user.name}</View></Typo>
                <Typo color={colors.neutral500}>{user.email}</Typo>
              </View>
            </View>
            <View className='flex gap-4 flex-row flex-wrap my-4'>
              
            </View>

          </View>
        ) : (
          <Loading />
        )}
        <Button onPress={handleLogout}>
          <Typo color={colors?.black} fontWeight={'bold'}>Logout</Typo>
        </Button>
      </View>
    </ScreenWrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',
    paddingHorizontal: spacingX._20,
  },
});
