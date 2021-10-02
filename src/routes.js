import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Calculadora from "./pages/Calculadora";
import Ola from "./pages/Ola";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/calculadora">
          <Calculadora />
        </Route>
        <Route path="/ola">
          <Ola />
        </Route>

        <Redirect from="/" to="/ola" />
      </Switch>
    </Router>
  );
};

export default Routes;
