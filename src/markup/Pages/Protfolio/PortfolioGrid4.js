import React, {Component,Fragment } from 'react';
import { Link } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';

//images
import bnr1 from './../../../images/banner/bnr8.jpg';
import {box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12} from './ProtfolioFullWidth';
const imageBlog = [
	{  Large: box1 ,  }, {  Large: box2 ,  }, {  Large: box3 ,  },
	{  Large: box4 ,  }, {  Large: box5 ,  }, {  Large: box6 ,  },
	{  Large: box7 ,  }, {  Large: box8 ,  }, {  Large: box9 ,  },
	{  Large: box11 , }, {  Large: box10 , }, {  Large: box12 , }, 
];

//Light Gallery on icon click 
const Iconimage = props => {
	const { openLightbox } = useLightbox()
	return (
    <Link  to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="mfp-link portfolio-fullscreen" >
      <i className="ti-fullscreen icon-bx-xs"></i>
    </Link>
  )
}

class PortfolioGrid4 extends Component{
	render(){
		return(
			<Fragment>	
				<Header />
				<div className="page-content bg-white">
					{/*  banner  */}
					<div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
						<PageTitle motherMenu="Portfolio Grid 4"  activeMenu="Portfolio Grid 4"  />
					</div>
					{/*  Section-1 Start  */}
					<div className="content-block">
						<div className="section-full content-inner-2 portfolio text-uppercase">	
							<div className="container">
								<div className="row">
									<div className="col-md-3">
										<div className="sticky-top">
											<h3>Our Mission</h3>
											<ul className="list-check primary">
												<li>Amet Sollicitudin Quam Dolor Mollis</li>
												<li>Diipiscing Vestibulum Nullam Venenatis</li>
												<li>Diipiscing Vestibulum</li>
												<li>Vehicula Vulputate Ligula Mollis</li>
											</ul>
											<h3>Core Values</h3>
											<ul className="list-check primary">
												<li>Amet Sollicitudin Quam Dolor Mollis</li>
												<li>Diipiscing Vestibulum Nullam</li>
												<li>Diipiscing Vestibulum Nullam Venenatis</li>
												<li>Vehicula Vulputate</li>
											</ul>
										</div>
									</div>
									
									<div className="col-md-9">
										<GalleryGrid />
									</div>
								</div>	
							</div>
						</div>
					</div>	
				</div>	
				<Footer />
			</Fragment>			
		)
	}
} 

function GalleryGrid(){
	return(
		<>
			<SimpleReactLightbox>
				<SRLWrapper >
					<ul className="row dlab-gallery-listing gallery-grid-4 gallery mfp-gallery port-style1">
						{imageBlog.map((item, index)=>(
							<li className="web design card-container col-lg-4 col-md-6 col-sm-6 p-a0" key={index}>
								<div className="dlab-box dlab-gallery-box">
									<div className="dlab-media dlab-img-overlay1 dlab-img-effect"> 
										<img src={item.Large} alt="" />
										<div className="overlay-bx">
											<div className="overlay-icon align-b text-white text-left">
												<div className="text-white text-left port-box">
													<h5>Herbal Beauty Salon</h5>
													<p>Branding and Identity</p>
													<Iconimage />
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
						))}		
					</ul>
				</SRLWrapper >	
			</SimpleReactLightbox>
		</>
	)
}
export {GalleryGrid};
export default PortfolioGrid4;
