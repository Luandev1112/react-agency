import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { TabContent, TabPane, } from 'reactstrap';
import classnames from 'classnames';

import about4 from './../../images/about/pic4.jpg';

const Index4Tab = () =>{
	const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }	
	return(
		<>
			<div className="dez-tabs">
				<div className="m-auto text-center tab-market">
					<ul className="nav nav-tabs">
						<li>
							<Link to ={"#"} className= {classnames({ active : activeTab === '3'}) + ''} onClick={() => { toggle('3'); }}>
								<i className="ti-ruler-pencil"></i><span className="title-head">Web Design</span>
							</Link>
						</li>
						<li>
							<Link to ={"#"} className= {classnames({ active : activeTab === '2'}) + ''} onClick={() => { toggle('2'); }}>
								<i className="ti-desktop"></i><span className="title-head">Web Development</span>
							</Link>
						</li>
						<li>
							<Link to ={"#"} className= {classnames({ active : activeTab === '1'}) + ''} onClick={() => { toggle('1'); }}>
								<i className="ti-mobile"></i><span className="title-head">Mobile Applications</span>
							</Link>
						</li>
						<li>
							<Link to ={"#"} className= {classnames({ active : activeTab === '4'}) + ''} onClick={() => { toggle('4'); }}>
								<i className="ti-bar-chart"></i><span className="title-head">Internet marketing</span>
							</Link>
						</li>
					</ul>
				</div>
				<div className="tab-content m-t50 text-white">
					<TabContent activeTab={activeTab}>
						<TabPane tabId="1">
							<div id="web-design" className="tab-pane show fade">
								<div className="row">
									<div className="col-lg-8 m-b30">
										<div className="box">
											<h3 className="font-40"><span className="font-weight-300">Make business with us</span> & become beautiful</h3>
											<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
											<Link to={"#"} className="site-button radius-xl button-md">Read More</Link>
										</div>
									</div>
									<div className="col-lg-4">
										<img src={about4} className="radius-sm" alt="" />
									</div>
								</div>
							</div>
						</TabPane>	
						<TabPane tabId="2">
							<div id="web-development" className="tab-pane show fade">
								<div className="row">
									<div className="col-lg-4 m-b30">
										<img src={about4} className="radius-sm" alt="" />
									</div>
									<div className="col-lg-8">
										<div className="box">
											<h3 className="font-40"><span className="font-weight-300">Make business with us</span> & become beautiful</h3>
											<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
											<Link to={"#"} className="site-button radius-xl button-md">Read More</Link>
										</div>
									</div>
								</div>
							</div>
						</TabPane>	
						<TabPane tabId="3">
							<div id="mobile-app" className="tab-pane active show fade">
								<div className="row">
									<div className="col-lg-8 m-b30">
										<div className="box">
											<h3 className="font-40"><span className="font-weight-300">Make business with us</span> & become beautiful</h3>
											<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
											<Link to={"#"} className="site-button radius-xl button-md">Read More</Link>
										</div>
									</div>
									<div className="col-lg-4">
										<img src={about4} className="radius-sm" alt="" />
									</div>
								</div>
							</div>
						</TabPane>	
						<TabPane tabId="4">
							<div id="internet-marketing" className="tab-pane show fade">
								<div className="row">
									<div className="col-lg-4 m-b30">
										<img src={about4} className="radius-sm" alt="" />
									</div>
									<div className="col-lg-8">
										<div className="box">
											<h3 className="font-40"><span className="font-weight-300">Make business with us</span> & become beautiful</h3>
											<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
											<Link to={"#"} className="site-button radius-xl button-md">Read More</Link>
										</div>
									</div>
								</div>
							</div>
						</TabPane>	
					</TabContent>		
				</div>
			</div>	
		</>
	)
} 

export default Index4Tab;