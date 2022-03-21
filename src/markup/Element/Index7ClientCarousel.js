import React, {Component} from 'react';
import Slider from "react-slick";

import logo1 from './../../images/client-logo/logo1.png';
import logo2 from './../../images/client-logo/logo2.png';
import logo3 from './../../images/client-logo/logo3.png';
import logo4 from './../../images/client-logo/logo4.png';


const imgblog =[
	{image:logo1, }, {image:logo2, }, {image:logo3, },
	{image:logo4, }, {image:logo2, },
]

/* function SampleNextArrow(props) {
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
}  */

class Index7ClientCarousel extends Component{	
	render(){
		var settings = {		
			arrows: false,
            slidesToShow: 4,	
            infinite: true,
			autoplay: true,
			speed: 2000,
			responsive: [
				
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 4,
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 4,
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
			<Slider className="img-carousel owl-carousel owl-none" {...settings}>
				{imgblog.map((item,index)=>(	
					<div className="item">
						<div className="client-logo text-center">
							<img src={item.image} alt="" />
						</div>
					</div>
				))}
			</Slider>			
		)
		
	}
	
}

export default Index7ClientCarousel;