/* eslint-disable */

import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

export default styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center'
  },
  form: {
    margin: 20
  },
  countryCode: {
    fontSize: 20,
    fontWeight: '700',
    marginRight: 10,
    borderBottomWidth: 1,
    color: colors.gray02,
    borderBottomColor: colors.gray02,
  },
  textInput: {
    padding: 0,
    margin: 0,
    flex: 1,
    fontSize: 20,
    borderBottomWidth: 1,
    color: colors.gray02,
    borderBottomColor: colors.defaultButtonColor,
  },
  notificationWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  }
})