import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    marginTop: 110,
    height: 83,
    width: 159,
  },
  username_border: {
    width: 279,
    height: 35,
    alignItems: 'center',
    marginTop: 70.5,
  },
  username_text_input: {
    flex: 1,
    textAlign: 'center',
    width: '90%',
    color: 'white',
  },
  password_border: {
    width: 279,
    height: 35,
    alignItems: 'center',
    marginTop: 13,
    marginBottom: 10,
  },
  password_text_input: {
    flex: 1,
    textAlign: 'center',
    width: '90%',
    color: 'white',
  },
  sign_in_button: {
    marginBottom: 15,
    height: 24,
    width: 109,
  },
  fb_login: {
    width: 100,
    height: 30,
  }
})

export default Styles
