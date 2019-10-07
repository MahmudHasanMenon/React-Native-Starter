/* eslint-disable */

import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

export default styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.defaultButtonColor
  },
  avatarSection: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 20
  },
  contentSection: {
    flex: 3,
    marginHorizontal: 20,
    marginBottom: 30
  },
  notificationWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
})