import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { black, blue, border, dark2blue, grey, white } from "../constants/colors";
import { ImgBgLogin, ImgState } from "../constants/images";
import Button from "../components/Button";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'; 
import BgBlur from "../constants/BgBlur";

export default function SignIn() {
    const navigation = useNavigation(); 

    return (
        <View style={{flex: 1, backgroundColor: white}}>
            <BgBlur />
            <View style={{paddingHorizontal: 24, flex: 1, justifyContent: 'flex-end', paddingBottom: 60}}>
                <Text style={[{ color: black}, styles.textStyle]}>Serahkan Pekerjaan Anda</Text>
                <Text style={[{ color: black}, styles.textStyle]}>Ke Jasa DF Services</Text>
                <TouchableOpacity style={styles.actionStyle} onPress={() => navigation.navigate('SignInWithNumber' as never)}>
                    <Image source={ImgState} style={{height: 23, width: 33, marginRight: 12}}/>
                    <Text style={{color: black}}>+628</Text>
                </TouchableOpacity>
                <View style={{height: 20}}/>
                <Text style={{color: grey, fontSize: 14, textAlign: 'center', paddingVertical: 37}}>Or Connect with E-mail</Text>
                <Button label={'Continue With Email'} btnStyle={{backgroundColor: blue}} OnPress={() => navigation.navigate('LogIn' as never)} icon={<Icon name='email' size={20} color={white} style={{marginRight: 10}}/>}/>
                {/* <Button label={'Continue With Facebook'} btnStyle={{backgroundColor: dark2blue}} icon={<Icon name='facebook' size={20} color={white} style={{marginRight: 10}}/>}/> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle:{
        fontWeight: '600',
        fontSize: 26,
    },

    actionStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: border,
        borderBottomWidth:1,
        paddingVertical: 12,
        marginTop: 8,
    },
});