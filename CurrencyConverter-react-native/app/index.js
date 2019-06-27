import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $white: '#fff',
  $lightGray: '#F0F0F0',
  $inputText: '#797979',
  $border: '#E2E2E2',
  $darkText: '#343434',
  // $outline: 1,
});
export default () => <Home />;
