import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 

//Images
import watch1 from './../../images/watch/pic1.jpg';
import watch2 from './../../images/watch/pic2.jpg';
import watch3 from './../../images/watch/pic3.jpg';
import watch4 from './../../images/watch/pic4.jpg';


const contentBlog =[
	{images: watch1, },
	{images: watch2, },
	{images: watch3, },
	{images: watch4, },
]
//Light Gallery on icon click 
const Iconimage = props => {
	const { openLightbox } = useLightbox()
	return (
    <Link  to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="mfp-link portfolio-fullscreen" >
      <i className="ti-fullscreen icon-bx-xs"></i>
    </Link>
  )
}


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

class Index6Carousel extends Component{
	render(){
		var settings = {		
			arrows: false,
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
				<SimpleReactLightbox>
					<SRLWrapper >
						<Slider className="product-gallery-bx owl-loaded owl-theme owl-carousel mfp-gallery owl-dots-black-full " {...settings}>
							{contentBlog.map((data,index)=>(
								<div className="item" key={index}>
									<div className="dlab-box dlab-gallery-box">
										<div className="dlab-media dlab-img-overlay1 dlab-img-effect dlab-img-effect "> 
											<img src={data.images} alt="" /> 
											<div className="overlay-bx ">
												<div className="overlay-icon align-m text-white text-center"> 
													<div className="text-white text-center port-box">
														<Iconimage />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}					
						</Slider>
					</SRLWrapper >
				</SimpleReactLightbox>
			</>
		)
	}
	
}

export default Index6Carousel;