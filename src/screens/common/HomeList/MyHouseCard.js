
import React, { useState } from 'react';
import {
  Image, View, TouchableOpacity
} from 'react-native';
import {
  Card, CardItem, Text
} from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { observer, inject } from 'mobx-react';
import styles from './styles/MyHouse';
import colors from '../../../styles/colors';

import Loader from '../../../components/Loader';

const defaultImage = require('../../../img/rentu/app-icon.png');

const MyHouseCard = (props) => {
  const state = MyHouseCardHooks(props);
  const { property, onPress } = props;

  return (
    <TouchableOpacity style={styles.bottomSection} onPress={onPress}>

      <Card style={styles.cardContainer}>
        <View>

          <Image
            source={property.photos.length === 0 ? defaultImage : { uri: property.photos[0] }}
            resizeMode={property.photos.length === 0 ? 'contain' : 'stretch'}
            style={{
              height: 150, width: '100%', flex: 1, borderTopLeftRadius: 8, borderTopRightRadius: 8
            }}
          />

        </View>

        <CardItem>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: '60%' }}>
              <Text style={styles.cardLocation}>
                {
                  `${property.homeAddress.charAt(0).toUpperCase()
                  + property.homeAddress.slice(1)}, ${property.area}, ${property.city}`
          }

              </Text>
            </View>

            <View style={{ marginLeft: 20 }}>
              <Text style={styles.cardPrice}>
                <MaterialCommunityIcons
                  name="currency-bdt"
                  size={20}
                  color={colors.gray08}
                />
                {property.price}

              </Text>
            </View>


          </View>
        </CardItem>

        <View style={styles.cardFooter}>

          <View style={styles.footerCol1}>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <FontAwesomeIcon
                name="bed"
                size={15}
                color={colors.gray08}
              />
              <Text style={styles.cardBed}>{property.bedRooms}</Text>

            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <FontAwesomeIcon
                name="bath"
                size={15}
                color={colors.gray08}
              />
              <Text style={styles.cardBath}>{property.bathRooms}</Text>

            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesomeIcon
                name="arrows"
                size={15}
                color={colors.gray08}
              />
              <Text style={styles.cardSqft}>
                {property.size.value}
                {' '}
                {property.size.unit}
              </Text>

            </View>

          </View>

        </View>

      </Card>
      <Loader
        modalVisible={state.spinner}
        animationType="fade"
      />
    </TouchableOpacity>
  );
};

const MyHouseCardHooks = () => {
  const [slideImage, setSlideImage] = useState(false);
  const [spinner, setSpinner] = useState(false);


  const slidePhoto = () => {
    setSlideImage(!slideImage);
  };

  const removeFrom = () => {
    setSlideImage(!slideImage);
  };

  const showBodyDetails = (data) => {
    if (data.length > 60 && slideImage === false) {
      return `${data.slice(0, 60)}...`;
    }
    return data;
  };

  return {
    slidePhoto, removeFrom, showBodyDetails, spinner, setSpinner, slideImage, setSlideImage
  };
};


export default inject('store')(observer(MyHouseCard));
