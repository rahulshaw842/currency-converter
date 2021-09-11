import { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '../components/Input';
import Select from '../components/Select';
import MultiSelect from '../components/MultiSelect';
import CurrencyList from '../Utils/CurrencyListsClass';
import CurrencyConverter from '../Utils/CurrencyConverterClass';
import DataTable from '../components/DataTable';


const Currency = new CurrencyList();
const CurrenctLists = Currency.getCurrencyLists();


export default function CurrencyListPage() {
    const [amount, setAmount] = useState(null);
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrencies, setToCurrencies] = useState([]);
    const [result, setResult] = useState([]);
    const [isResultShow, setIsResultShow] = useState(false);

    useEffect(() => {
        setIsResultShow(false);
    }, [amount, fromCurrency, toCurrencies])

    const convert = () => {
        const Money = new CurrencyConverter(amount, fromCurrency);
        Money.conversionRates(fromCurrency, Currency.getCurrencyObject(fromCurrency));
        const result = Money.convertToLists(toCurrencies);
        console.log(result)
        setResult(result);
        setIsResultShow(true);
    }
    return (
        <Grid container>
            <Grid item md={2}></Grid>
            <Grid item md={8} style={{ width: '100%' }}>
                <Card variant="outlined">
                    <div className="heading"> Currency List Converter</div>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Select label="From Currency" value={fromCurrency} handleChange={setFromCurrency} options={CurrenctLists} />
                            </Grid>
                            <Grid item xs={6}>
                                <MultiSelect label="To Currency" value={toCurrencies} handleChange={setToCurrencies} options={CurrenctLists} />
                            </Grid>
                        </Grid>
                        <Grid container className="margin-top">
                            <Input label="Amount" handleChange={setAmount} />
                        </Grid>
                    </CardContent>
                    <div className="button-center">
                        <Button variant="contained" color="primary" className="margin-bottom" onClick={convert} disabled={!fromCurrency || !toCurrencies.length || !amount}>
                            Convert
                        </Button>
                    </div>
                    {isResultShow && <Grid container>
                        <Grid item md={2}></Grid>
                        <Grid item md={8} style={{ width: '100%' }}>
                            <Typography variant="h6">
                                ({`Results for ${amount} ${fromCurrency}`})
                            </Typography>
                            <DataTable data={result} />
                        </Grid>
                        <Grid item md={2}></Grid>
                    </Grid>
                    }
                </Card>
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    )
}