import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Navbar from "./Navbar";
import { Switch, Route, Redirect} from "react-router-dom"
import Service from "./Service";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";

const App=()=>{
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">

        <Navbar/>
       <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/service" component={Service}/>
        <Redirect to="/ "/>
        </Switch>
        <Footer/>
        </div>
            </div>
        </div>
        
        </>
    );
};

export default App;