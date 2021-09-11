import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CurrencyListPage from './pages/CurrencyListsPage'
import CurrencyCompare from "./pages/CurrencyComapare";
import CurrencyOperations from "./pages/CurrencyOperations";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/currency-list-converter">
            <CurrencyListPage />
          </Route>
          <Route exact path="/currency-compare">
            <CurrencyCompare />
          </Route>
          <Route exact path="/currency-operations">
            <CurrencyOperations />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
