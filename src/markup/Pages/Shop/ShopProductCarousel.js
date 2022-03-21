import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";

//Images

import item1 from './../../../images/product/item1.jpg';
import item2 from './../../../images/product/item2.jpg';
import item3 from './../../../images/product/item3.jpg';
import item4 from './../../../images/product/item4.jpg';


const contentBlog =[
	{images: item1, }, 
	{images: item2, }, 
	{images: item3, }, 
	{images: item4, }, 
	{images: item2, }, 
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

class ShopProductCarousel extends Component{
	render(){
		var settings = {		
			arrows: true,
            slidesToShow: 4,		
            infinite: true,
			dots: false,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
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
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 768,
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
				<Slider className="img-carousel-content owl-carousel owl-btn-center-lr owl-btn-1 primary" {...settings}>
					{contentBlog.map((item,index)=>(
						<div className="item p-3" key={index}>
							<div className="item-box">
								<div className="item-img">
									<img src={item.images} alt="" />
									<div className="item-info-in">
										<ul>
											<li><Link to={"#"}><i className="ti-shopping-cart"></i></Link></li>
											<li><Link to={"#"}><i className="ti-eye"></i></Link></li>
											<li><Link to={"#"}><i className="ti-heart"></i></Link></li>
										</ul>
									</div>
								</div>
								<div className="item-info text-center text-black p-a10">
									<h6 className="item-title text-uppercase font-weight-500"><Link to={"#"}>Product Title</Link></h6>
									<ul className="item-review">
										<li><i className="fa fa-star mr-1"></i></li>
										<li><i className="fa fa-star mr-1"></i></li>
										<li><i className="fa fa-star mr-1"></i></li>
										<li><i className="fa fa-star-half-o mr-1"></i></li>
										<li><i className="fa fa-star-o mr-1"></i></li>
									</ul>
									<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
								</div>
							</div>
						</div>
					))}					
				</Slider>
			</>
		)
	}
	
}

export default ShopProductCarousel;