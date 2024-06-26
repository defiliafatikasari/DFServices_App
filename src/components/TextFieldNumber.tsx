import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { ImgState } from "../constants/images";
import { black, border, grey, white } from "../constants/colors";

export default function TextFieldNumber() {
    return (
        <View>
            <Text style={{fontSize: 12, color: grey}}>Mobile Number</Text>
            <View style={styles.inputStyle}>
                <Image source={ImgState} style={{height: 23, width: 33, marginRight: 12}}/>
                <Text style={{color: black}}>+628</Text>
                <TextInput placeholder="0" style={{flex: 1, marginLeft: 5, color: black}} autoFocus={true} keyboardType={'number-pad'} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: border,
        borderBottomWidth: 1,
        paddingVertical: 12,
    },
});