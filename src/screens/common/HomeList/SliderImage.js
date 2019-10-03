
/* eslint-disable */
import React from 'react';
import {
  Dimensions, Image, StyleSheet, View, Text
} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';  

const { width, height } = Dimensions.get('window');

const SliderImage = ({ photos }) => {
  console.log(photos);
  return (
    <SwiperFlatList
      autoplay
      autoplayDelay={10}
      autoplayLoop
      showPagination
    >
      {
        photos.map((photo, index) => {
          return (
            <View style={styles.child} key={index} flex={1}>
              <Image
                source={ photo }
                style={{ height: '100%', width: '100%', flex: 1 }}
              />
            </View>
          )
        })
      }

    </SwiperFlatList>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  child: {
    flex: 1,
    height: height * 0.3,
    width,
    justifyContent: 'center'
  },
  text: {
    fontSize: width * 0.5,
    textAlign: 'center'
  }
});

export default SliderImage;
