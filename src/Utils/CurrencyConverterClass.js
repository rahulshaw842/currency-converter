export default class CurrencyConverter {
    amount;
    currency;
    baseCurrency;
    otherCurrencyRatesObject;

    constructor(amount, currency) {
        this.amount = Number(amount);
        this.currency = currency;
    }

    conversionRates(baseCurrency, otherCurrencyRatesObject) {
        this.baseCurrency = baseCurrency;
        this.otherCurrencyRatesObject = otherCurrencyRatesObject;
    }

    convertTo(currency) {
        return this.otherCurrencyRatesObject[currency] * this.amount
    }

    convertToLists(currencyList) {
        console.log(this.amount)
        const convertedCurrency = currencyList.map(currency => ({ id: currency, currency: currency, amount: this.otherCurrencyRatesObject[currency] * Number(this.amount), rate: this.otherCurrencyRatesObject[currency] }))
        return convertedCurrency
    }

    getConversionRate(currency) {
        return this.otherCurrencyRatesObject[currency];
    }

    compareCurrency(money, operator) {
        return (operator === '=' ? this.amount === money : operator === '<' ? this.amount < money : this.amount > money);
    }
    arithmaticOperation(money, operator) {
        return (operator === '+' ? this.amount + money : operator === '-' ? this.amount - money : operator === '*' ? this.amount * money : this.amount / money);
    }


}