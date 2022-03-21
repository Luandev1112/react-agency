import React, {Component} from 'react';
import Slider from "react-slick";

//Images
import pic1 from './../../images/testimonials/pic1.jpg';
import pic2 from './../../images/testimonials/pic2.jpg';
import pic3 from './../../images/testimonials/pic3.jpg';
import Videoimg from './../../images/video/pic1.jpg';



class TestimonialCarousel extends Component{
	render(){
		var settings = {		
			arrows: false,
            slidesToShow: 3,		
            infinite: true,
			dots: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 2,
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
					<div className="item">
						<div className="testimonial-8">
							<div className="testimonial-text">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make [...]</p>
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<img src={pic1} width="100" height="100" alt="" />
								</div>
								<h5 className="testimonial-name m-t0 m-b5">Mr. Jone Deo</h5> 
								<span>Client</span> 
							</div>
						</div>
					</div>
					<div className="item">
						<div className="testimonial-8">
							<div className="testimonial-text ">
								<div className="video-testimonial">
									<img src={Videoimg} alt="" />
									<div className="video-testimonial-play">
										<a href="https://www.youtube.com/watch?v=xqUM6DayZcw" className="popup-youtube video" title="Image Title Come Here"><i className="ti-control-play"></i></a>
									</div>
								</div>
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<img src={pic2} width="100" height="100" alt="" />
								</div>
								<h5 className="testimonial-name m-t0 m-b5">Mr. Jone Deo</h5>
								<span>Client</span>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="testimonial-8">
							<div className="testimonial-text">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make [...]</p>
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<img src={pic3} width="100" height="100" alt="" />
								</div>
								<h5 className="testimonial-name m-t0 m-b5">Mr. Jone Deo</h5>
								<span>Client</span>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="testimonial-8">
							<div className="testimonial-text ">
								<div className="video-testimonial">
									<img src={Videoimg} alt="" />
									<div className="video-testimonial-play">
										<a href="https://www.youtube.com/watch?v=xqUM6DayZcw" className="popup-youtube video" title="Image Title Come Here"><i className="ti-control-play"></i></a>
									</div>
								</div>
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<img src={pic2} width="100" height="100" alt="" />
								</div>
								<h5 className="testimonial-name m-t0 m-b5">Mr. Jone Deo</h5>
								<span>Client</span>
							</div>
						</div>
					</div>
					
				</Slider>
			</>
		)
	}
	
}

export default TestimonialCarousel;