import React, {Component} from 'react';
import Slider from "react-slick";

import logo1 from './../../images/client-logo/logo/logo1.jpg';
import logo2 from './../../images/client-logo/logo/logo2.jpg';
import logo3 from './../../images/client-logo/logo/logo3.jpg';
import logo4 from './../../images/client-logo/logo/logo4.jpg';
import logo5 from './../../images/client-logo/logo/logo5.jpg';


const imgblog =[
	{image:logo1, }, {image:logo2, }, {image:logo3, },
	{image:logo1, }, {image:logo4, }, {image:logo5, },
	{image:logo3, },
]

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

class ClientCarousel extends Component{	
	render(){
		var settings = {		
			arrows: true,
            slidesToShow: 6,	
            infinite: true,
			autoplay: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 6,
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 5,
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 4,
				  }
				},
				{
				  breakpoint: 591,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 360,
				  settings: {
					slidesToShow: 2,
				  }
				},
			]
        };
		return(
			<Slider className="client-logo-carousel owl-carousel owl-btn-center-lr owl-btn-3" {...settings}>
				{imgblog.map((item,index)=>(	
					<div className="item p-3" key={index}>
						<div className="br-col-b1 border-1">
							<img src={item.image} alt="" />
						</div>
					</div>
				))}
			</Slider>			
		)
		
	}
	
}

export default ClientCarousel;