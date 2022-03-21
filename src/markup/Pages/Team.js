import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header1';
import Footer from './../Layout/Footer1';
import PageTitle from './../Layout/PageTitle';
import {VisionBlog} from './Aboutus/Aboutus1';

import bnr from './../../images/banner/bnr3.jpg';
import pic1 from './../../images/our-team/pic1.jpg';
import pic2 from './../../images/our-team/pic2.jpg';
import pic3 from './../../images/our-team/pic3.jpg';
import pic4 from './../../images/our-team/pic4.jpg';

const teamBlog=[
	{images: pic1,}, {images: pic3,},
	{images: pic2,}, {images: pic4,},
]

class Team extends Component {
	componentDidMount() {
    }
    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr + ")" }}>
                        <PageTitle motherMenu='Our Team' activeMenu='Our Team'  />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="content-block">
                        {/* <!-- Team Section --> */}
                        <div className="section-full text-center bg-white content-inner-1">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2>Meet Our Team</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div className="row">
									{teamBlog.map((data,index)=>(
										<div className="col-lg-3 col-md-6 col-sm-6 m-b5" key={index}>
											<div className="dlab-box">
												<div className="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm"> 
													<img src={data.images} alt="" />
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
                        {/* <!-- Mission And Vision --> */}
							<VisionBlog />
                        {/* <!-- Mission And Vision END --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default Team;