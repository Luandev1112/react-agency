import React,{Component} from 'react';
import Header from './../Layout/Header1';
import Footer from './../Layout/Footer1';
import HomeOwlSlider from './../Element/HomeOwlSlider';
import HomeOwlSlider2 from './../Element/HomeOwlSlider2';
import ImgCarouselContent from './../Element/ImgCarouselContent';
import HomeTab from './../Element/HomeTab';
import Counter from './../Element/Counter';
import PortfolioCarousel from './../Element/PortfolioCarousel';
import TestimonialCarousel from './../Element/TestimonialCarousel';
import FormStyle from './../Element/FormStyle';

//Images
import pic4 from './../../images/about/pic4.jpg';
import bgimg from './../../images/background/bg1.jpg';
import bgimg2 from './../../images/background/bg-map.jpg';
import bgimg3 from './../../images/background/bg1.jpg';


class Homepage extends Component{
		
	componentDidMount() {
		
	}	
	
	render(){
		return(
			<div className="page-wraper">
				<Header />
				<div className="page-content bg-white">
					{/*  Slider Banner */}
					<div className="owl-slider-banner main-slider">
						<HomeOwlSlider />
						{/*  Service   */}
						<div className="service-box-slide">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<ImgCarouselContent />
									</div>
								</div>
							</div>
						</div>
						{/*  Service End  */}
					</div>
					{/*  Slider Banner */}
					<div className="content-block">
                        {/* <!-- About Us --> */}
                        <div className="section-full bg-white content-inner-1 about-us">
                            <div className="container">
                                <div className="row ">
                                    <div className="col-lg-7 col-md-8">
                                        <div className="abuot-box row" >
                                            <div className="col-lg-4">
                                                <h2 className="box-title m-tb0">About Us<span className="bg-primary"></span></h2>
                                                <h4 className="text-gray-dark">We create unique experiences</h4>
                                            </div>
                                            <div className="col-lg-8">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-4 about-img" >
                                        <img src={pic4} data-tilt alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- About Us End --> */}
						{/* <!-- Our Services --> */}
                        <div className="section-full content-inner-2">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h4 className="text-gray-dark m-b10">Our Services</h4>
                                    <h2 className="box-title m-tb0">Web Development Services<span className="bg-primary"></span></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                            <div className="development-box">
                                <div className="container">
                                    <HomeOwlSlider2 />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Services --> */}
						{/* <!-- Why Chose Us --> */}
                        <div className="section-full content-inner-1 overlay-primary choseus-tabs  bg-img-fix" style={{ backgroundImage: "url(" + bgimg + ")" }}>
                            <div className="container">
                                <div className="section-head text-white text-center">
                                    <h2 className="box-title m-tb0">Why Chose Us<span className="bg-primary"></span></h2>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over</p>
                                </div>
                            </div>
							<HomeTab />
							<div className="choses-info text-white">
                                <Counter />
                            </div>
						</div>	
						{/* <!-- Why Chose Us End --> */}
						{/* <!-- Our Portfolio --> */}
                        <div className="section-full content-inner-1 mfp-gallery">
                            <div className="container-fluid">
                                <div className="section-head text-center">
                                    <h4 className="text-gray-dark m-b10">Our Portfolio</h4>
                                    <h2 className="box-title m-tb0">We work to innovate & are proud<br /> of what we've created<span className="bg-primary"></span></h2>
                                    <h5>YOU’LL LOVE TO SEE SOME OF OUR BEST PROJECTS. TAKE A LOOK!</h5>
                                </div>
                                    <PortfolioCarousel />
                            </div>
                        </div>
                        {/* <!-- Our Portfolio END --> */}
						{/* <!-- Testimonials --> */}
                        <div className="section-full content-inner" style={{ backgroundImage: "url(" + bgimg2 + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                            <div className="container">
                                <div className="section-head text-center">
                                    <h2 className="box-title m-tb0">Our Testimonials<span className="bg-primary"></span></h2>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                                </div>
                                <div className="section-content m-b30 ">
                                    <TestimonialCarousel />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonials END --> */}
						
						{/* <!-- Get in touch --> */}
                        <div className="section-full overlay-primary-dark bg-img-fix" style={{ backgroundImage: "url(" + bgimg3 + ")" }}>
                            <FormStyle />
                        </div>
                        {/* <!-- Get in touch --> */}
						
					</div>
				</div>	
				<Footer />
				
			</div>		
		)
	}
}
export default Homepage;