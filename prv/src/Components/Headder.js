import React from "react"
import hub from "../images/hub.png";
import {Button,Navbar,FormControl,Form,Nav} from 'react-bootstrap'
import { BrowserRouter as Router,Route, Switch, Link } from "react-router-dom";


class Header extends React.Component{
    constructor() {
      super();

    }
  render() {
    return(
      <Navbar className="Navbar" variant="dark">
    <Navbar.Brand className="logo, prostor" href="#home"> <img style={{width:100, borderRadius:4}} src={hub} alt={"crunchHub"}/>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Router>
      <Nav.Link  href="/home">Home</Nav.Link>
      <Nav.Link  href="/TopFavorites">Top Favorites</Nav.Link>
      <Nav.Link  href="/topweekly">Top Weekly</Nav.Link>
      </Router>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button className= "Button-size" variant="outline-info" >
      <img  className="Search-icon-size" src= {"https://cdn1.iconfinder.com/data/icons/modern-flat-app-gui-1/50/Search-512.png"} alt={"search"} /></Button>
    </Form>
  </Navbar>

    )
  }
}

export default Headder


