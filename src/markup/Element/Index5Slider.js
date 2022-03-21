import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";

import Slider8 from './../../images/main-slider/slide8.jpg';
import Slider7 from './../../images/main-slider/slide7.jpg';


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

class Index5Slider extends Component{
	
	render(){
		var settings = {		
			arrows: true,
			dots: false,
            slidesToShow: 1,
			fade: true,	
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
			
			<Slider className="owl-slider owl-carousel owl-theme owl-none " {...settings}>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={Slider8} className="w-100" alt=""/></div>
					<div className="slide-content ">
						<div className="slide-content-box container">
							<div className="max-w600 ">
								<h4 className="font-weight-400">Dream Big</h4>
								<h2 className="text-Black font-weight-600">Inspiring Solutions</h2>
								<p>We are passionate of deep understanding of management and communication and how to interact with the digital world is the true value we provide. We help you in all the stages of realization of your digital products.</p>
								<Link to ={"#"} className="site-button button-md radius-xl mr-2">Get Started</Link>
								<Link to ={"#"} className="site-button button-md outline outline-2 radius-xl black">How It Work</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={Slider7} className="w-100" alt=""/></div>
					<div className="slide-content ">
						<div className="slide-content-box container">
							<div className="max-w600 ">
								<h4 className="font-weight-400">Dream Big</h4>
								<h2 className="text-Black font-weight-600">Inspiring Solutions</h2>
								<p>We are passionate of deep understanding of management and communication and how to interact with the digital world is the true value we provide. We help you in all the stages of realization of your digital products.</p>
								<Link to ={"#"} className="site-button button-md radius-xl mr-2">Get Started</Link>
								<Link to ={"#"} className="site-button button-md outline outline-2 radius-xl black">How It Work</Link>
							</div>
						</div>
					</div>
				</div>
			</Slider>	
		)
		
	}
	
}

export default Index5Slider;