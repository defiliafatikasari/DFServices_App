import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { blue } from "../constants/colors";

interface MyTabBarProps {
  state: any; 
  descriptors: any;
  navigation: any;
}

export default function MyTabBar({ state, descriptors, navigation }: MyTabBarProps) {
    return (
      <View style={{ flexDirection: 'row', paddingHorizontal: 24, paddingVertical: 20, paddingBottom: 33}}>
        {state.routes.map((route: any, index: any) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems: 'center' }}>
              <options.tabBarIcon />
              <Text style={{ color: isFocused ? blue : '#222'}}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );  
}