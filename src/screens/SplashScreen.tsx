import React, { useLayoutEffect } from "react";
import { Image, View } from 'react-native';
import { blue } from "../constants/colors";
import { ImgLogo } from "../constants/images";
import { useNavigation } from '@react-navigation/native'; 

export default function SplashScreen() {
    const navigation = useNavigation(); 

    useLayoutEffect(() => {
        setTimeout(() => {
            navigation.navigate('OnBoarding'  as never);
        }, 500);
    }, [navigation]);

    return (
    <View style={{flex:1, backgroundColor:blue, alignItems:'center', justifyContent:'center',}}>
        <Image source={ImgLogo} style={{height:68, resizeMode:'contain'}}/>
    </View>
    )
}