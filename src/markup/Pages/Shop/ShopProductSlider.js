import React, { Component } from "react";
import {Link} from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 
import Slider from "react-slick";

import item1 from './../../../images/product/product/item1.jpg';
import item2 from './../../../images/product/product/item2.jpg';
import item3 from './../../../images/product/product/item3.jpg';
import item4 from './../../../images/product/product/item4.jpg';
import item5 from './../../../images/product/product/item5.jpg';


import thumb1 from './../../../images/product/product/thumb/item1.jpg';
import thumb2 from './../../../images/product/product/thumb/item2.jpg';
import thumb3 from './../../../images/product/product/thumb/item3.jpg';
import thumb4 from './../../../images/product/product/thumb/item4.jpg';
import thumb5 from './../../../images/product/product/thumb/item5.jpg';

//Light Gallery on icon click 
const Iconimage = props => {
	const { openLightbox } = useLightbox()
	return (
    <Link  to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="mfp-link" >
      <i className="ti-fullscreen"></i>
    </Link>
  )
}

export default class ShopProductSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nav1: null,
			nav2: null
		};
    }

	componentDidMount() {
		this.setState({
			nav1: this.slider1,
			nav2: this.slider2
		});
	}

	render() {
		var settings = {		
			arrows: false,
			centerMode: false,
			
        };	
		return (
			<div>
				<SimpleReactLightbox>
					<SRLWrapper >
						<Slider
							asNavFor={this.state.nav2}
							ref={slider => (this.slider1 = slider)}
							className="owl-carousel owl-theme owl-btn-center-lr m-b5 owl-btn-1 primary"
							{...settings}
						>	
					
							<div>
								<div className="item ">
									<div className="mfp-gallery">
										<div className="dlab-box">
											<div className="dlab-thum-bx dlab-img-overlay1 ">
												<img src={item1} alt="" style={{width:"100%"}} />
												<div className="overlay-bx">
													<div className="overlay-icon">
														<Iconimage />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<div className="item">
									<div className="mfp-gallery">
										<div className="dlab-box">
											<div className="dlab-thum-bx dlab-img-overlay1 ">
												<img src={item2} alt="" />
												<div className="overlay-bx">
													<div className="overlay-icon">
														<Iconimage />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<div className="item">
									<div className="mfp-gallery">
										<div className="dlab-box">
											<div className="dlab-thum-bx dlab-img-overlay1 ">
												<img src={item3} alt="" />
												<div className="overlay-bx">
													<div className="overlay-icon">
														<Iconimage />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<div className="item">
									<div className="mfp-gallery">
										<div className="dlab-box">
											<div className="dlab-thum-bx dlab-img-overlay1 ">
												<img src={item4} alt="" />
												<div className="overlay-bx">
													<div className="overlay-icon">
														<Iconimage />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<div className="item">
									<div className="mfp-gallery">
										<div className="dlab-box">
											<div className="dlab-thum-bx dlab-img-overlay1 ">
												<img src={item5} alt="" />
												<div className="overlay-bx">
													<div className="overlay-icon">
														<Iconimage />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>	
						</Slider>
					</SRLWrapper >			
				</SimpleReactLightbox>
				<Slider
					asNavFor={this.state.nav1}
					ref={slider => (this.slider2 = slider)}
					slidesToShow={4}
					swipeToSlide={true}
					focusOnSelect={true}
					className="owl-carousel owl-theme owl-none"
					{...settings}
				>
					<div>
						<div className="item p-1">
							<div className="dlab-media">
								<img src={thumb1} alt="" />
							</div>
						</div>
					</div>	
					<div>
						<div className="item p-1">
							<div className="dlab-media">
								<img src={thumb2} alt="" />
							</div>
						</div>
					</div>
					<div>
						<div className="item p-1">
							<div className="dlab-media">
								<img src={thumb3} alt="" />
							</div>
						</div>
					</div>
					<div>
						<div className="item p-1">
							<div className="dlab-media">
								<img src={thumb4} alt="" />
							</div>
						</div>
					</div>
					<div>
						<div className="item p-1">
							<div className="dlab-media">
								<img src={thumb5} alt="" />
							</div>
						</div>
					</div>	
				</Slider>
			</div>
		);
	}
}