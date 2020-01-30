import React from 'react'
import Header from "./Clicks/Header"
import Card from "./Components/Card";
import Grid from "./Components/Grid"
import Home from "./Clicks/Home";
import TopWeekly from "./Clicks/TopWeekly"
import TopFavorites from "./Clicks/TopFavorites"
import { Route, Switch, Link } from "react-router-dom";



class App extends React.Component {
  constructor() {
    super();
    this.state= {
      
    }
  }
 

  render() {
    return (
    <div className="Container">
    
    <Header/>

    <Route path="/Home" component={Home}/>
    <Route path="/TopWeekly" component={TopWeekly}/>
    <Route path="/TopFavorites" component={TopFavorites}/>

    
    </div>
      
    )//return
  }//render

}// clasa
  
export default App 