import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header1';
import Footer from './../Layout/Footer1';
import PageTitle from './../Layout/PageTitle';
import ImgCarousel from './../Element/ImgCarousel'
import ClientCarousel from './../Element/ClientCarousel'

//Images 
import bnr1 from './../../images/banner/bnr2.jpg';

class ProjectDetails extends Component {
    /* componentDidMount(){
        window.abc();
    } */
    render() {
        return (
            <>
                <Header />
                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
                        <PageTitle motherMenu='Project Details' activeMenu='Project Details' />  
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        {/* <!-- Project Details --> */}
                        <div className="section-full content-inner-2">
                            <div className="container">
                                <div className="row m-b40">
                                    <div className="col-lg-6 col-md-6 m-b20">
                                        <h2 className="m-b10 m-t0">Project : National Title Insurance Company</h2>
                                        <h5 className="m-b20">Since our foundation in 2005 our goal has been to use digital technology to create experiences.</h5>
                                        <p className="m-b10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                        <p className="m-b10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                        <Link to={"#"} className="site-button radius-xl outline">Read More <i className="fa fa-long-arrow-right"></i></Link>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
										<ImgCarousel /> 
                                    </div>
                                </div>
                                <div className="row m-b50">
                                    <div className="col-md-6 m-b20">
                                        <div className="p-a30 bg-gray">
                                            <h6>Project Name: <span className="m-l10 font-weight-300 text-gray-dark"> Business Accounting</span></h6>
                                            <h6>Client: <span className="m-l10 font-weight-300 text-gray-dark"> Company Name Inc.</span></h6>
                                            <h6>Project Commencement Date: <span className="m-l10 font-weight-300 text-gray-dark"> August 18, 2018</span></h6>
                                            <h6>Priject Completion Date: <span className="m-l10 font-weight-300 text-gray-dark"> August 18, 2018</span></h6>
                                            <h6>Project url: <span className="m-l10 font-weight-300 text-gray-dark">www.example.com</span></h6>
                                        </div>
                                    </div>
                                    <div className="col-md-6 align-self-center">
                                        <h5 className="text-black fw5 m-b10">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close.</h5>
                                        <p className="m-b0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row m-b30">
                                    <div className="col-lg-4 col-md-12 align-self-center">
                                        <h5>Who We Are</h5>
                                        <h2 className="font-weight-700">Leading The Way In Consulting Business For Over 25 Years</h2>
                                    </div>
                                    <div className="col-lg-8 col-md-12">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-6">
                                                <div className="icon-bx-wraper bx-style-1 p-t10 p-b30 p-lr20 m-b30 center br-col-b1 bg-white">
                                                    <svg className="radial-progress" data-percentage="90" viewBox="0 0 80 80">
                                                        <circle className="incomplete" cx="40" cy="40" r="35"></circle>
                                                        <circle className="complete" cx="40" cy="40" r="35" style={{"strokeDashoffset":"39.58406743523136"}}></circle>
                                                        <text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">90%</text>
                                                    </svg>
                                                    <div className="icon-content">
                                                        <h5 className="font-weight-500">Day Of Experience</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6">
                                                <div className="icon-bx-wraper bx-style-1 p-t10 p-b30 p-lr20 m-b30 center br-col-b1 bg-white">
                                                    <svg className="radial-progress" data-percentage="49" viewBox="0 0 80 80">
                                                        <circle className="incomplete" cx="40" cy="40" r="35"></circle>
                                                        <circle className="complete" cx="40" cy="40" r="35" style={{"strokeDashoffset":"39.58406743523136"}}></circle>
                                                        <text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">90%</text>
                                                    </svg>
                                                    <div className="icon-content">
                                                        <h5 className="font-weight-500">Awards Winning</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6">
                                                <div className="icon-bx-wraper bx-style-1 p-t10 p-b30 p-lr20 m-b30 center br-col-b1 bg-white">
                                                    <svg className="radial-progress" data-percentage="65" viewBox="0 0 80 80">
                                                        <circle className="incomplete" cx="40" cy="40" r="35"></circle>
                                                        <circle className="complete" cx="40" cy="40" r="35" style={{"strokeDashoffset":"39.58406743523136"}}></circle>
                                                        <text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">90%</text>
                                                    </svg>
                                                    <div className="icon-content">
                                                        <h5 className="font-weight-500">Happy Clients</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
								<ClientCarousel /> 
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
export default ProjectDetails;