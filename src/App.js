import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Homes from './Component/Pages/Homes/Homes';
import Header from './Component/Pages/Header/Header';
import Footer from './Component/Pages/Footer/Footer';
import Login from './Component/Pages/Login/Login';
import Banner from './Component/Pages/Banner/Banner';
import Register from './Component/Pages/Register/Register';
import Achievement from './Component/Pages/Achievement/Achievement';
import Expertise from './Component/Pages/Expertise/Expertise';




function App() {
  return (
    <div className="App">
   <Router>
     <Header></Header>
     <Switch>
       <Route path="/banner">
         <Banner></Banner>
       </Route>
       <Route path="/login">
        <Login></Login>
       </Route>
       <Route path="/register">
        <Register></Register>
       </Route>
       <Route path="/achievement">
        <Achievement></Achievement>
       </Route>
       <Route path="/expertise">
        <Expertise></Expertise>
       </Route>
       
      
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
