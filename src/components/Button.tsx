import React from "react";
import { Text, TouchableOpacity, ViewStyle } from "react-native";
import { white } from "../constants/colors";

type IButton = {
    label:String;
    OnPress?:() => void;
    btnStyle?: ViewStyle;
    icon?:any
}

export default function Button(props:IButton) {
    return (
        <TouchableOpacity style={[{paddingVertical: 24, borderRadius: 19, flexDirection: 'row', justifyContent: 'center'}, props?.btnStyle]} onPress={props?.OnPress}>
            {props.icon}
            <Text style={{textAlign: 'center', color: white}}>
                {props?.label}
            </Text>
        </TouchableOpacity>
    )
}