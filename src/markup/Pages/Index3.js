import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header2 from './../Layout/header2';
import Footer2 from './../Layout/footer2';
import {ConsultingBlog} from './ShortCode/ShortCounter'; 
import TestimonialStyle2 from './ShortCode/TestimonialStyle2'; 
import LineChart from './ShortCode/LineChart'; 
import {FormBlog} from './ShortCode/ShortForm'; 
import OurBlogSlider from './../Element/OurBlogSlider';
import Index3Slider from './../Element/Index3Slider';

//Images
import bg1 from './../../images/background/bg1.jpg';
import bg14 from './../../images/background/bg14.jpg';
import bg15 from './../../images/background/bg15.jpg';
import bg12 from './../../images/background/bg12.jpg';
import bg11 from './../../images/background/bg11.jpg';
import bg13 from './../../images/background/bg13.jpg';
import bg3 from './../../images/background/bg3.jpg';
import work1 from './../../images/our-work/pic1.jpg';
import work2 from './../../images/our-work/pic2.jpg';
import work3 from './../../images/our-work/pic3.jpg';
import work4 from './../../images/our-work/pic4.jpg';
import grid1 from './../../images/blog/grid/pic1.jpg';
import grid2 from './../../images/blog/grid/pic2.jpg';
import grid3 from './../../images/blog/grid/pic3.jpg';
import team1 from './../../images/our-team/pic1.jpg';
import team2 from './../../images/our-team/pic2.jpg';
import team3 from './../../images/our-team/pic3.jpg';
import team4 from './../../images/our-team/pic4.jpg';
import logo1 from './../../images/client-logo/logo/logo1.jpg';
import logo2 from './../../images/client-logo/logo/logo2.jpg';
import logo3 from './../../images/client-logo/logo/logo3.jpg';
import logo4 from './../../images/client-logo/logo/logo4.jpg';
import logo5 from './../../images/client-logo/logo/logo5.jpg';


const dlabBox=[
	{icon: <i className="flaticon-diamond" />, title:'Business', image: work1,  },
	{icon: <i className="flaticon-pen" />, title:'Consulting', image: work2,  },
	{icon: <i className="flaticon-file" />, title:'Finance', image: work3,  },
	{icon: <i className="flaticon-bar-chart" />, title:'Growth', image: work4,  },
];

const gridBlog = [
	{	image: grid1, icon: <i className="flaticon-money" />, title: 'Business Planning, Strategy & Execution', },
	{	image: grid2, icon: <i className="flaticon-bar-chart" />, title: 'Financial Projections And Analysis', },
	{	image: grid3, icon: <i className="flaticon-notebook" />, title: 'International Business Opportunities', },
];

const teamBlog = [
	{image: team1, },{image: team2, },{image: team3, },{image: team4, }, 
];

const logoBlog = [
	{ image: logo1},{ image: logo2},{ image: logo3},{ image: logo4},{ image: logo2},{ image: logo3},
	{ image: logo4},{ image: logo5},{ image: logo1},{ image: logo3},{ image: logo4},{ image: logo2},
	
];

class Index3 extends Component {

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
                <Header2 />

                <div className="page-content bg-white">
					
