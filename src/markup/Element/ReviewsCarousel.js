import React, {Component} from 'react';
import Slider from "react-slick";

//Images
import pic1 from './../../images/testimonials/pic1.jpg';
import pic2 from './../../images/testimonials/pic2.jpg';
import pic3 from './../../images/testimonials/pic3.jpg';

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

class ReviewsCarousel extends Component{
	render(){
		var settings = {		
			arrows: true,
            slidesToShow: 1,		
            infinite: true,
			dots: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 1,
				  }
				},
			]
        };
		return(
			<>
				<Slider className="testimonial-two-dots-bx  owl-btn-center-lr center-active-owl owl-btn-3" {...settings}>
					<div className="item">
						<div className="testimonial-9">
							<div className="testimonial-pic radius">
								<img src={pic1} alt="" width="100" height="100" />
							</div>
							<div className="testimonial-detail"> 
								<strong className="testimonial-name">Jone Deo</strong> 
								<span className="testimonial-position">Client Form MNC</span> 
							</div>
							<div className="testimonial-text">
								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.It is a long established fact that a reader will be distracted.</p>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="testimonial-9">
							<div className="testimonial-pic radius">
								<img src={pic2} alt="" width="100" height="100" />
							</div>
							<div className="testimonial-detail"> 
								<strong className="testimonial-name">David Matin</strong> 
								<span className="testimonial-position">Client Form IBM</span> 
							</div>
							<div className="testimonial-text">
								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.It is a long established fact that a reader will be distracted.</p>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="testimonial-9">
							<div className="testimonial-pic radius">
								<img src={pic3} alt="" width="100" height="100" />
							</div>
							<div className="testimonial-detail"> 
								<strong className="testimonial-name">David Matin</strong> 
								<span className="testimonial-position">Client Form IBM</span> 
							</div>
							<div className="testimonial-text">
								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.It is a long established fact that a reader will be distracted.</p>
							</div>
						</div>
					</div>
					
					
				</Slider>
			</>
		)
	}
	
}

export default ReviewsCarousel;