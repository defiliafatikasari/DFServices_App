import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { blue, dark2blue, darkblue, white } from "../constants/colors";
import { ImgLogo, ImgOnboarding } from "../constants/images";
import Button from "../components/Button";
import SignIn from "./Signin";
import { useNavigation } from '@react-navigation/native'; 

export default function OnBoardingScreen() {
    const navigation = useNavigation(); 

    return (
    <View style={{flex:1}}>
        <ImageBackground source={ImgOnboarding} style={{flex: 1, justifyContent:'flex-end', alignItems: 'center'}}>
            <Image source={ImgLogo} style={{height: 56, resizeMode: 'contain', marginBottom: 35}}/>
            <Text style={styles.txtStyle}>Selamat Datang</Text>
            <Text style={styles.txtStyle}>Di Toko Jasa DF Services</Text>
            <Text style={{color: dark2blue, fontSize: 16, marginTop: 19, marginBottom: 40}}>Jasa Online Untuk Mempermudah Pekerjaan Anda</Text>

            <Button OnPress={() => navigation.navigate('SignIn' as never)} label={"Get Started"} btnStyle={{backgroundColor: blue, width: '80%', marginBottom: 40}}/>
        </ImageBackground>
    </View>
    );
}

const styles = StyleSheet.create({
    txtStyle: {fontSize: 28, fontWeight: '600', color: darkblue}
});