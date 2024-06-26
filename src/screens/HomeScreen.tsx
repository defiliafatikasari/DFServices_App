import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListProduct from '../components/ListProduct';
import Swipper from '../components/Swipper';
import {black, white} from '../constants/colors';
import {ImgLogo} from '../constants/images';
import SearchBox from '../components/SearchBox';

export default function HomeScreen(props: any) {
  return (
    <SafeAreaView style={{backgroundColor: white, flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            source={ImgLogo}
            style={{height: 50, resizeMode: 'contain', alignSelf: 'center'}}
          />
          <View style={[styles.flexRowCenter, styles.locationStyle]}>
            <Icon name="location-on" size={20} style={{marginRight: 5, color: black}} />
            <Text style={{color: black}}>Defilia Fatikasari</Text>
          </View>
        </View>
        <SearchBox />

        <Swipper />

        <ListProduct title={'Jasa Print'} {...props}/>
        <ListProduct title={'Jasa Joki'} {...props}/>
        <View style={{height: 20}} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationStyle: {
    marginTop: 10,
    justifyContent: 'center',
  },
});