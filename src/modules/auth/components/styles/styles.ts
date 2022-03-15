import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4FE',
  },
  signInButton: {
    width: 312,
    height: 48,
  },
  status: {
    marginVertical: 20,
  },
  loggedinMessage: {
    fontSize: 30,
    color: 'tomato',
    fontWeight: 'bold',
  },
});

export {styles};
