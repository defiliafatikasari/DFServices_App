import React from "react";
import { Text, TextInput, TextInputProps, View, ViewStyle } from "react-native";
import { black, border } from "../constants/colors";

type ITextField = TextInputProps & {
    label:String, 
    containerStyle?:ViewStyle,
    style?:ViewStyle
}

export default function TextField(props:ITextField) {
    return (
        <View style={props.containerStyle}>
            <Text style={{color: black}}>{props.label}</Text>
            <TextInput {...props} style={[{borderBottomColor: border, borderBottomWidth: 1}, props.style]}/>
        </View>
    )
}