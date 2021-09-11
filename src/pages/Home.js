import { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '../components/Input';
import Select from '../components/Select';
import CurrencyList from '../Utils/CurrencyListsClass';
import CurrencyConverter from '../Utils/CurrencyConverterClass';


const Currency = new CurrencyList();
const CurrenctLists = Currency.getCurrencyLists();


export default function Home() {
    const [amount, setAmount] = useState(null);
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [result, setResult] = useState(null);
    const [isResultShow, setIsResultShow] = useState(false);
    const [rate, setRate] = useState(null);

    useEffect(() => {
        setIsResultShow(false);
    }, [amount, fromCurrency, toCurrency])

    const convert = () => {
        const Money = new CurrencyConverter(amount, fromCurrency);
        Money.conversionRates(fromCurrency, Currency.getCurrencyObject(fromCurrency));
        const result = Money.convertTo(toCurrency);
        setResult(result);
        const rate = Money.getConversionRate(toCurrency);
        setRate(rate);
        setIsResultShow(true);
    }
    return (
        <Grid container>
            <Grid item md={2}></Grid>
            <Grid item md={8} style={{ width: '100%' }}>
                <Card variant="outlined">
                    <div className="heading"> Currency Converter</div>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Select label="From Currency" value={fromCurrency} handleChange={setFromCurrency} options={CurrenctLists} />
                            </Grid>
                            <Grid item xs={6}>
                                <Select label="To Currency" value={toCurrency} handleChange={setToCurrency} options={CurrenctLists} />
                            </Grid>
                        </Grid>
                        <Grid container className="margin-top">
                            <Input label="Amount" handleChange={setAmount} />
                        </Grid>
                    </CardContent>
                    <div className="button-center">
                        <Button variant="contained" color="primary" className="margin-bottom" onClick={convert} disabled={!fromCurrency || !toCurrency || !amount}>
                            Convert
                        </Button>
                    </div>
                    {isResultShow && <div style={{ textAlign: 'center' }}>
                        <Typography variant="h6">
                            Result: {`${result} ${toCurrency}`}
                        </Typography>
                        <Typography variant="caption">
                            ({`Rate 1 ${fromCurrency} = ${rate} ${toCurrency}`})
                        </Typography>
                    </div>
                    }
                </Card>
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    )
}