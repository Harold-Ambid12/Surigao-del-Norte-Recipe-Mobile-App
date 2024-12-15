import { View, Text, StatusBar, Image } from 'react-native';
import React, { useEffect } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';




export default function WelcomeScreen() {


    const navigation = useNavigation();

    useEffect(()=>{
        setTimeout(()=> navigation.navigate('Home'),3500 )

    },[])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFA500' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar barStyle="light-content" backgroundColor="black" />

        {/* Outer gray ring */}
        <View
          style={{
            backgroundColor: '#FFDAB9', // Outer ring color
            borderRadius: 250, // Makes it round
            padding: hp(22), // Outer padding to create the gray ring effect
            position: 'absolute', // Position it absolutely
          }}
        />

        {/* Inner white ring */}
        <View
          style={{
            backgroundColor: '#FAFAFA', 
            borderRadius: 200, // Makes it round
            padding: hp(18), // Padding to create the white ring effect
            position: 'absolute', // Position it absolutely
          }}
        />

        {/* Logo image */}
        <Image
          source={require('../assets/welcome.png')}
          style={{ width: hp(28), height: hp(28) }}
        />

 

    </View>
           {/*title and punchline*/}
           <View style={{ alignItems: 'center',marginTop: 60 }}>
        <Text style={{ fontSize: hp(5), fontWeight: 'bold', color: '#000000' }}
        >Recipes</Text>
         <Text style={{ fontSize: hp(1.8), fontWeight: 'bold', color: '#000000' }}
        >You can recreate Suriago del Norte's famous delicacies</Text>
        </View>
    </View>

  );
}
