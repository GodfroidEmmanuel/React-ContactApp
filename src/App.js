import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/interface/Header';
import List from './components/contact/Liste';
import {Provider} from './context';
import AddContact from './components/contact/AddContact';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import APropos from './components/pages/APropos';
import Erreur from './components/pages/Erreur';





function App() {
  return (
    <Provider>
      <Router>
    <div className="App">
      <Header />
        <div className="container">
          {/* <AddContact/> */}
          <Switch>
          <Route exact path="/ajouter" component={AddContact} />
          <Route exact path="/liste" component={List} />
          <Route exact path="/apropos" component={APropos} />
          <Route exact path="/" component={List} />
          <Route component={Erreur} />
          </Switch>
        </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
