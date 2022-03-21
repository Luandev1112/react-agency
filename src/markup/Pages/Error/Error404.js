import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';

import bnr1 from '../../../images/banner/bnr1.jpg';


const Error404 =()=> {
	let resizeMargin = () => {
		var bgImag =  "background-image: url("+ bnr1 + ");";
		var screenHeight = window.innerHeight;
		document.getElementsByClassName('full-height')[0].setAttribute("style", bgImag+'height:'+screenHeight+'px;'); 
	};
		
	useEffect(() => {
		resizeMargin();
		window.addEventListener('resize', resizeMargin);
	}, []);
	return (
		<>
			<div className="dlab-bnr-inr full-height overlay-black-dark" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
				<div className="container">
					<div className="dlab-bnr-inr-entry align-m">
						<div className="row max-w700 dz_error-404 text-white m-auto">
							<div className="col-lg-4 m-tb30">
								<div className="dz_error" style={{backgroundColor:'#6cc000'}}>404</div>
							</div>
							<div className="col-lg-8 m-b30">
								<h2 className="error-head">Something went wrong !</h2>
								<p className="font-16">
									We are sorry but it appears that the page you are looking for could not be found. We are working on it and we will get it fixed as soon as possible.</p>
								<p className="font-16">You can go back to the Main Page by clicking the button.</p>
								<Link to={"./"} className="site-button">Go To Home</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
    
}
export default Error404;
