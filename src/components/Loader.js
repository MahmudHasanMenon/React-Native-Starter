import React from 'react';
import {PropTypes} from 'prop-types';
import {View, Image, Modal, StyleSheet} from 'react-native';

import colors from '../styles/colors';

const Spinner = require('../img/loader.gif');

const Loader = props => {
  const {animationType, modalVisible} = props;
  return (
    <Modal animationType={animationType} transparent visible={modalVisible}>
      <View style={styles.wrapper}>
        <View style={styles.loaderContainer}>
          <Image
            style={styles.loaderImage}
            source={Spinner}
            resizeMode="contain"
          />
        </View>
      </View>
    </Modal>
  );
};

Loader.propTypes = {
  animationType: PropTypes.string.isRequired,
  modalVisible: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 9,
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  loaderContainer: {
    width: 70,
    height: 70,
    backgroundColor: colors.white,
    borderRadius: 15,
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -45,
    marginTop: -45,
  },
  loaderImage: {
    width: 60,
    height: 60,
    borderRadius: 15,
    position: 'relative',
    left: '50%',
    marginLeft: -30,
    top: '50%',
    marginTop: -30,
  },
});

export default Loader;
