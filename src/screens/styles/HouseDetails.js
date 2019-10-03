/* eslint-disable */

import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../styles/colors'

let { width, height } = Dimensions.get('window')

export default styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.defaultButtonColor
  },
  topContent: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 20
  },
  propertyDetails: {
    flex: 2,
    marginVertical: 20,
    marginHorizontal: 15
  },
  description: {
    flex: 3,
    marginHorizontal: 15,
    marginVertical: 20
  }
})