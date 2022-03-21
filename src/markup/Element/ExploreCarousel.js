import React, {Component} from 'react';
import Slider from "react-slick";
import {Link} from 'react-router-dom';

//Images
import industry1 from './../../images/our-services/industry/pic1.jpg';
import industry2 from './../../images/our-services/industry/pic2.jpg';
import industry3 from './../../images/our-services/industry/pic3.jpg';


const contentBlog =[
	{images: industry1, title: 'Tokyo Bridg',}, 
	{images: industry2, title: 'Baptist Church', }, 
	{images: industry3, title: 'Epcot Park', }, 
	{images: industry2, title: 'Tokyo Bridg', }, 
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

class ExploreCarousel extends Component{
	render(){
		var settings = {		
			arrows: true,
            slidesToShow: 3,		
            infinite: true,
			dots: false,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
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
				<Slider className="explore-carousel mfp-gallery owl-loaded owl-theme owl-carousel gallery owl-btn-center-lr owl-btn-2 primary " {...settings}>
					{contentBlog.map((data,index)=>(
						<div className="item p-3" key={index}>
							<div className="dlab-box">
								<div className="dlab-media dlab-img-effect rotate"> <Link to={"#"}><img src={data.images} alt="" /></Link> </div>
								<div className="dlab-info bg-white">
									<h5 className="dlab-title m-t0"><Link to={"#"}>{data.title}</Link></h5>
									<p className="m-b0">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur...</p>
								</div>
								<Link to={"#"} className="site-button btn-block d-flex justify-content-between white"><span>Read More</span> <i className="ti-arrow-right"></i></Link>
							</div>
						</div>
					))}					
				</Slider>
			</>
		)
	}
	
}

export default ExploreCarousel;