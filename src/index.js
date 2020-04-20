import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import { Chat } from "./Components/chat";
import { Login } from "./Components/login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            msR : "",
        }
    }
    render(){
        return(
           <Router>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/">
                        <Chat/>
                    </Route>
                </Switch>
            </Router>       
        
        )
    }
}
ReactDOM.render(<App/>,document.getElementById("root"));
