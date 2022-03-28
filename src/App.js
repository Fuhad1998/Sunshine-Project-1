import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homes from './Component/Pages/Homes/Homes';
import Header from './Component/Pages/Header/Header';
import Footer from './Component/Pages/Footer/Footer';



function App() {
  return (
    <div className="App">
   <Router>
     <Header></Header>
     <Switch>
       <Route path="/">
        <Homes></Homes>
       </Route>
       <Route path="/homes">
        <Homes></Homes>
       </Route>
     </Switch>
     <Footer></Footer>
   </Router>
   
   
    </div>
  );
}

export default App;
