import React from 'react';
import { Image, View } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import { Badge } from 'react-native-elements';

// import colors from '../../../styles/colors';
// import { Icon } from '../../../utils/setFonttelloIcon';
import CustomCallout from './CustomCallout';

const mapIcon = require('../../../img/rentu/GREEN_MAP_ICON.png');

const CustomMarker = (props) => {
  const { property, onCallOutPress } = props;

  return (
    <Marker
      coordinate={property.coordinate}
    >
      {/* <Icon name="green" size={45} color={colors.defaultButtonColor} /> */}

      <View>
        <Image resizeMode="contain" source={mapIcon} style={{ height: 50, width: 50 }} />

        <Badge
          status="error"
          value="5"
          containerStyle={{
            position: 'absolute',
            top: 0,
            right: 0
          }}
        />
      </View>

      <Callout
        style={{
          borderColor: 'red',
          borderRadius: 10,
          flex: 1,
          minWidth: 120
        }}
        onPress={onCallOutPress}
      >
        <CustomCallout property={property} />
      </Callout>
    </Marker>
  );
};

export default CustomMarker;
