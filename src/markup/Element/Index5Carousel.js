import React, {Component} from 'react';
import Slider from "react-slick";

//Images
import test1 from './../../images/testimonials/pic1.jpg';
import test2 from './../../images/testimonials/pic2.jpg';


const contentBlog =[
	{images: test1, }, 
	{images: test2,  }, 
	{images: test1, },  
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

class Index5Carousel extends Component{
	render(){
		var settings = {		
			arrows: false,
            slidesToShow: 2,		
            infinite: true,
			dots: false,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 2	,
				  }
				},
				{
				  breakpoint: 991,
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
				<Slider className="testimonial-box item-center1 owl-loaded owl-theme owl-carousel owl-none mfp-gallery owl-dots-black-full" {...settings}>
					{contentBlog.map((data,index)=>(
						<div className="testimonial-8">
							<div className="testimonial-text">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make [...]</p>
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<img src={data.images} width="100" height="100" alt="" />
								</div>
								<h5 className="testimonial-name m-t0 m-b5">Mr. Jone Deo</h5> 
								<span>Client</span> 
							</div>
						</div>
					))}					
				</Slider>
			</>
		)
	}
	
}

export default Index5Carousel;