import {BrowserRouter,Route,Switch} from "react-router-dom";
import landingpage from "./components/landingpage";
import bmipage from "./components/bmipage";
import './App.css';

const App=()=>(
  <BrowserRouter>
  <Switch>
    <Route exact path="/oInvU39kmMKO9jBZ" component={landingpage}/>
    <Route exact path="/bmi" component={bmipage}/>
  </Switch>
  </BrowserRouter>
)

export default App;
