import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle'
import HomeOwlSlider2 from './../../Element/HomeOwlSlider2';
import ImgCarouselContent from './../../Element/ImgCarouselContent';
//Images
import bnr from './../../../images/banner/bnr2.jpg';
import bnr1 from './../../../images/background/bg1.jpg';
import bnr2 from './../../../images/background/bg1.png';
import bg15 from './../../../images/background/bg15.jpg';

import {wraperBlog, wraperBox2, wraperBox3, wraperBox4,
wraperBox5, wraperBox6, wraperBox7, wraperBox8,
dlabBox, dlabBox2,} from './DataFile';

class ShortIconBox extends Component {
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

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr + ")" }}>
						<PageTitle motherMenu="Icon Box"  activeMenu="Icon Box" />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        {/* <!-- Our Services --> */}
                        <div className="section-full content-inner-2">
                            <div className="sort-title-bx" data-name="Element Style 1">Element Style 1 <i className="fa fa-angle-double-right"></i></div>
                            <div className="development-box">
                                <div className="container">
									<HomeOwlSlider2 />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Services --> */}
                        <div className="section-full content-inner-2 overlay-primary bg-img-fix" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
                            <div className="sort-title-bx text-white" data-name="Element Style 2">Element Style 2 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
										<ImgCarouselContent />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full content-inner bg-white">
                            <div className="sort-title-bx" data-name="Element Style 3">Element Style 3 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row m-b30">
									{wraperBlog.map((item,index)=>(
										<div className="col-lg-4 col-md-4 col-sm-6 m-b30" key={index}>
											<div className="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
												<div className="icon-sm m-b20"> <Link to={"#"} className="icon-cell">{item.icon}</Link> </div>
												<div className="icon-content">
													<h5 className="dlab-tilte text-uppercase">{item.title}</h5>
													<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
													<Link to={"#"} className="site-button">Site Button</Link>
												</div>
											</div>
										</div>
									))}	
                                </div>
                                <div className="row">
									{wraperBox2.map((item,index)=>(	
										<div className="col-lg-3 col-md-6 col-sm-6 m-b30" key={index}>
											<div className="icon-bx-wraper  left">
												<div className="icon-sm text-primary m-b20"><Link to={"#"} className="icon-cell text-primary">{item.icon}</Link> </div>
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
                        <div className="section-full bg-black-light content-inner">
                            <div className="sort-title-bx text-white" data-name="Element Style 4">Element Style 4 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
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
                        {/* <!-- About Us --> */}
                        <div className="section-full content-inner">
                            <div className="sort-title-bx" data-name="Element Style 5">Element Style 5 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row ">
									{wraperBox3.map((item,index)=>(
										<div className="col-md-4 col-sm-6 m-b30" key={index}>
											<div className="icon-bx-wraper expertise  bx-style-1 p-a30 center">
												<div className="icon-lg m-b20"> <Link to={"#"} className="icon-cell">{item.icon}</Link> </div>
												<div className="icon-content">
													<h5 className="dlab-tilte text-uppercase"><Link to={"#"}>{item.title}</Link></h5>
													<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
												</div>
											</div>
										</div>
									))}	
                                </div>
                                <div className="row serv">
									{wraperBox4.map((item,index)=>(
										<div className="col-lg-2 col-md-4 col-sm-6 m-b30">
											<div className="icon-bx-wraper expertise  bx-style-1 p-lr10 p-tb20 center">
												<div className="icon-bx-sm bg-primary radius m-b20">
													<Link to={"#"} className="icon-cell"><i className="flaticon-devices"></i></Link>
												</div>
												<div className="icon-content">
													<h5 className="dlab-tilte"><Link to={"#"}>Custom Applications</Link></h5>
												</div>
											</div>
										</div>
									))}
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Services --> */}
                        {/* <!-- Our Awesome Services --> */}
                        <div className="section-full bg-blue-light content-inner about-us-box" style={{ backgroundImage: "url(" + bg15 + ")" }}>
                            <div className="sort-title-bx" data-name="Element Style 6">Element Style 6 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row">
									{dlabBox2.map((item, index)=>(
										<div className="col-lg-3 col-md-6 col-sm-6 " >
											<div className="dlab-box-bg m-b30 box-hover fly-box" style={{ backgroundImage: "url(" + item.image + ")" }}>
												<div className="icon-bx-wraper center p-lr20 p-tb30">
													<div className="text-primary">
														<span className="icon-cell icon-lg">{item.icon}</span>
													</div>
													<div className="icon-content m-b20">
														<h5 className="dlab-tilte">{item.title}</h5>
														<p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
													</div>
													<Link to={"#"} className="site-button">Read More</Link>
												</div>
											</div>
										</div>
									))}
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Awesome Services End --> */}
                        <div className="section-full facility bg-gray">
                            <div className="sort-title-bx text-white" data-name="Element Style 7">Element Style 7 <i className="fa fa-angle-double-right"></i></div>
                            <div className="row m-a0">
								{wraperBox5.map((item,index)=>(
									<div className="col-lg-4 col-md-12 col-sm-12 p-a0" key={index}>
										<div className="icon-bx-wraper left bg-primary text-white p-a70 dlab-box-icon">
											<div className="icon-lg">
												<div className="icon-cell">
													<div>
														<span>
														{item.icon}
														{item.icon}	
														</span>
													</div>
												</div>
											</div>
											<div className="icon-content">
												<h4 className="dlab-tilte">{item.title}</h4>
												<p>Perspiciatis unde omnis ist natus error sit voluptatem accusantium loremque tium totam rem aperiam eaque</p>
											</div>
										</div>
									</div>
								))}	
                            </div>
                        </div>
                        {/* <!-- Our Awesome Services --> */}
                        <div className="section-full bg-white content-inner" style={{ backgroundImage: "url(" + bnr2 + ")" }}>
                            <div className="sort-title-bx" data-name="Element Style 8">Element Style 8 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="section-content">
                                    <div className="row">
										{wraperBox8.map((item,index)=>(
											<div className="col-6 col-lg-3 col-md-6 col-sm-6">
												<div className="icon-bx-wraper">
													<div className="icon-md text-black m-b20">
														<Link to={"#"} className="icon-cell text-black">{item.icon1}</Link>
													</div>
													<div className="icon-content m-b30">
														<h5 className="dlab-tilte">{item.title1}</h5>
														<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
													</div>
												</div>
												<div className="icon-bx-wraper m-b30">
													<div className="icon-md text-black m-b20">
														<Link to={"#"} className="icon-cell text-black">{item.icon2}</Link>
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">{item.title2}</h5>
														<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
													</div>
												</div>
											</div>
										))}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Awesome Services End --> */}
                        {/* <!-- Why Chose Us --> */}
                        <div className="section-full content-inner overlay-primary about-service bg-img-fix" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
                            <div className="sort-title-bx text-white" data-name="Element Style 9">Element Style 9 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row text-white">
									{wraperBox7.map((item,index)=>(
										<div className="col-lg-4 col-md-4 col-sm-6 m-b30" key={index}>
											<div className="icon-bx-wraper bx-style-1 p-a30 center">
												<div className="icon-lg text-white m-b20"> <Link to={"#"} className="icon-cell text-white">{item.icon}</Link> </div>
												<div className="icon-content">
													<h5 className="dlab-tilte text-uppercase">{item.title}</h5>
													<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
												</div>
											</div>
										</div>
									))}	
                                </div>
                            </div>
                        </div>
                        <div className="section-full content-inner">
                            <div className="sort-title-bx" data-name="Element Style 10">Element Style 10 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row">
									{wraperBox6.map((item,index)=>(
										<div className="col-lg-4 col-md-12 col-sm-12 m-b30"  key={index}>
											<div className="icon-bx-wraper bx-style-1 bg-white p-a30 left">
												<div className="icon-md text-primary m-b20">
													<Link to={"#"} className="icon-cell">{item.icon}</Link>
												</div>
												<div className="icon-content">
													<h5 className="dlab-tilte text-uppercase">{item.title}</h5>
													<p>Web design aorem apsum dolor  dolore magna aliquam erat volutpat.Claritas est etiam processus.</p>
												</div>
											</div>
										</div>
									))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default ShortIconBox;