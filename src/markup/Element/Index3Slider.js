import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";

import Slider5 from './../../images/main-slider/slide5.jpg';
import Slider4 from './../../images/main-slider/slide4.jpg';


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
  	<div className="owl-nav">
		<div className="owl-next la la-angle-right"  onClick={onClick}/>
	</div>	
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
	<div className="owl-nav">
		<div className=" owl-prev la la-angle-left" onClick={onClick} style={{zIndex:1 }}/>
	</div>
  );
}

class Index3Slider extends Component{
	
	render(){
		var settings = {		
			arrows: true,
			dots: false,
            slidesToShow: 1,			
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
				  breakpoint: 991,
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
			
			<Slider className="owl-slider owl-carousel owl-theme owl-none" {...settings}>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={Slider5} className="w-100" alt=""/></div>
					<div className="slide-content overlay-primary-dark">
						<div className="slide-content-box container">
							<div className="max-w700 text-white ">
								<h5 className="sub-title">#1 best agency Theme </h5>
								<h2 className="dz-title">Creative Services <br/>for your Company </h2>
								<div className="slide-btns"> 
									<Link to={"#"} className="site-button button-md white">Get A Qutoe</Link>
									<Link to={"#"} className="site-button button-md outline outline-2 white">Talk To US</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={Slider4} className="w-100" alt=""/></div>
					<div className="slide-content overlay-primary-dark">
						<div className="slide-content-box container">
							<div className="max-w700 text-white ">
								<h5 className="sub-title">#1 best agency Theme </h5>
								<h2 className="dz-title">Creative Services <br/>for your Company </h2>
								<div className="slide-btns"> 
									<Link to={"#"} className="site-button button-md white">Get A Qutoe</Link>
									<Link to={"#"} className="site-button button-md outline outline-2 white">Talk To US</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Slider>	
		)
		
	}
	
}

export default Index3Slider;