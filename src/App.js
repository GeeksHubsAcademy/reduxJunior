import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';


import Home from './containers/Home/Home';



function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
