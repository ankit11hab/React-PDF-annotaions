import DesignOne from "./components/Basic/DesignOne";
import DesignTwo from "./components/Basic/DesignTwo";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DesignThree from "./components/Basic/DesignThree";
import DesignFour from "./components/Basic/DesignFour";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component={DesignOne}/>
          <Route exact path = "/designtwo" component={DesignTwo}/>
          <Route exact path = "/designthree" component={DesignThree}/>
          <Route exact path = "/designfour" component={DesignFour}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
