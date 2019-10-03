/* eslint-disable max-len */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import colors from '../../styles/colors';

const NotFound = () => (
  <View style={styles.noResultSection}>
    <Text style={{
      color: colors.defaultButtonColor, fontSize: 25, fontWeight: 'bold', paddingBottom: 5
    }}
    >
No Result Found
    </Text>
    {/* <Text style={{ color: colors.gray08, fontSize: 18, textAlign: 'center' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text> */}
  </View>
);


const styles = StyleSheet.create({
  noResultSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  goBackButton: {
    backgroundColor: colors.defaultButtonColor,
    width: '48%',
    height: 50,
    borderRadius: 5,
    marginVertical: 20
  }
});

export default NotFound;
