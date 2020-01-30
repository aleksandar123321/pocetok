import React from "react";
import hub from "../images/hub.png";
import {Button,Navbar,FormControl,Form,Nav} from 'react-bootstrap';




class Headder extends React.Component{
    
  render() {
    return(

      <div>
      {/* slikata crunchHub od levo */}
      <Navbar className="Navbar" variant="dark">
    <Navbar.Brand className="logo, prostor" href=""> <img style={{width:100, borderRadius:4}} src={hub} alt={"crunchHub"}/>
    </Navbar.Brand>

      {/* navbar */}
    <Nav className="mr-auto">
      <Nav.Link  href="/Home">Home</Nav.Link>
      <Nav.Link  href="/TopFavorites">Top Favorites</Nav.Link>
      <Nav.Link  href="/TopWeekly">Top Weekly</Nav.Link>
      </Nav>

    {/* searchot so slikata za search */}
    <div className="search">
     <Form inline>
      <FormControl type="text" placeholder="Search for recipe..." className="mr-sm-2 all"  onClick="" />
    {/* searchot */}
    <Button className= "Button-size" variant="outline-info" >
      <img  className="Search-icon-size" src= {"https://cdn1.iconfinder.com/data/icons/modern-flat-app-gui-1/50/Search-512.png"} alt={"search"} /></Button>
    </Form>
    </div>    

  </Navbar>
  </div>

    )
  }
}

export default Headder


