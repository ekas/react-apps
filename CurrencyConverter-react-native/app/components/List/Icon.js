import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Image } from 'react-native';
import styles from './styles';

const Icon = ({ checkmark, visible }) => {
  const iconStyles = [styles.icon];
  if (visible) {
    iconStyles.push(styles.iconVisible);
  }
  return (
    <View>
      {checkmark ? <View style={iconStyles}><Image resizeMode="contain" style={styles.check} source={require('./images/check.png')} /></View> : null}
    </View>
  );
};

Icon.propTypes = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
};
export default Icon;
