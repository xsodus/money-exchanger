import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ExchangeForm from './viewmodel/ExchangeForm.js';
import ExchangeMoneyInput from './model/ExchangeMoneyInput';
import ExchangeRateAPI from './api/ExchangeRateAPI.js';

class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state = {
      currencyList:["EUR","THB","USD"],
      resultText:"0",
      exchangeMoneyInput: new ExchangeMoneyInput()
    }
    this.onExchangeMoney = this.onExchangeMoney.bind(this);
    this.onLoadCurrency = this.onLoadCurrency.bind(this);
    this.onLoadTargetCurrency = this.onLoadTargetCurrency.bind(this);
    ExchangeRateAPI.getLatestRate("USD", this.onLoadCurrency);
  }

  onLoadCurrency(res, err)
  {
    var newCurrencyList = [];

    if(err !== null) {
      alert(`Could not load data:${err}`);
      return;
    }

    Object.keys(res["rates"]).forEach(function(key) {
      newCurrencyList.push(key);
    });
    
    newCurrencyList.push(res["base"]);

    this.setState({ currencyList: newCurrencyList });
    this.onLoadTargetCurrency(res, err);
  }

  onExchangeMoney()
  {
    var input = this.state.exchangeMoneyInput;
    ExchangeRateAPI.getLatestRate(input.baseCurrency, this.onLoadTargetCurrency);
  }

  onLoadTargetCurrency(res, err)
  {
      var input = this.state.exchangeMoneyInput;
      
      if(err !== null) {
        console.log(`Could not load data:${err}`);
        return;
      }

      var rate = res["rates"][input.targetCurrency];
      var result = rate * input.baseAmount;

      this.setState({
        resultText: result,
        exchangeMoneyInput:input
      });
  }

  render() 
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Money Exchanger by React.js</h1>
          <p>
            Please enter the data to the form.
          </p>
          <ExchangeForm 
            currencyList={this.state.currencyList} 
            onExchangeMoney={this.onExchangeMoney}
            exchangeMoneyInput={this.state.exchangeMoneyInput} 
            />
          <p>Result: <font color="red">{this.state.resultText}</font> {this.state.exchangeMoneyInput.targetCurrency}</p>
        </header>
      </div>
    );
  }
}

export default App;
