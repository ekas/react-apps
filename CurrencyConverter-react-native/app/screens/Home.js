import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

import { swapCurrency, changeCurrencyAmount, getInitialConversion } from '../actions/currencies';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    lastConvertedDate: PropTypes.object,
    isFetching: PropTypes.bool,
    primaryColor: PropTypes.string,
  };

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getInitialConversion());
  }

  handleChangeText = (amount) => {
    // console.log('change text', amount);
    const { dispatch } = this.props;
    dispatch(changeCurrencyAmount(amount));
  };

  handlePressBaseCurrency = () => {
    // console.log('press base currency');
    const { navigation } = this.props;
    navigation.navigate('CurrencyList',
      {
        title: 'Base Currency',
        type: 'base',
      });
  };

  handlePressQuoteCurrency = () => {
    // console.log('press quote currency');
    const { navigation } = this.props;
    navigation.navigate('CurrencyList',
      {
        title: 'Quote Currency',
        type: 'quote',
      });
  };

  handleSwapCurrency = () => {
    // console.log('press swap currency');
    const { dispatch } = this.props;
    dispatch(swapCurrency());
  };

  handleOptionsPress = () => {
    // console.log('Handles option pressed');
    const { navigation } = this.props;
    navigation.navigate('Options', { title: 'Options' });
  };

  render() {
    const {
      isFetching,
      amount,
      conversionRate,
      baseCurrency,
      quoteCurrency,
      lastConvertedDate,
      primaryColor,
    } = this.props;

    let quotePrice = '...';
    if (!isFetching) {
      quotePrice = (amount * conversionRate).toFixed(2);
    }
    return (
      <Container backgroundColor={primaryColor}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={primaryColor} />
          <InputWithButton
            buttonText={baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
            textColor={primaryColor}
          />
          <InputWithButton
            editable={false}
            buttonText={quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            value={quotePrice}
            textColor={primaryColor}
          />
          <LastConverted
            date={lastConvertedDate}
            quote={quoteCurrency}
            base={baseCurrency}
            conversionRate={conversionRate}
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

const mapStateToProps = (state) => {
  const { baseCurrency, quoteCurrency } = state.currencies;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    primaryColor: state.theme.primaryColor,
  };
};

export default connect(mapStateToProps)(Home);
