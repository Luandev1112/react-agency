import React, {Component} from 'react';
import Slider from "react-slick";

//Images
import pic1 from './../../images/our-services/pic1.jpg';
import pic2 from './../../images/our-services/pic2.jpg';
import pic3 from './../../images/our-services/pic3.jpg';

class SidebarCarousel extends Component{
	render(){
		var settings = {		
			arrows: false,
            slidesToShow: 1,		
            infinite: true,
			dots: true,
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
				  breakpoint: 480,
				  settings: {
					slidesToShow:1,
				  }
				}
			]
        };
		return(
			<>
				<Slider className="testimonial-box center-active-owl item-center owl-loaded owl-carousel owl-none  owl-dots-black-full " {...settings}>
					<div className="item"><img src={pic1} alt=""/></div>
					<div className="item"><img src={pic2} alt=""/></div>
					<div className="item"><img src={pic3} alt=""/></div>
				</Slider>
			</>
		)
	}
	
}

export default SidebarCarousel;