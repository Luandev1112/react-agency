import React, {Component} from 'react';
import Slider from "react-slick";

import pic1 from './../../images/blog/grid/pic1.jpg';
import pic2 from './../../images/blog/grid/pic2.jpg';


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
  	<div className="owl-nav">
		<div className="owl-next flaticon-right-arrow"  onClick={onClick}/>
	</div>	
  );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
		<div className="owl-nav">
			<div className=" owl-prev flaticon-left-arrow" onClick={onClick} style={{zIndex:1}}/>
		</div>
    );
} 

class ImgCarousel extends Component{	
	render(){
		var settings = {		
			arrows: true,
            slidesToShow: 1,	
			speed: 1500,
			fade: true,
			navSpeed: 1500,	
            infinite: true,
			autoplay: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 1,
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 1,
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
					slidesToShow: 1,
				  }
				}
			]
        };
		return(
			<Slider className="owl-fade-one owl-loaded  owl-btn-center-lr owl-btn-1 black owl-drag" {...settings}>
				<div className="item">
					<img src={pic1} alt=""/>
				</div>
				<div className="item">
					<img src={pic2} alt=""/>
				</div>
			</Slider>			
		)
		
	}
	
}

export default ImgCarousel;