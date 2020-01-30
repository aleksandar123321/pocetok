import React from "react"
import {Carousel} from 'react-bootstrap'
import Grid from "../Components/Grid"

const TopWeekly = () => {
    return(
        <div> 
  <p className='topFav'>Top Weekly </p>
<Carousel >
  {/* prv */}
  <Carousel.Item style={{marginRight:"20px", marginLeft:"10px"}}>
  <Grid/> 
  </Carousel.Item>
  {/* dvtor */}
  <Carousel.Item>
  <Grid/> 
  </Carousel.Item>
  {/* tret  */}
  <Carousel.Item>
  <Grid/> 
  </Carousel.Item>
</Carousel>
</div>
        )
    }

export default TopWeekly
