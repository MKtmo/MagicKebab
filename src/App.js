import "./App.css";
import logo from "./asset/Logo-MagicKebab-transparent 1.png";
import Home from "./Component/Home";
import Etape2 from "./Component/Etape2";
import Etape3 from "./Component/Etape3";
import Etape4 from "./Component/Etape4";
import Recap from "./Component/Recapitulatif";
import { ImgStyle } from "./Component/style";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CommandValide from "./Component/CommandValide";

function App() {
  return (
    <div className="App">
      <ImgStyle src={logo} alt="Logo"></ImgStyle>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/etape2" exact component={Etape2} />
          <Route path="/etape3" exact component={Etape3} />
          <Route path="/etape4" exact component={Etape4} />
          <Route path="/recapitulatif" exact component={Recap} />
          <Route path="/CommandeValide" exact component={CommandValide} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
