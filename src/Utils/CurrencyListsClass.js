export default class CurrencyList {
    currencyLists = {
        USD: { USD: 1, EUR: 0.846610, INR: 73.517976, CAD: 1.269202, GBP: 0.722895, AUD: 1.35951 },
        EUR: { EUR: 1, USD: 1.181133, INR: 86.841571, CAD: 1.499008, GBP: 0.853962, AUD: 1.605811 },
        INR: { INR: 1, USD: 0.013600, EUR: 0.011514, CAD: 0.009833, GBP: 0.017261, AUD: 0.018490 },
        CAD: { CAD: 1, USD: 0.787952, EUR: 0.667109, INR: 57.935490, GBP: 0.569708, AUD: 1.071266 },
        GBP: { GBP: 1, USD: 1.383065, EUR: 1.170970, INR: 101.691795, CAD: 1.755258, AUD: 1.880361 },
        AUD: { BTC: 1, USD: 0.735532, EUR: 0.622737, INR: 54.080985, GBP: 0.531813, CAD: 0.933468 },
    };

    getCurrencyLists() {
        return Object.keys(this.currencyLists);
    }
    getCurrencyObject(currency) {
        return this.currencyLists[currency];
    }
}