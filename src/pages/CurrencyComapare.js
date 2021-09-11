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

const compareOperator = ['=', '<', '>'];


export default function CurrencyCompare() {
    const [Amount1, setAmount1] = useState(null);
    const [Amount2, setAmount2] = useState(null);
    const [Currency1, setCurrency1] = useState('');
    const [Currency2, setCurrency2] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState(false);
    const [isResultShow, setIsResultShow] = useState(false);

    useEffect(() => {
        setIsResultShow(false);
    }, [Amount1, Amount2, Currency1, Currency2, operator])

    const compare = () => {
        const FirstMoney = new CurrencyConverter(Amount1, Currency1);
        const SecondMoney = new CurrencyConverter(Amount2, Currency2);
        SecondMoney.conversionRates(Currency2, Currency.getCurrencyObject(Currency2));
        const secondMoneyConvertedData = SecondMoney.convertTo(Currency1);
        const result = FirstMoney.compareCurrency(secondMoneyConvertedData, operator)
        setResult(result);
        setIsResultShow(true);
    }
    return (
        <Grid container>
            <Grid item md={2}></Grid>
            <Grid item md={8} style={{ width: '100%' }}>
                <Card variant="outlined">
                    <div className="heading"> Currency Compare</div>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item md={5} style={{ width: '100%' }}>
                                <Select label="Currency 1" value={Currency1} handleChange={setCurrency1} options={CurrenctLists} />
                                <Input label="Amount" handleChange={setAmount1} className="margin-top" />
                            </Grid>
                            <Grid item md={2} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                <Select label="Operator" value={operator} handleChange={setOperator} options={compareOperator} />
                            </Grid>
                            <Grid item md={5} style={{ width: '100%' }}>
                                <Select label="Currency 2" value={Currency2} handleChange={setCurrency2} options={CurrenctLists} />
                                <Input label="Amount" handleChange={setAmount2} className="margin-top" ></Input>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <div className="button-center">
                        <Button variant="contained" color="primary" className="margin-bottom" onClick={compare} disabled={!Amount1 || !Amount2 || !Currency1 || !Currency2 || !operator}>
                            Compare
                        </Button>
                    </div>
                    {isResultShow && <div style={{ textAlign: 'center' }}>
                        <Typography variant="h6">
                            Result: {`${result}`}
                        </Typography>
                    </div>
                    }
                </Card>
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    )
}