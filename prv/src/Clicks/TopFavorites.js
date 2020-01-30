import React from "react"
import {Carousel} from 'react-bootstrap'
import Grid from "../Components/Grid"

const TopFavorites = () => {
    return( 
        <div className="TopFavorites"> 
  <p className='topFav'>Top Favorites</p>
  {/* prv */}
<Carousel>
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
export default TopFavorites