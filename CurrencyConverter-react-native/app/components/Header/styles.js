import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    '@media ios': {
      paddingTop: 30,
    },
  },
  button: {
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  icon: {
    width: 25,
  },
});

export default styles;
