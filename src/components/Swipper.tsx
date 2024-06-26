import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  View,
  Dimensions,
  NativeScrollEvent,
  StyleSheet,
} from 'react-native';
import {blue, grey} from '../constants/colors';
import {Swipper1, Swipper2, Swipper3, Swipper4, Swipper5, Swipper6} from '../constants/images';

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

export default function Swipper() {
  const pages = [Swipper1, Swipper2, Swipper3, Swipper4, Swipper5, Swipper6];
  const [currentPage, setCurrentPage] = useState(0);

  const onScroll = (nativeEvent: NativeScrollEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );

      if (slide !== currentPage) {
        setCurrentPage(slide);
      }
    }
  };

  return (
    <View style={{height: 115, position: 'relative', width: '100%'}}>
      <ScrollView
        scrollEventThrottle={16}
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={({nativeEvent}) => onScroll(nativeEvent)}>
        {pages.map((val, index) => (
          <View
            key={index}
            style={{
              width: SCREEN_WIDTH,
              paddingHorizontal: 24,
              height: 115,
            }}>
            <Image
              source={val}
              style={{height: 115, width: '100%', borderRadius: 10}}
            />
          </View>
        ))}
      </ScrollView>
      <View style={styles.dotContainer}>
        {pages.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dotStyle,
              currentPage === index && {backgroundColor: blue, width: 20},
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dotContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  dotStyle: {
    width: 8,
    height: 8,
    backgroundColor: grey,
    borderRadius: 8,
    marginHorizontal: 1,
  },
});