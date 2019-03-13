import React, { Component } from 'react';

class AmountTextField extends Component
{
    constructor(props) {
        super(props);
        this.updateValue = this.updateValue.bind(this);
    }

    updateValue(event){
        this.props.onUpdate(event.target.value);
    }

    render() {
        return(
            <input type="number" name={this.props.name} onChange={this.updateValue} value={this.props.value} />
        );
    }
}

export default AmountTextField;