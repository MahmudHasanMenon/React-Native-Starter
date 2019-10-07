import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../styles/colors';

const Button = props => {
  const {name, onPress, customBgColor} = props;

  const bgColor = customBgColor ? colors.darkOrange : colors.defaultButtonColor;

  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: bgColor}]}
      onPress={onPress}
      activeOpacity={1}>
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: colors.white,
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
