/* eslint-disable */

import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../styles/colors'

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
    borderColor: colors.defaultButtonColor,
    width: '60%'
  },
  iconSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: colors.defaultButtonColor,
    borderRadius: 5
  }
})