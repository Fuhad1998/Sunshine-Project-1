import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homes from "./Component/Pages/Homes/Homes";
import Header from "./Component/Pages/Header/Header";
import Footer from "./Component/Pages/Footer/Footer";
import Login from "./Component/Pages/Login/Login";
import Banner from "./Component/Pages/Banner/Banner";
import Register from "./Component/Pages/Register/Register";
import Achievement from "./Component/Pages/Achievement/Achievement";
import Expertise from "./Component/Pages/Expertise/Expertise";
import AuthProvider from "./Context/AuthProvider";
import Services from "./Component/Pages/Services/Services";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">

    <AuthProvider>
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
          <PrivateRoute path="/expertise">
            <Expertise></Expertise>
          </PrivateRoute>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>

          <Route path="/">
            <Homes></Homes>
          </Route>
          <Route path="/homes">
            <Homes></Homes>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>

    </div>
  );

}

export default App;
