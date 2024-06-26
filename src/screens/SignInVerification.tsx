import React, { useState, useRef, useLayoutEffect } from "react";
import { View, SafeAreaView, Image, TouchableOpacity, Text, TextInput, StyleSheet } from "react-native";
import { black, blue, border, grey, white } from "../constants/colors";
import { ImgBgLogin } from "../constants/images";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function SignInVerification() {
    const [code, setCode] = useState<Array<any>>(['', '', '', '']);
    const inputRef = useRef<TextInput[] | null[]>([]);
    const onChangeText = (val:String) => {
        let newCode = [...code];
        for(let i = 0; i < code.length; i++){
            if(newCode[i] === '') {
                newCode[i] = val;
                inputRef.current[i + 1]?.focus();
                break;
            } else {
                continue;
            }
        }
        setCode(newCode);
    };
    const onDeleteText = () => {
        let newCode = [...code];
        for(let i = newCode.length -1; i >= 0; i--){
            if(newCode[i] !== '') {
                newCode[i] = '';
                inputRef.current[i]?.focus();
                break;
            } else {
                continue;
            }
        }
        setCode(newCode);
    };
    useLayoutEffect(() => {
        inputRef.current[0]?.focus();
    },[])
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: white}}>
            <View style={{position: 'absolute', top: -150, left: 0, right: 0}}>
                <Image source={ImgBgLogin} style={{height: 374, resizeMode: 'cover', width: '100%'}} blurRadius={10}/>
            </View>
            <View style={{paddingHorizontal: 24}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="chevron-left" size={30} color={black}/>
                </TouchableOpacity>
                <View style={{height: 61}}/>
                <Text style={{fontSize:20, fontWeight: '600', color: black}}>Enter your 4-digit code</Text>
                <View style={{height: 25}}/>
                <Text style={{fontSize: 12, color: grey}}>Code</Text>
                <View style={styles.code}>
                    {code.map((val, index) => {
                        return (
                        <TextInput key={index} ref={r => {inputRef.current[index] = r;}} placeholder="-" value={val} onChangeText={onChangeText} onKeyPress={({nativeEvent}) => { if (nativeEvent.key === 'Backspace'){ onDeleteText(); }}} placeholderTextColor={white} />
                        );
                    })}
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={{fontSize: 18, color: blue}}>Resend Code</Text>
                <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('HomeScreen' as never)}>
                    <Icon name="chevron-right" size={30} color={white}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    code:{
        flexDirection: 'row', 
        borderBottomColor: border, 
        borderBottomWidth: 1, 
        paddingVertical: 10,
    },
    footer:{
        position: 'absolute',
        left: 0,
        bottom: 30,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    btnStyle:{
        backgroundColor: blue,
        width: 67,
        height: 67,
        borderRadius: 67,
        alignItems: 'center',
        justifyContent: 'center',
    },
});