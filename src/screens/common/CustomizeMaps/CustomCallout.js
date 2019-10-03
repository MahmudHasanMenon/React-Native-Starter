import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Icon } from '../../../utils/setFonttelloIcon';

import colors from '../../../styles/colors';

const CustomCallout = (props) => {
  const { property } = props;

  return (
    <View style={styles.contentSection}>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, color: colors.activeColor }}>
            {property.price}
            {' '}
                BDT
          </Text>
          <View style={{ backgroundColor: colors.gray08, borderRadius: 4 }}>
            <Text
              style={{
                color: colors.white, paddingHorizontal: 8, paddingVertical: 4, fontSize: 10, fontWeight: 'bold'
              }}
            >
              {property.propertyType.toUpperCase()}
            </Text>
          </View>
        </View>

        <View style={{
          flex: 1, flexDirection: 'row', alignItems: 'center'
        }}
        >
          <FeatherIcon
            name="map-pin"
            size={15}
            color={colors.gray08}
          />
          <Text
            numberOfLines={2}
            style={{ fontSize: 14, color: colors.gray09, marginLeft: 5 }}
          >
            {property.homeAddress}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: 'column', marginTop: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <FontAwesomeIcon
              name="bed"
              size={15}
              color={colors.gray08}
            />
            <Text style={{
              fontSize: 14, color: colors.gray09, top: 0, paddingHorizontal: 5
            }}
            >
              {property.bedRooms}

            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Icon
              name="th-large"
              size={12}
              color={colors.gray08}
            />
            <Text style={{
              fontSize: 14, color: colors.gray09, top: -2, paddingHorizontal: 5
            }}
            >
              {property.size.value}
              {' '}
              {property.size.unit}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', paddingBottom: 0 }}>
          <FontAwesomeIcon
            name="bathtub"
            size={15}
            color={colors.gray08}
          />
          <Text style={{
            fontSize: 14, color: colors.gray09, top: 0, paddingHorizontal: 5
          }}
          >
            {property.bathRooms}

          </Text>
        </View>
      </View>

      <View style={{
        flexDirection: 'row', paddingTop: 5
      }}
      >
        <Icon
          name="balcony"
          size={15}
          color={colors.gray08}
        />
        <Text style={{
          fontSize: 14, color: colors.gray09, top: 0, paddingLeft: 5
        }}
        >
          {property.balcony}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentSection: {
    marginHorizontal: 10,
    marginVertical: 15,
    flex: 1,
    flexWrap: 'wrap'
  }
});

export default CustomCallout;


// const houseIcon = propertiesData.photos.length > 0
//     ? propertiesData.photos[0]
//     : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Asn4EtTy0sFrhgLJuLBHeGyXn7e5899G_qccIiCzvfM9qlfB';
// const image = require('../../../img/home2.jpg');
// <ImageBackground source={image} style={{ width: '100%', height: '100%', flex: 1 }} resizeMode="cover" />
