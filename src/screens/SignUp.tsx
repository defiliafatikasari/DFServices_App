import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BgBlur from "../constants/BgBlur";
import { black, blue, dark2blue, darkblue, white } from "../constants/colors";
import { ImgBgLogin, ImgLogo } from "../constants/images";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
    const navigation = useNavigation(); 

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: white}}>
            <Image source={ImgBgLogin} style={{height: 490, resizeMode: 'cover', width: '100%', position: 'absolute', top: -20, left: 0, right: 0}} blurRadius={10}/>
            <Image source={ImgLogo} style={{height: 55, resizeMode: 'contain', alignSelf: 'center', marginTop: 10}}/>
            <View style={{paddingHorizontal: 24, marginTop: 30}}>
                <Text style={{color: black, fontSize: 26, fontWeight: '600', marginBottom: 10}}>Sign Up</Text>
                <Text style={{color: black}}>Masukkan Kredensial Anda untuk Melanjutkan</Text>
                <View style={{height: 40}} />
                <TextField label={'Username'} containerStyle={{marginBottom: 20}} style={{paddingVertical: 10}} placeholder={'Masukkan Username'}/>
                <TextField label={'Email'} containerStyle={{marginBottom: 20}} style={{paddingVertical: 10}} placeholder={'Masukkan Email'}/>
                <TextField label={'Password'} containerStyle={{marginBottom: 30}} style={{paddingVertical: 10}} secureTextEntry={true} placeholder={'Masukkan Password'}/>
                <Text style={{color: black, marginTop:20, marginBottom: 60}}>Dengan Melanjutkan, Anda Menyetujui <Text style={{color: blue}}>Ketentuan Layanan</Text>{'\n'}dan <Text style={{color: blue}}>Kebijakan Privasi Kami.</Text></Text>
                <Button label={'Sign Up'} btnStyle={{backgroundColor: blue}}/>
                <View style={{marginTop: 25, alignItems: 'center', justifyContent: 'center',flexDirection: 'row'}}>
                    <Text style={{color: black}}>Sudah Punya Akun?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LogIn' as never)}>
                        <Text style={{color: blue, marginLeft: 5}}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}