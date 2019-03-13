import React, { Component } from 'react';

class CurrencyCombobox extends Component
{
    constructor(props) {
        super(props);
        this.updateValue = this.updateValue.bind(this);
    }

    updateValue(event){
        var selectValue = event.target.value;
        this.props.onUpdate(selectValue);
    }

    render() {
        return(
            <select name={this.props.name} onChange={this.updateValue} value={this.props.value}>
                {this.props.itemList.map(function(name, index){
                    return <option value={ name }>{name}</option>;
                })}
            </select>
        );
    }
}

export default CurrencyCombobox;