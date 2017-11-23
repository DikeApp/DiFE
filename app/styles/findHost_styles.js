import { StyleSheet } from 'react-native'

const FindHostStyles = StyleSheet.create({
  header: {
    flex: 3,
    marginTop: 10,
    marginBottom: 5,
    marginRight: 140
  },
  pickerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    height: 40,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 15
  },
  pickerPrompt: {
    flex: 1.5,
    fontWeight: 'bold',
    marginLeft: 10
  },
  pickerText: {
    flex: 8.5,
    marginLeft: 10
  },
  noteContainer: {
    flex: 3
  }
})

export default FindHostStyles
