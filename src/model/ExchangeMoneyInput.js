class ExchangeMoneyInput
{
    constructor()
    {
        this._baseAmount = "1";
        this._baseCurrency = "USD";
        this._targetCurrency = "THB";
    }

    get baseAmount() { return this._baseAmount; }
    set baseAmount(inBaseAmount) { this._baseAmount = inBaseAmount; }

    get baseCurrency() { return this._baseCurrency; }
    set baseCurrency(inBaseCurrency) {  this._baseCurrency = inBaseCurrency; }

    get targetCurrency() { return this._targetCurrency; }
    set targetCurrency(inTargetCurrency) { this._targetCurrency= inTargetCurrency; }
}

export default ExchangeMoneyInput;