					<div className="owl-slider-banner main-slider dz-style-3">
						<Index3Slider />
					</div>	
                    {/* <!-- contact area --> */}
                    <div className="content-block">
                        {/* <!-- Our Awesome Services --> */}
                        <div className="section-full bg-blue-light content-inner about-us-box" style={{ backgroundImage: "url(" + bg15 + ")", backgroundSize: "cover" }}>
                            <div className="container">
                                <div className="row">
									{dlabBox.map((item, index)=>(
										<div className="col-lg-3 col-md-6 col-sm-6" key={index}>
											<div className="dlab-box-bg m-b30 box-hover fly-box" style={{ backgroundImage: "url(" + item.image + ")" }}>
												<div className="icon-bx-wraper center p-lr20 p-tb30">
													<div className="text-primary">
														<span className="icon-cell icon-lg">{item.icon}</span>
													</div>
													<div className="icon-content m-b20">
														<h5 className="dlab-tilte">{item.title}</h5>
														<p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
													</div>
													<Link to={'#'} className="site-button">Read More</Link>
												</div>
											</div>
										</div>
									))}
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Awesome Services End --> */}
                        <div className="section-full content-inner bg-img-fix" style={{ backgroundImage: "url(" + bg11 + ")" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12 text-center section-head">
                                        <h2 className="font-weight-700 max-w700 m-auto">Invest in Our Company and have Healthy Profits for Long Term</h2>
                                        <p className="m-b0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                                <div className="row">
									{gridBlog.map((item,index)=>(
										<div className="col-md-6 col-lg-4 col-sm-6 m-b30" key={index}>
											<div className="dlab-box">
												<div className="dlab-media dlab-img-overlay5"> <Link to={"#"}><img src={item.image} alt="" /></Link> </div>
												<div className="dlab-info p-a30 border-1 bg-white">
													<div className="icon-md text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary">{item.icon}</Link> <div></div></div>
													<h5 className="dlab-title m-t0"><Link to={"#"}>{item.title}</Link></h5>
													<p className="m-b15">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur Fusce varius [...] </p>
												</div>
											</div>
										</div>
									))}
                                </div>
                            </div>
                        </div>
                        <div className="section-full facility bg-gray">
                            <div className="row m-a0">
                                <div className="col-lg-4 col-md-12 col-sm-12 p-a0">
                                    <div className="icon-bx-wraper left bg-primary text-white p-a70 dlab-box-icon">
                                        <div className="icon-lg">
                                            <div className="icon-cell">
                                                <div>
                                                    <span>
                                                        <i className="ti-check-box"></i>
                                                        <i className="ti-check-box"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="dlab-tilte">Ensure Security</h4>
                                            <p>Perspiciatis unde omnis ist natus error sit voluptatem accusantium loremque tium totam rem aperiam eaque</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 p-a0">
                                    <div className="icon-bx-wraper left p-a70 dlab-box-icon">
                                        <div className="icon-lg">
                                            <div className="icon-cell">
                                                <div>
                                                    <span>
                                                        <i className="ti-user"></i>
                                                        <i className="ti-user"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="dlab-tilte">expert team</h4>
                                            <p>Perspiciatis unde omnis ist natus error sit voluptatem accusantium loremque tium totam rem aperiam eaque</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 p-a0">
                                    <div className="icon-bx-wraper left bg-primary text-white p-a70 dlab-box-icon">
                                        <div className="icon-lg">
                                            <div className="icon-cell">
                                                <div>
                                                    <span>
                                                        <i className="ti-headphone-alt"></i>
                                                        <i className="ti-headphone-alt"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="dlab-tilte">24/7 SUPPORT</h4>
                                            <p>Perspiciatis unde omnis ist natus error sit voluptatem accusantium loremque tium totam rem aperiam eaque</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full content-inner bg-img-fix" style={{ backgroundImage: "url(" + bg12 + ")" }}>
                            <div className="container">
                                <ConsultingBlog />
                            </div>
                        </div>
                        <div className="section-full content-inner-2 bg-primary bg-img-fix overlay-primary tax-info-chart" style={{ backgroundImage: "url(" + bg3 + ")" }}>
                            <div className="container">
                                <div className="row dzseth">
                                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex mb-4 mb-md-4 mb-lg-0" >
                                        <div className="chart-box">	
											<LineChart />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 dis-tbl d-flex">
                                        <FormBlog />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full content-inner-2 bg-img-fix" style={{ backgroundImage: "url(" + bg13 + ")" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 text-center section-head">
                                        <h2 className="font-weight-700 m-b0">Our Team</h2>
                                        <p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                    </div>
                                </div>
                                <div className="row m-b50">
									{teamBlog.map((item,index)=>(
										<div className="col-lg-3 col-md-6 col-sm-6 m-b30" key={index}>
											<div className="team-section">
												<img src={item.image} alt="" />
												<div className="team-content text-white">
													<p className="m-a0">Manager</p>
													<h6 className="text-uppercase text-black m-b0">John Deo</h6>
													<div className="dlab-divider bg-white mt-2 mb-2"></div>
													<ul className="list-inline m-a0">
														<li><Link to={"#"} className="text-white"><i className="fa fa-facebook"></i></Link></li>
														<li><Link to={"#"} className="text-white"><i className="fa fa-linkedin"></i></Link></li>
														<li><Link to={"#"} className="text-white"><i className="fa fa-instagram"></i></Link></li>
														<li><Link to={"#"} className="text-white"><i className="fa fa-twitter"></i></Link></li>
													</ul>
												</div>
											</div>
										</div>
									))}
                                </div>
                            </div>
                            <div className="container">
                                <div className="row ">
                                    <div className="col-lg-12 text-center section-head">
                                        <h2 className="m-b10">We lead the global rankings</h2>
                                        <h5 className="m-b0 font-weight-300 max-w600 m-auto">Our unmatched quality services are recognized by world's top research &amp; review companies</h5>
                                    </div>
                                </div>
                                <div className="row m-b30">
									{logoBlog.map((data,index)=>(
										<div className="col-md-2 col-sm-4 col-6 m-b30" key={index}>
											<div className="br-col-b1 border-1"><img src={data.image} alt="" /></div>
										</div>
									))}	
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <Link to={'#'} className="site-button button-md">View All Partner</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full content-inner-2 bg-gray bg-img-fix overlay-primary" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 text-center section-head text-white" >
                                        <h2 className="font-weight-700 text-white m-b0">Our Testimonial</h2>
                                        <p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
										<TestimonialStyle2 />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full content-inner bg-img-fix" style={{ backgroundImage: "url(" + bg14 + ")" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 text-center section-head">
                                        <h2 className="font-weight-700 m-b0">Our Blog</h2>
                                        <p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
										<OurBlogSlider />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- About Quotes End --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer2 />
            </>
        )
    }
}
export default Index3;