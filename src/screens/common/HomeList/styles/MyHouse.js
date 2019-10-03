/* eslint-disable  */
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({

/* Card Style.....*/
  
  cardContainer: {
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderRadius: 10
  },
  cardPrice: {  
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green'
  },
  cardLocation: {    
    fontSize: 14,
    fontWeight: 'bold'
    
  },
  cardFooter: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10, 
    
  },
  footerCol1: {
     
    flexDirection: 'column',
    marginLeft: 25,
    marginBottom: 15,
  },
  footerCol2: { 
    flexDirection: 'column',
    marginVertical: 10,
    marginLeft: 15
  },
  cardBed: {
    fontSize: 13,
    marginLeft: 10    
     
  },
  cardBath: {
    fontSize: 13,
    marginLeft: 10
    
  },
  cardSqft: {
    fontSize: 13,
    marginLeft: 10
    
  }
   
})