import React, { Component } from 'react';
import AmountTextField from './AmountTextField.js';
import CurrencyCombobox from './CurrencyCombobox.js';

class ExchangeForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            exchangeMoneyInput: this.props.exchangeMoneyInput
        }
        this.updateBaseCurrency = this.updateBaseCurrency.bind(this);
        this.updateBaseAmount = this.updateBaseAmount.bind(this);
        this.updateTargetCurrency = this.updateTargetCurrency.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event)
    {
        event.preventDefault();

        var input = this.state.exchangeMoneyInput;

        if(input.baseAmount <= 0)
        {
            alert("Invalid amount");
            return;
        }

        if(input.baseCurrency == input.targetCurrency)
        {
            alert("The currency should not be the same value");
            return;
        }

        this.props.onExchangeMoney();
    }

    updateBaseCurrency(baseCurrency)
    {
        var input = this.state.exchangeMoneyInput;
        input.baseCurrency = baseCurrency;
        this.setState({exchangeMoneyInput: input});
    }

    updateBaseAmount(baseAmount)
    {
        var input = this.state.exchangeMoneyInput;
        input.baseAmount = baseAmount;
        this.setState({exchangeMoneyInput: input});
    }

    updateTargetCurrency(targetCurrency)
    {
        var input = this.state.exchangeMoneyInput;
        input.targetCurrency = targetCurrency;
        this.setState({exchangeMoneyInput: input});
    }

    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
                Base Amount: <AmountTextField 
                                name="base_amount" 
                                onUpdate={this.updateBaseAmount} 
                                value={this.state.exchangeMoneyInput.baseAmount}/><br/>
                Base Currency: <CurrencyCombobox 
                                    name="base_currency" 
                                    itemList={this.props.currencyList} 
                                    value={this.state.exchangeMoneyInput.baseCurrency} 
                                    onUpdate={this.updateBaseCurrency}/><br/>
                Target Currency: <CurrencyCombobox 
                                    name="target_currency" 
                                    itemList={this.props.currencyList} 
                                    value={this.state.exchangeMoneyInput.targetCurrency} 
                                    onUpdate={this.updateTargetCurrency}/><br/>
                <input type="submit" value="OK"/><br/> 
            </form>
        );
    }
}

export default ExchangeForm;