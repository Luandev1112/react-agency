import React, { useEffect } from 'react';
import bnr from './../../images/under-construction.jpg';
import logo from './../../images/logo-black.png';

const UnderMaintenance =()=>  {
	let resizeMargin = () => {
		//var bgImag =  "background-image: url("+ bnr + ");";
		var screenHeight = window.innerHeight;
		document.getElementsByClassName('full-height')[0].setAttribute("style", 'height:'+ screenHeight+'px;'); 
	};
		
	useEffect(() => {
		resizeMargin();
		window.addEventListener('resize', resizeMargin);
	}, []);
	
	return (
		<>
			<div className="bg-white">
				<div className="under-construction" style={{"backgroundImage":"url("+ bnr +")",backgroundRepeat:'no-repeat',backgroundSize:"100%",backgroundPosition:"bottom"}}>
					<div className="container">
						<div className="row full-height">
							<div className="col-md-12 col-lg-12 text-center header-ind">
								<div className="">
									<div className="logo-header">
										<img src={logo} alt="" />
									</div>
								</div>
								<h2>
									<span>Site Under</span> <br /> Maintenance
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default UnderMaintenance;