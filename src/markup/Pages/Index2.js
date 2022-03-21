import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header1';
import Footer from './../Layout/Footer1';
import CountUp from 'react-countup';
//Carousel 
import TestimonialStyle2 from './ShortCode/TestimonialStyle2';
import LatestBlogSlider from './../Element/LatestBlogSlider';
import Index7Slider from './../Element/Index7Slider';
import {PortfolioItem} from './ShortCode/ProtfolioStyle3';

//Images
import about1 from './../../images/about-us/img4.jpg'; 
import about2 from './../../images/about-us/img2.jpg'; 
import about3 from './../../images/about-us/img3.jpg';

import services1  from './../../images/our-services/pic1.jpg';
import services2  from './../../images/our-services/pic2.jpg';
import services3  from './../../images/our-services/pic3.jpg';
import services4  from './../../images/our-services/pic4.jpg'; 

import pcimg  from './../../images/pc.png'; 
import bg2  from './../../images/background/bg2.jpg'; 

const wraperBlog = [
	{icon: <i className="ti-headphone-alt" />, title: 'Market forecast',},
	{icon: <i className="ti-desktop" />, title: 'Most Versatile',},
	{icon: <i className="ti-ruler-pencil" />, title: 'Most Versatile',},
];
const wraperBlog2 = [
	{icon: <i className="ti-desktop" />, title: 'Lifetime Updates',},
	{icon: <i className="ti-ruler-pencil" />, title: 'Fast Supports',},
	{icon: <i className="ti-palette" />, title: 'Interactive Elements',},
	{icon: <i className="ti-file" />, title: 'Flexible Layoute',},
];

const counterBlog1 = [
	{icon: <i className="icon flaticon-bar-chart text-primary" />, num: '7652',  title: 'Completed Projects',},	
	{icon: <i className="icon flaticon-avatar text-primary" />, num: '4562',    title: 'Happy Clients',},	
	{icon: <i className="icon flaticon-file text-primary" />, num: '3569',   title: 'Questions Answered',},	
	{icon: <i className="icon flaticon-pen text-primary" />, num: '2089', title: "Ordered Coffee's",},	
];
const dlabBox=[
	{icon: <i className="ti-ruler-pencil" />, title:'Creative design', image: services1,  },
	{icon: <i className="ti-heart" />, title:'Just Easy Way', image: services2,  },
	{icon: <i className="ti-brush-alt" />, title:'Creative design', image: services3,  },
	{icon: <i className="ti-mouse-alt" />, title:'Flexible Layout', image: services4,  },
];

class Index2 extends Component {

