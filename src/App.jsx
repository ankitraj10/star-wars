import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./components/Homepage";
import CharacterDetails from "./components/CharacterDetails";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/character/:id" component={CharacterDetails} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
