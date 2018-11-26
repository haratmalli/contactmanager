import React, { Component } from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
// import About from "./components/pages/About";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contacts/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
              {/* <AddContact />
              <Contacts /> */}
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;