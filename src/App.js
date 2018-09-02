import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Index from './components/layout/Index';
import './App.css';
import {Provider} from './context';

class App extends Component {
  render() {
    return (
    <Provider>
      <Router>
            <React.Fragment>
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route exact="/" component={Index} />
                    </Switch>
                </div>
            </React.Fragment>
        </Router>
    </Provider>
    );
  }
}

export default App;
