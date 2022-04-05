import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import NavBar from "./components/navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>React Redux Practice</h1>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Page1} />
          <Route exact path="/page2" component={Page2} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
