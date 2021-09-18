import './App.css';
import react, {Component} from 'react';
import AllCarDetails from './components/all-car-details';
import DetailedCarSpecs from './components/detailed-car-specs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/vehicle/:id">
              <DetailedCarSpecs />
            </Route>
            <Route exact path="/">
              <AllCarDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;