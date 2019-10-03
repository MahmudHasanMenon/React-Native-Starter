import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';

export const ActiveMapIcon = ({ onPress, activeIconColor, backgroundColor }) => {
  const iconColor = activeIconColor || colors.activeColor;
  const activeBackgroundColor = backgroundColor || colors.white;

  return (
    <TouchableOpacity style={[styles.mapSection, { backgroundColor: activeBackgroundColor }]} onPress={onPress}>
      <Icon
        name="map-marker"
        size={20}
        color={iconColor}
      />
    </TouchableOpacity>
  );
};

export const InactiveMapIcon = ({ onPress, activeIconColor, backgroundColor }) => {
  const iconColor = activeIconColor || colors.activeColor;
  const activeBackgroundColor = backgroundColor || colors.white;

  return (
    <TouchableOpacity style={[styles.mapSection, { backgroundColor: activeBackgroundColor }]} onPress={onPress}>
      <Icon
        name="map-marker"
        size={20}
        color={iconColor}
      />
    </TouchableOpacity>
  );
};

export const ActiveListIcon = ({ onPress, activeIconColor, backgroundColor }) => {
  const iconColor = activeIconColor || colors.activeColor;
  const activeBackgroundColor = backgroundColor || colors.white;

  return (
    <TouchableOpacity style={[styles.listSection, { backgroundColor: activeBackgroundColor }]} onPress={onPress}>
      <Icon
        name="navicon"
        size={20}
        color={iconColor}
      />
    </TouchableOpacity>
  );
};

export const InactiveListIcon = ({ onPress, activeIconColor, backgroundColor }) => {
  const iconColor = activeIconColor || colors.activeColor;
  const activeBackgroundColor = backgroundColor || colors.white;

  return (
    <TouchableOpacity style={[styles.listSection, { backgroundColor: activeBackgroundColor }]} onPress={onPress}>
      <Icon
        name="navicon"
        size={20}
        color={iconColor}
      />
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  mapSection: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.activeColor,
    height: 40,
    width: 40,
    marginHorizontal: 10,
    top: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listSection: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.activeColor,
    height: 40,
    width: 40,
    top: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
