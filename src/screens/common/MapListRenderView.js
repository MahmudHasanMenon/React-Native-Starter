import React from 'react';
import { View } from 'react-native';
import { Icon, Picker, Form } from 'native-base';
import colors from '../../styles/colors';
import styles from '../styles/LastSearch';

import {
  ActiveMapIcon, InactiveMapIcon, ActiveListIcon, InactiveListIcon
} from './IconRenderView';

const MapListRenderView = (props) => {
  const {
    cities, selected, onValueChange, activeRoute, goLastSearchRoute, goHomeRoute
  } = props;

  return (
    <View style={styles.topSection}>
      <View style={styles.pickerSection}>
        <Form>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            placeholder="Select your SIM"
            placeholderStyle={{ color: '#bfc6ea' }}
            placeholderIconColor="#007aff"
            style={{ width: undefined }}
            selectedValue={selected}
            onValueChange={onValueChange}
          >
            {
                cities.map(city => (
                  <Picker.Item key={city._id} label={city.name} value={city.name} />
                ))
              }
          </Picker>
        </Form>
      </View>
      <View style={styles.iconSection}>
        {
            (activeRoute === 'LastSearch')
              ? (
                <ActiveListIcon
                  onPress={goLastSearchRoute}
                  activeIconColor={colors.white}
                  backgroundColor={colors.activeColor}
                />
              )
              : (
                <InactiveListIcon
                  onPress={goLastSearchRoute}
                />
              )
          }
        {
            (activeRoute === 'Map')
              ? (
                <ActiveMapIcon
                  onPress={goHomeRoute}
                  activeIconColor={colors.white}
                  backgroundColor={colors.activeColor}
                />
              )
              : (
                <InactiveMapIcon
                  onPress={goHomeRoute}
                />
              )
          }
      </View>
    </View>
  );
};

export default MapListRenderView;
