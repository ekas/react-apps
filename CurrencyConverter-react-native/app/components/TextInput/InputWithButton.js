import PropTypes from 'prop-types';
import React from 'react';
import {
  View, TextInput, TouchableHighlight, Text,
} from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
  // eslint-disable-next-line no-unused-vars
  const {
    editable = true, onPress, buttonText, textColor,
  } = props;
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier,
  );
  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }
  const buttonTextStyles = [styles.buttonText];
  if (textColor) {
    buttonTextStyles.push({ color: textColor });
  }
  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={buttonTextStyles}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} {...props} underlineColorAndroid="transparent" />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
  textColor: PropTypes.string,
};

export default InputWithButton;
