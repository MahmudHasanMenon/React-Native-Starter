/* eslint-disable */
import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

export default styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.defaultButtonColor
  },
  filterSearchContent: {
    flex: 1,
    marginVertical: 20
  },
  rentRangeSection: {
    marginBottom: 10
  },
  rentRange: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  pickerSection: {
    borderWidth: 1.5,
    borderColor: colors.defaultButtonColor,
    width: '48%'
  },
  bedroomSection: {
    marginBottom: 20
  },
  allBedRooms: {
    borderWidth: 1.5,
    borderColor: colors.defaultButtonColor,
    height: 60,
    flex: 1,
    flexDirection: 'row',
  },
  typeSection: {
    marginBottom: 20,
    marginHorizontal: 12
  },
  typeRange: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  typePickerSection: {
    borderWidth: 1,
    borderColor: colors.gray08,
    width: '100%',
    borderRadius: 5
  },
  submitSection: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
    marginHorizontal: 12
  },
  resetButton: {
    backgroundColor: colors.darkOrange,
    width: '48%',
    height: 50,
    borderRadius: 5,
    marginRight: 10
  },
  searchButton: {
    backgroundColor: colors.defaultButtonColor,
    width: '48%',
    height: 50,
    borderRadius: 5
  }
})