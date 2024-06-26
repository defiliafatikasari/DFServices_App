import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { black, blue, white } from "../constants/colors";
import BgBlur from "../constants/BgBlur";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImgLogo } from "../constants/images";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { useNavigation } from '@react-navigation/native'; 

export default function LogIn() {
    const navigation = useNavigation(); 

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: white}}>
            <BgBlur/>
            <Image source={ImgLogo} style={{height: 55, resizeMode: 'contain', alignSelf: 'center', marginTop: 10}}/>
            <View style={{paddingHorizontal: 24, marginTop: 30}}>
                <Text style={{color: black, fontSize: 26, fontWeight: '600', marginBottom: 10}}>LogIn with Email</Text>
                <Text style={{color: black}}>Masukkan Email dan Password Anda</Text>
                <View style={{height: 40}} />
                <TextField label={'Email'} containerStyle={{marginBottom: 20}} style={{paddingVertical: 10}} placeholder={'Masukkan Email'}/>
                <TextField label={'Password'} containerStyle={{marginBottom: 60}} style={{paddingVertical: 10}} secureTextEntry={true} placeholder={'Masukkan Password'}/>
                <Text style={{color: black, textAlign: 'right', marginTop:20, marginBottom: 60}}>Lupa Password</Text>
                <Button label={'Log In'} btnStyle={{backgroundColor: blue}}/>
                <View style={{marginTop: 25, alignItems: 'center', justifyContent: 'center',flexDirection: 'row'}}>
                    <Text style={{color: black}}>Belum Punya Akun?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp' as never)}>
                        <Text style={{color: blue, marginLeft: 5}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}