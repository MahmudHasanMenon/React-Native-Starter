/* eslint-disable */

import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../styles/colors'

let { width, height } = Dimensions.get('window')

export default styles = StyleSheet.create({

  AddButtonView: {
    position: 'absolute',
    bottom: 0,
    left: '32%'
    // alignItems: 'center',
    // shadowOpacity: 0.75,
    // elevation: 1,
    // shadowColor: 'red',
  },
   AddButton: {
    backgroundColor: '#16a085',
    alignItems: 'center',
    width: 130,
    height: 130,
    borderRadius: 100,
    bottom: -70,
  },
  AddIcon: {
    fontSize: 30,
    color: 'white',
    alignItems: 'center',
    top: 20,
    fontWeight: '700' 
  },
  HomeRent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20 
  }
  
})