import React, { Component } from 'react';
import Header from './../Layout/Header1';
import Footer from './../Layout/Footer1';
import PageTitle from './../Layout/PageTitle';
import SectionCounter from './../Element/SectionCounter';
import TestimonialCarousel from './../Element/TestimonialCarousel';
import FormStyle from './../Element/FormStyle';

//Images
import rocket from './../../images/rocket.png';
import bnr from './../../images/banner/bnr7.jpg';
import tamplate from './../../images/tamplate.png';
import bg1 from './../../images/background/bg1.jpg';
import bgmap from './../../images/background/bg-map.jpg';

 
const BlogLeft = ({ title, number }) => {
   return (
		<>
			<div className="line-left clearfix">
                <div className="line-left-box">
					<div className="line-content-box ">
						<h4 className="min-title text-uppercase text-primary m-t0 m-b15">{title}</h4>
						<p className="font-16">
							We at Dream Spa provide various services to the nature of the clients. we can talk.
						</p>
					</div>
					<div className="line-num bg-primary-dark">{number}</div>
				</div>
			</div>	
		</>
    );
};
const BlogRight = ({ title, number }) => {
   return (
		<>
			<div className="line-right clearfix">
                <div className="line-right-box">
					<div className="line-content-box ">
						<h4 className="min-title text-uppercase text-primary m-t0 m-b15">{title}</h4>
						<p className="font-16">
							We at Dream Spa provide various services to the nature of the clients. we can talk.
						</p>
					</div>
					<div className="line-num bg-primary-dark">{number}</div>
				</div>
			</div>	
		</>
    );
};

class ProjectManagement extends Component {
    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr + ")" }}>
                        <PageTitle motherMenu='Project Management' activeMenu='Project Management' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        {/* <!-- About Us --> */}
                        <div className="section-full content-inner-1">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h4 className="text-gray-dark m-b10">Start A Project</h4>
                                    <h2 className="box-title m-tb0">
										Information Flow in the Right Direction + Keeping all concerned in the loop = Effective Project Management
										<span className="bg-primary"></span>
									</h2>
                                    <p>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
									</p>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <img src={rocket} alt="" className="fa faa-horizontal animated" />
                                        <h5 className="text-primary">Start Project</h5>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="time-line clearfix">
                                            <BlogLeft title='Project Analysis' number='1' />  
											<BlogRight title='Project Kick Off Meetings' number='2' />
											<BlogLeft title='Clear, Correct & Concise Information' number='3' />
											<BlogRight title='Single Point of Contact' number='4' />
											<BlogLeft title='Multiple Communication Channels' number='5' />
											<BlogRight title='Project Workflow Accessibility' number='6' />
											<BlogLeft title='Privacy & Security' number='7' />
											<BlogRight title='Modern Project Management Tools' number='8' />
											<BlogLeft title='Proactive & Upfront' number='9' />								   
											<BlogRight title='Weekly/ Fortnightly Reviews' number='10' />
											<BlogLeft title='Complete Documentation' number='11' />								   
											<BlogRight title='Status Reports' number='12' />									
											<BlogLeft title='Respect & Flexibility' number='13' />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 text-center">
                                        <h5 className="text-primary">END</h5>
                                        <div className="arrow-bx fa faa-horizontal animated"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <img src={tamplate} alt="" />
                            </div>
                        </div>
                        {/* <!-- Our Services --> */}
						 {/* <!-- Why Chose Us --> */}
							<SectionCounter />
                        {/* <!-- Why Chose Us End --> */}
                        {/* <!-- Testimonials --> */}
                        <div className="section-full content-inner" style={{ backgroundImage:"url(" + bgmap + ")",backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                            <div className="container">
                                <div className="section-head text-center">
                                    <h2 className="box-title m-tb0">Our Testimonials<span className="bg-primary"></span></h2>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                                </div>
                                <div className="section-content m-b30 	">
								 <TestimonialCarousel /> 
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonials END --> */}
                        {/* <!-- Get in touch --> */}
                        <div className="section-full overlay-primary-dark bg-img-fix" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                            <FormStyle />
                        </div>
                        {/* <!-- Get in touch --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default ProjectManagement;