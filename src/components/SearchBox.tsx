import {View, Text, TextInput, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {black, greylight} from '../constants/colors';

interface ISearchBox {
  style?: ViewStyle;
}

export default function SearchBox({style}: ISearchBox) {
  return (
    <View style={[styles.flexRowCenter, styles.searchStyle, style]}>
      <Icon name="search" size={20} style={{marginRight: 10, color: black}} />
      <TextInput placeholder="Search store" placeholderTextColor="grey" style={{paddingVertical: 10, color: black}} />
    </View>
  );
}

const styles = StyleSheet.create({
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchStyle: {
    backgroundColor: greylight,
    marginHorizontal: 24,
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
});