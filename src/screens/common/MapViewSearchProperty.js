/* eslint-disable max-len */
import React from 'react';
import {
  View, ActivityIndicator, StyleSheet, TouchableOpacity
} from 'react-native';
import { Text } from 'native-base';
import { Image } from 'react-native-elements';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';

import Devider from './Devider';


const MapViewSearchProperty = ({ imgSrc, onPress }) => (
  <TouchableOpacity style={styles.cardList} onPress={onPress}>
    <View style={styles.imageSection}>
      <Image
        source={imgSrc}
        style={{ width: 100, height: 116 }}
        PlaceholderContent={<ActivityIndicator />}
      />

      <TouchableOpacity style={{ position: 'absolute', right: 10, top: 15 }}>
        <FontAwesomeIcon
          name="heart-o"
          size={25}
          color={colors.white}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.contentSection}>
      <View>
        <Text style={{ fontSize: 16, color: colors.activeColor, fontWeight: '500' }}>20,000 BDT</Text>
        <Text style={{ fontSize: 14, color: colors.gray08 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </View>

      <View style={{
        flex: 1, top: 60, position: 'absolute', flexDirection: 'row'
      }}
      >
        <View style={{ flexDirection: 'row' }}>
          <EntypoIcon
            name="dot-single"
            size={30}
            color={colors.green01}
          />
          <Text style={{
            fontSize: 12, color: colors.gray08, top: 6, right: 8
          }}
          >
Bed

          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <EntypoIcon
            name="dot-single"
            size={30}
            color={colors.darkOrange}
          />
          <Text style={{
            fontSize: 12, color: colors.gray08, top: 6, right: 8
          }}
          >
Bath

          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <EntypoIcon
            name="dot-single"
            size={30}
            color={colors.activeColor}
          />
          <Text style={{
            fontSize: 12, color: colors.gray08, top: 6, right: 8
          }}
          >
sqft

          </Text>
        </View>
      </View>

      <View style={{ bottom: -23 }}>
        <Devider color={colors.gray08} />
      </View>

      <View style={{
        flex: 1, flexDirection: 'row', top: 85, position: 'absolute'
      }}
      >
        <EntypoIcon
          name="dot-single"
          size={30}
          color={colors.brown02}
        />
        <Text style={{
          fontSize: 14, color: colors.gray08, top: 6, right: 8
        }}
        >
Location

        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  bottomSection: {
    flex: 4
  },
  cardList: {
    flex: 1,
    flexDirection: 'row',
  },
  imageSection: {
    borderRightWidth: 2,
    borderColor: colors.defaultButtonColor,
  },
  contentSection: {
    padding: 5,
    flex: 2,
    flexWrap: 'wrap',
    flexDirection: 'column'
  }
});

export default MapViewSearchProperty;
