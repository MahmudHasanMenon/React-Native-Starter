import React from 'react';
import { View, Text } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import colors from '../../styles/colors';

import SinglePickerModal from '../../components/form/SinglePickerModal';
import MultiPickerModal from '../../components/form/MultipickerModal';

const SubscriptionFilterView = (props) => {
  const {
    cities, onSetCity, city, areas, area, onSetArea
  } = props;

  return (
    <View style={{
      borderBottomWidth: 0.4,
      borderBottomColor: colors.gray08,
      paddingVertical: 20,
      flexDirection: 'row'
    }}
    >
      <View style={{
        flex: 2.5,
        flexDirection: 'row',
        borderRightWidth: 0.4,
        borderRightColor: colors.gray08
      }}
      >
        <SinglePickerModal
          title="City"
          items={cities}
          setValue={onSetCity}
          value={city}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <FeatherIcon
              name="map-pin"
              size={20}
              color={colors.defaultButtonColor}
            />
            <Text style={{ fontSize: 14, paddingLeft: 5 }}>{city}</Text>
          </View>
        </SinglePickerModal>
      </View>


      <View style={{
        flex: 2.5,
        flexDirection: 'row',
        borderRightWidth: 0.4,
        borderRightColor: colors.gray08
      }}
      >
        <MultiPickerModal
          setValues={onSetArea}
          values={area}
          placeHolder="Area"
          items={areas}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <FeatherIcon
              name="map-pin"
              size={20}
              color={colors.defaultButtonColor}
            />
            <Text style={{ fontSize: 14, paddingLeft: 5 }}>Select Area</Text>
          </View>
        </MultiPickerModal>
      </View>
    </View>
  );
};

export default SubscriptionFilterView;
