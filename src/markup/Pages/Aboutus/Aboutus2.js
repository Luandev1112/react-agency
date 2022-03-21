import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';

// var bg1 = require('images/banner/bnr2.jpg');
import bnr1 from './../../../images/banner/bnr1.jpg';
import bnr2 from './../../../images/background/bg1.png';
import about1 from './../../../images/about/pic1.jpg';
import about2 from './../../../images/about/pic2.jpg';
import about3 from './../../../images/about/pic3.jpg';
import bnr3 from './../../../images/pattern/pic1.jpg';
import work1 from './../../../images/our-work/pic1.jpg';
import work3 from './../../../images/our-work/pic3.jpg';
import work5 from './../../../images/our-work/pic5.jpg';
import bnr4 from './../../../images/background/bg1.jpg';

const imageblog =[
	{image: work1, title:'Understand the situation',},
	{image: work3, title:'Bring the experience to life',},
	{image: work5, title:'Strategise chart the course',},
];
const counterBlog = [
	{icon: <i className="icon flaticon-bar-chart text-primary" />, num: '4922',  title: 'Completed Projects',},	
	{icon: <i className="icon flaticon-avatar text-primary" />, num: '2934',    title: 'Happy Clients',},	
	{icon: <i className="icon flaticon-file text-primary" />, num: '2296',   title: 'Questions Answered',},	
	{icon: <i className="icon flaticon-pen text-primary" />, num: '1343', title: 'Ordered Coffees',},	
];

class Aboutus2 extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
                        <PageTitle motherMenu='About Us 2' activeMenu='About Us 2' />
                    </div>
                    <div className="content-block">
						<div className="section-full bg-white content-inner" style={{ backgroundImage: "url(" + bnr2 + ")" }}>
                            <div className="container">
                                <div className="section-content">
                                    <div className="row">
                                        <div className="col-6 col-lg-3 col-md-6 col-sm-6">
                                            <div className="icon-bx-wraper">
                                                <div className="icon-md text-black m-b20">
                                                    <Link to ={"#"} className="icon-cell text-black"><i className="flaticon-trophy"></i></Link>
                                                </div>
                                                <div className="icon-content m-b30">
                                                    <h5 className="dlab-tilte">Elegant / Unique design</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                                </div>
                                            </div>
                                            <div className="icon-bx-wraper m-b30">
                                                <div className="icon-md text-black m-b20">
                                                    <Link to ={"#"} className="icon-cell text-black"><i className="flaticon-technology"></i></Link>
                                                </div>
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">Different Layout Type</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-6 col-sm-6">
                                            <div className="icon-bx-wraper">
                                                <div className="icon-md text-black m-b20">
                                                    <Link to ={"#"} className="icon-cell text-black"><i className="flaticon-bar-chart"></i></Link>
                                                </div>
                                                <div className="icon-content m-b30">
                                                    <h5 className="dlab-tilte">Make it Simple</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                                </div>
                                            </div>
                                            <div className="icon-bx-wraper  m-b30">
                                                <div className="icon-md text-black m-b20">
                                                    <Link to ={"#"} className="icon-cell text-black"><i className="flaticon-devices"></i></Link>
                                                </div>
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">True Responsiveness</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-6 col-sm-6 m-b30">
                                            <div className="dlab-media dlab-img-overlay6 gradient radius-sm">
                                                <img src={about1} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-6 col-sm-6" >
                                            <div className="dlab-media dlab-img-overlay6 gradient radius-sm">
                                                <img src={about2} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full ">
                            <div className="container-fluid">
                                <div className="row dzseth">
                                    <div className="col-lg-6 col-md-6 col-xs-12 p-a0 img-fix">
                                        <img src={about3} alt="" className="img-cover" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-xs-12 bg-black-light p-lr0 dis-tbl">
                                        <div className="p-a30 dis-tbl-cell">
                                            <div className="max-w500 m-auto p-tb30">
                                                <div className="row">
                                                    <div className="col-lg-12 text-white">
                                                        <h2>We provide high quality and cost effective services</h2>
                                                        <h5 className="m-b30">Since our foundation in 2005 our goal has been to use digital technology to create experiences.</h5>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 m-b30 text-gray">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                                        <Link to ={"#"} className="site-button radius-xl outline white">Read More <i className="fa fa-long-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-full content-inner" style={{ backgroundImage: "url(" + bnr3 + ")" }}>
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2 className="text-uppercase m-b10">About Agency</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div className="row text-center">
									{imageblog.map((item,index)=>(
										<div className="col-lg-4 col-md-4 col-sm-6 m-b30" key={index}>
											<div className="dlab-box">
												<div className="dlab-media dlab-img-effect rotate"> <Link to ={"#"}><img src={item.image} alt="" /></Link> </div>
												<div className="dlab-info p-a30 border-1 bg-white">
													<h5 className="dlab-title m-t0"><Link to ={"#"}>{item.title}</Link></h5>
													<p className="m-b0">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur...</p>
												</div>
											</div>
										</div>
									))}
                                </div>
                            </div>
                        </div>

                        <div className="section-full content-inner overlay-primary bg-img-fix text-white" style={{ backgroundImage: "url(" + bnr4 + ")" }}>
                            <div className="container">
                                <div className="section-content">
                                    <div className="row">
										{counterBlog.map((data,index)=>(
											<div className="col-6 col-lg-3 col-md-6 col-sm-6 col-12 m-b30" key={index}>
												<div className="counter-style-1">
													<div className="">{data.icon}<span className="counter"><CountUp end={data.num} duration={4}/></span></div>
													<span className="counter-text">{data.title}</span>
												</div>
											</div>
										))}	
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full p-tb80">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="text-center max-w600 m-auto ">
                                            <div className="m-b20"><i className="fa fa-quote-left font-45 text-primary"></i></div>
                                            <h4 className="text-uppercase font-weight-700 font-30">We would love to hear about start your new project?</h4>
                                            <Link to={"#"} className="site-button radius-xl outline outline-2"><span className="p-lr10">Start New Projects</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />

            </>
        )
    }
}
export default Aboutus2;