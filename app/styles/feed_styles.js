import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20
  },
  hostAva: {
    position: 'absolute',
    top: -10, left: -10,
    zIndex: 2
  },
  hostName: {
    backgroundColor: 'transparent',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 50
  },
  destinationText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 8
  },
  originText: {
    backgroundColor: 'transparent',
    color : 'gray',
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 5
  },
  dateText: {
    color : 'gray',
    marginLeft: 5,
    fontSize: 10,
    marginBottom: 10
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  smallDetailContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  dateAndGuestDetailContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  priceText: {
    backgroundColor : 'transparent',
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default Styles
