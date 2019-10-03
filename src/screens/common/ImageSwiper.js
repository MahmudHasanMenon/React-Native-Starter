/* eslint-disable */
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-swiper';
import { Image } from 'react-native-elements';

const ImageSwiper = ({ photos }) => (
  <Swiper
    autoplay
    autoplayTimeout={5}
  >
    {
      photos.map((photo, index) => {
        return (
          <View key={index} style={{ flex: 1 }}>
            <Image
              source={{ uri: photo }}
              style={{ width: '100%', height: '100%' }}
              PlaceholderContent={<ActivityIndicator />}
            />
        </View>
        )
      })


    }
  </Swiper>
);

export default ImageSwiper;
