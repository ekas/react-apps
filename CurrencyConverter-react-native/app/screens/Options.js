/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { Component } from 'react';
import {
  ScrollView, StatusBar, Platform, Linking,
} from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { ListItem, Separator } from '../components/List';
import { ConnectAlert } from '../components/Alert';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  };

  handlePressThemes = () => {
    console.log('press themes');
    const { navigation } = this.props;
    navigation.navigate('Themes', { title: 'Choose Theme' });
  };

  handlePressSite = () => {
    console.log('press site');
    const { alertWithType } = this.props;
    Linking.openURL('https://fixer.io/').catch(() => alertWithType('error', 'Contact Administrator', "Can't be Opened"));
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handlePressThemes}
          customIcon={
            <Ionicons name={`${ICON_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR} />
          }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handlePressSite}
          customIcon={<Ionicons name={`${ICON_PREFIX}-link`} size={ICON_SIZE} color={ICON_COLOR} />}
        />
        <Separator />
      </ScrollView>
    );
  }
}
export default ConnectAlert(Options);
