/* eslint-disable */

import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../styles/colors/index'

let { width, height } = Dimensions.get('window')

export default styles = StyleSheet.create({
  mapContainer: {
    flex: 3,
    width: width,
    height: height
  },
  headerStyle: {
    backgroundColor: colors.defaultButtonColor
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 10
  },
  pickerSection: {
    borderWidth: 1,
    borderColor: colors.activeColor,
    width: '65%'
  },
  iconSection: {
    flexDirection: 'row'
  },
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
})