    componentDidMount() {  
		var GalleryCategory = document.querySelectorAll('.box-hover');
		var fch = [].slice.call(GalleryCategory);
		
		for (var y = 0; y < fch.length; y++) {
            fch[y].addEventListener('mouseenter', function () { 
				galleryActive(this);
			});
        }
        
		function galleryActive(current) 
		{
            fch.forEach(el => el.classList.remove('active'));
			
			setTimeout(() => {
				 current.classList.add('active');
			},  100); 
		}
    }
    render() {
        return (
            <>
                <Header />

                <div className="page-content">
					{ /* <ReactRevSlider2 /> */}
					<div className="owl-slider-banner main-slider dz-style-1">
						<Index7Slider />
					</div>	
                    {/* <!-- About Us --> */}
                    <div className="section-full content-inner bg-white">
                        <div className="container">
                            <div className="max-w800 m-auto text-center">
                                <h6>About Digital Agency</h6>
                                <h4 className="m-b50 ">The Agency corporate's vision is to continue to grow and challenge convention through our spirit, scientific advancements, forward-thinking leadership, and collaborative approach.</h4>
                            </div>
                            <div className="row">
								{wraperBlog.map((item,index)=>(
									<div className="col-lg-4 col-md-6 col-sm-6 m-b30" key={index}>
										<div className="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
											<div className="icon-sm m-b20"> <Link to={"#"} className="icon-cell">{item.icon}</Link> </div>
											<div className="icon-content">
												<h5 className="dlab-tilte text-uppercase">{item.title}</h5>
												<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
												<Link to={'about-1'} className="site-button">Site Button</Link>
											</div>
										</div>
									</div>
								))}
                            </div>
                        </div>
                    </div>
                    {/* <!-- About Us End--> */}
                    {/* <!-- Services --> */}
                    <div className="section-full about-section bg-white">
                        <div className="container-fluid">
                            <div className="row dzseth">
                                <div className="bg-primary col-xl-3 p-a0 col-md-6 col-lg-6 col-xs-12 d-flex dis-tbl">
                                    <div className="p-a30 text-white dis-tbl-cell align-self-center">
                                        <p className="font-weight-600 m-b10">create best website</p>
                                        <h4 className="font-weight-700">Extremely well organized with perfect coding</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text.</p>
                                        <Link to={'#'} className="site-button white outline outline-2">Read More</Link>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 p-a0 col-xs-12 d-flex">
                                    <img src={about1} className="abt-img img-cover" alt="" />
                                </div>
                                <div className="bg-primary col-xl-3 p-a0 col-md-6 col-lg-6 col-xs-12 d-flex dis-tbl">
                                    <div className="p-a30 text-white dis-tbl-cell align-self-center">
                                        <p className="font-weight-600 m-b10">create best website</p>
                                        <h4 className="font-weight-700">Extremely well organized with perfect coding</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text.</p>
										<Link to={'#'} className="site-button white outline outline-2">Read More</Link>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 p-a0 col-xs-12 d-flex">
                                    <img src={about2} className="abt-img img-cover" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Services END --> */}
                    {/* <!-- About Us --> */}
                    <div className="section-full content-inner bg-white">
                        <div className="container">
                            <div className="row m-b50 equal-wraper2">
                                <div className="col-xl-6 col-lg-6 col-md-12 equal-col" >
                                    <img src={about3} className="object-cover radius-sm" alt="" />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 dis-tbl equal-col">
                                    <div className="dis-tbl-cell">
                                        <h5 className="text-primary m-b5">With graceful feature, create a modern design</h5>
                                        <h2 className="font-weight-500 m-t0 m-b10">Gorgeous website template for online presence</h2>
                                        <h6 className="font-weight-400 m-b30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</h6>
                                        <div className="row">
											{wraperBlog2.map((item,index)=>(
												<div className="col-lg-6 col-md-6 col-sm-6 m-b30">
													<div className="icon-bx-wraper  left">
														<div className="icon-sm text-primary m-b20"> 
															<Link to={"#"} className="icon-cell text-primary">{item.icon}</Link>
														</div>
														<div className="icon-content">
															<h5 className="dlab-tilte">{item.title}</h5>
															<h6 className="font-weight-400">Lorem ipsum dolor sit elit nonummy dolor is.</h6>
														</div>
													</div>
												</div>
											))}
										</div>
                                    </div>
                                </div>
                            </div>
                            <div className="dlab-divider bg-gray-dark"><i className="icon-dot c-square"></i></div>
                            <div className="row m-t30">
								{counterBlog1.map((data,index)=>(
									<div className="col-lg-3 col-md-6 col-sm-6  m-b30 " >
										<div className="counter-style-1">
											<div className="">
												{data.icon}
												<span className="counter"><CountUp end={data.num} /></span>
											</div>
											<span className="counter-text">{data.title}</span>
										</div>
									</div>
								))}
                            </div>
                        </div>
                    </div>
                    {/* <!-- About Us --> */}
                    {/* <!-- Team And Process --> */}
                    <div className="section-full bg-black-light content-inner">
                        <div className="container">
                            <div className="max-w600 m-auto text-center m-b50 text-white">
                                <h6 className="font-weight-300 m-t0">Why Choose Us?</h6>
                                <h3>Provide you a website which is full of extreme feature.</h3>
                            </div>
                            <div className="row">
                                {dlabBox.map((item, index)=>(
									<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
										<div className="dlab-box-bg m-b30 box-hover" style={{ backgroundImage: "url(" + item.image + ")" }}>
											<div className="icon-bx-wraper center p-lr20 p-tb30">
												<div className="text-primary m-b30">
													<span className="icon-cell icon-sm">{item.icon}</span>
												</div>
												<div className="icon-content">
													<h5 className="dlab-tilte">{item.title}</h5>
													<p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
												</div>
											</div>
											<div className="icon-box-btn text-center">
												<Link to={"#"} className="site-button btn-block">Read More</Link>
											</div>
										</div>
									</div>
								))}
                            </div>
                        </div>
                    </div>
                    {/* <!-- Team And Process END --> */}
                    {/* <!-- Portfolio --> */}
						<div className="section-full bg-white content-inner-1 portfolio">
							<div className="container-fluid">
								<PortfolioItem />
							</div>
						</div>			
                    {/* <!-- Portfolio End --> */}
                    {/* <!-- Map And Form --> */}
                    <div className="section-full bg-white content-inner-2 ">
                        <div className="container">
                            <div className="row equal-wraper3">
                                <div className="col-lg-5 equal-col dis-tbl m-b30">
                                    <div className="dis-tbl-cell  m-b30">
                                        <h2 className="m-t0 m-b10">Build your website with extra functionality</h2>
                                        <ul className="list-angle-right">
                                            <li>fully focused on accessibility</li>
                                            <li>Based on modern design concept</li>
                                            <li>impressive and attractive design with graceful features</li>
                                            <li>More creative with smoothness and flexibility </li>
                                            <li>Unlimited power and customization possibilities</li>
                                        </ul>
                                        <Link to={'#'} className="site-button black outline outline-2">Read More <i className="ti-arrow-right m-l10"></i></Link>
                                    </div>
                                </div>
                                <div className="col-lg-7 equal-col" >
                                    <img src={pcimg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Map And Form END --> */}

                    {/* <!-- Clients Words --> */}
                    <div className="section-full overlay-primary-middle content-inner bg-img-fix" style={{ backgroundImage: "url(" + bg2 + ")" }}>
                        <div className="container">
                            <div className="max-w600 m-auto text-center m-b30 text-white">
                                <h6 className="m-t0">What people say</h6>
                                <h2 className="m-t0">Clients Words</h2>
                            </div>
                            <div className="section-content m-b30">
								<TestimonialStyle2  />
                            </div>
                        </div>
                    </div>
                    {/* <!-- Clients Words END --> */}
                    <div className="section-full bg-white content-inner">
                        <div className="container">
                            <div className="max-w600 m-auto text-center m-b30">
                                <h6 className="m-t0">Publish what you think</h6>
                                <h2 className="m-t0">Latest Blogs</h2>
                            </div>
                            <LatestBlogSlider />
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
export default Index2;