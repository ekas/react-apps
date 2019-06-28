/* eslint-disable no-console */
import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handleChangeText = (text) => {
    console.log('change text', text);
  };

  handlePressBaseCurrency = () => {
    console.log('press base currency');
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', { title: 'Base Currency' });
  };

  handlePressQuoteCurrency = () => {
    console.log('press quote currency');
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', { title: 'Quote Currency' });
  };

  handleSwapCurrency = () => {
    console.log('press swap currency');
  };

  handleOptionsPress = () => {
    console.log('Handles option pressed');
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
          />
          <InputWithButton
            editable={false}
            buttonText={TEMP_QUOTE_CURRENCY}
            onPress={this.handlePressQuoteCurrency}
            value={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            date={TEMP_CONVERSION_DATE}
            quote={TEMP_QUOTE_CURRENCY}
            base={TEMP_BASE_CURRENCY}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton
            text="Reverse Currency"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
