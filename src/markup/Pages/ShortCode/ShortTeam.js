import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';

import bnr2 from './../../../images/banner/bnr2.jpg';
import team1 from './../../../images/our-team/pic1.jpg';
import team2 from './../../../images/our-team/pic2.jpg';
import team3 from './../../../images/our-team/pic3.jpg';
import team4 from './../../../images/our-team/pic4.jpg';
import team5 from './../../../images/our-team/pic5.jpg';
import team6 from './../../../images/our-team/pic6.jpg';
import team7 from './../../../images/our-team/pic7.jpg';
import team8 from './../../../images/our-team/pic8.jpg';

const teamBlog = [
	{image: team1, image2: team5, },
	{image: team2, image2: team6, },
	{image: team3, image2: team7, },
	{image: team4, image2: team8, }, 
];

class ShortTeam extends Component {


    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr2 + ")" }}>
						<PageTitle motherMenu='Our Team' activeMenu='Our Team' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        <div className="section-full content-inner bg-gray">
                            <div className="sort-title-bx" data-name="Element Style 1">Element Style 1 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 text-center section-head">
                                        <h2 className="font-weight-700 m-b0">Our Team</h2>
                                        <p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                    </div>
                                </div>
                                <div className="row">
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
                        </div>
                        <div className="section-full text-center bg-gray content-inner">
                            <div className="sort-title-bx text-left" data-name="Element Style 2">Element Style 2 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2>Meet Our Team</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div className="row">
									{teamBlog.map((item,index)=>(
										<div className="col-lg-3 col-md-6 col-sm-6 m-b5" key={index}>
											<div className="dlab-box">
												<div className="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm"> <img src={item.image2} alt="" />
													<div className="overlay-bx">
														<div className="overlay-icon">
															<ul className="dlab-social-icon">
																<li><Link to={"#"} className="fa text-white fa-facebook"></Link></li>
																<li><Link to={"#"} className="fa text-white fa-twitter"></Link></li>
																<li><Link to={"#"} className="fa text-white fa-linkedin"></Link></li>
																<li><Link to={"#"} className="fa text-white fa-facebook"></Link></li>
															</ul>
														</div>
													</div>
												</div>
												<div className="dlab-title-bx p-a10">
													<h5 className="text-black m-a0">John Doe</h5>
													<span className="clearfix">Creative Director</span>
												</div>
											</div>
										</div>
									))}
                                </div>
                            </div>
                        </div>
                        {/* <!-- Team Section END --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default ShortTeam;