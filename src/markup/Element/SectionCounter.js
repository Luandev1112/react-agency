import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import Counter from './Counter';

import bg1 from './../../images/background/bg1.jpg';

const iconBlog =[
	{icon: <i className="flaticon-pen" />,	   title: 'Creative',},
	{icon: <i className="flaticon-diamond" />, title: 'Innovative',},
	{icon: <i className="flaticon-devices" />, title: 'Functional',},
];

class SectionCounter extends Component{
	render(){
		return(
			<Fragment>
				<div className="section-full content-inner-1 overlay-primary about-service bg-img-fix" style={{ backgroundImage: "url(" + bg1 + ")" }}>
					<div className="container">
						<div className="section-head text-white text-center">
							<h2 className="box-title m-tb0 max-w800 m-auto">Amazing things happen to your business when we connect those dots of utility and value<span className="bg-primary"></span></h2>
							<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over</p>
						</div>
					</div>
					<div className="container">
						<div className="row text-white">
							{iconBlog.map((item, index)=> (
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
					<div className="choses-info text-white">
						<Counter />
					</div>
				</div>	
			</Fragment>
		)
	}
}
export default SectionCounter;