import React from 'react'
import { BrowserRouter as Router, Switch, Route, useLocation, useHistory } from 'react-router-dom';
import PagePrincipal from "../pages/index";
import HomePage from "../components/HomePage/homePage";
import {TransitionGroup, CSSTransition} from 'react-transition-group'


export default function Routes(){
const location = useLocation();
const history = useHistory();
    return (
        <TransitionGroup>
        <CSSTransition key={location.key} className="transition" timeout={500}>   
        
        <Switch location={location}>
         <Route path="/" exact  component={HomePage}/>
        <Route path = "/index" exact component = {PagePrincipal}/>
        </Switch>
     
        </CSSTransition> 
        </TransitionGroup>
        );
}


