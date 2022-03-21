import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";

import Slider1 from './../../images/main-slider/slide1.jpg';
import Slider2 from './../../images/main-slider/slide2.jpg';
import Slider3 from './../../images/main-slider/slide3.jpg';


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

class HomeOwlSlider extends Component{
	
	render(){
		var settings = {		
			arrows: true,
			dots: true,
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
					<div className="slide-item-img"><img src={Slider1} className="w-100" alt=""/></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white">
								<h2 className="text-white font-weight-400">We would great ideas into<br/> prodigious and innovative products. <br/></h2>
								<p>We are passionate of deep understanding of management and communication and how to interact with the digital world is the true value we provide. We help you in all the stages of realization of your digital products.</p>
								<Link to ={"#"} className="site-button m-r10 white button-lg">Get Started</Link>
								<Link to ={"#"} className="site-button outline outline-2 button-lg">How It Work</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={Slider3} className="w-100" alt=""/></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white">
								<h2 className="text-white font-weight-400">We would great ideas into<br/> prodigious and innovative products. <br/></h2>
								<p>We are passionate of deep understanding of management and communication and how to interact with the digital world is the true value we provide. We help you in all the stages of realization of your digital products.</p>
								<Link to ={"#"} className="site-button m-r10 white button-lg">Get Started</Link>
								<Link to ={"#"} className="site-button outline outline-2 button-lg">How It Work</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={Slider2} className="w-100" alt=""/></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white">
								<h2 className="text-white font-weight-400">Move with passion, perform best work<br/> and be pride, whatever you do. </h2>
								<p>A forward thinking representation for a research production and the ability to do it dynamically with broad stability and drive your business up to a higher level.</p>
								<Link to ={"#"} className="site-button m-r10 white button-lg">Get Started</Link>
								<Link to ={"#"} className="site-button outline outline-2 button-lg">How It Work</Link>
							</div>
						</div>
					</div>
				</div>
			</Slider>	
		)
		
	}
	
}

export default HomeOwlSlider;