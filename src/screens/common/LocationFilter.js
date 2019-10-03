import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import colors from '../../styles/colors';
import SinglePickerModal from '../../components/form/SinglePickerModal';

const LocationFilterView = (props) => {
  const {
    cities, onSetCity, city, areas, area, onSetArea, goFilterSearchScreen
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
        <SinglePickerModal
          title="Area"
          items={areas}
          setValue={onSetArea}
          value={area}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <FeatherIcon
              name="map-pin"
              size={20}
              color={colors.defaultButtonColor}
            />
            <Text style={{ fontSize: 14, paddingLeft: 5 }}>{area}</Text>
          </View>
        </SinglePickerModal>
      </View>

      <TouchableOpacity
        onPress={goFilterSearchScreen}
        activeOpacity={0.7}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <FeatherIcon
          name="filter"
          size={20}
          color={colors.defaultButtonColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default LocationFilterView;
