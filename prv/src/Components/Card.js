import React from "react"


class Card extends React.Component{
    
    render() 
        {
       return (
<div class="single_item">
	   
       <div className="goren_div">
           <img src={"https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
       </div>
		
		<div className="dolen_div">
			<div className="author_date">
				<span className="link_holder"> Created by: <a href="#"> {"tuka ke si stoi avtor"} </a></span>
				
			</div>

			<div className="title_description">
    			<a href="#"><h2>Delicious food.</h2></a>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, dolores velit maiores excepturi nihil nemo laboriosam doloribus!</p>
			</div>

			<div className="comments">
				<div className="right">
       <span className="comment_icon"><a href="#">Comments:</a> </span>
       <span>  0</span>
				</div>
			</div>

			<div class="tags">
    			<p> <a href="#">Views: {Date(2020)}</a>  </p>
				
                
    		</div>

		</div>
</div>

        )
    }
}
export default Card