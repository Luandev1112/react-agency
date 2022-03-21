import React,{Fragment, useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import bnr from './../../../images/background/bg5.jpg';

const ComingSoon1 = () => {
	const [timerDays, setTimerDays] = useState('00');	
	const [timerHours, setTimerHours] = useState('00');	
	const [timerMinutes, setTimerMinutes] = useState('00');	
	const [timerSeconds, setTimerSeconds] = useState('00');	
	let interval = useRef();
	
	const startTimer = () =>{
		/* Website Launch Date */ 
		var WebsiteLaunchDate = new Date();
		var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		WebsiteLaunchDate.setMonth(WebsiteLaunchDate.getMonth() + 1);
		WebsiteLaunchDate =  WebsiteLaunchDate.getDate() + " " + monthNames[WebsiteLaunchDate.getMonth()] + " " + WebsiteLaunchDate.getFullYear();
		/* Website Launch Date END */
		
		//alert(WebsiteLaunchDate);
	
		//const countdownDate = new Date('May 02, 2021 00:00:00').getTime();	
		const countdownDate = new Date(WebsiteLaunchDate+' 23:5').getTime();	
		interval = setInterval(()=>{
			const now = new Date().getTime();
			const distance = countdownDate - now;
			
			const days = Math.floor(distance / (1000*60*60*24));
			const hours = Math.floor((distance % (1000*60*60*24)/(1000*60*60)));
			const minutes = Math.floor((distance % (1000*60*60)/(1000*60)));
			const seconds = Math.floor((distance % (1000*60))/1000);
			
			if(distance < 0){
				//stop our timer
				clearInterval(interval.current);
			} else {
				//update timer
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}	
		},1000);
	};
	
	//componentDidMount
 	useEffect(()=>{
		startTimer();
		return()=>{
			clearInterval(interval.current);
		};
	});
	return(
		<Fragment>
			<div className="content-block">
				<div className="coming-soon bg-light" style={{backgroundImage:"url("+ bnr + ")", backgroundPosition: "center", backgroundSize: "cover" }}>
					<div className="countdown-box">
						<div className="button-home">
							<Link to={"./"} className="btn btn-primary"><i className="fa fa-home"></i> userthemes@gmail.com</Link>
						</div>
						<div className="countdown">
							<div className="date">
								<span className="time days text-primary">{timerDays}</span>
								<div><strong>Days</strong></div>
							</div>
							<div className="date">
								<span className="time hours text-primary">{timerHours}</span>
								<div><strong>Hours</strong></div>
							</div>
							<div className="date">
								<span className="time mins text-primary">{timerMinutes}</span>
								<div><strong>Minutes</strong></div>
							</div>
							<div className="date">
								<span className="time secs text-primary">{timerSeconds}</span>
								<div><strong>Second</strong></div>
							</div>
						</div>
					</div>
					<div className="coming-head">
						<h2><span>Coming soon</span><strong>days</strong></h2>
						<div className="subscribe-form p-a0 max-w400">
							<form>
								<div className="input-group">
									<input name="text" className="form-control radius-no bg-black" placeholder="Search For Pages" type="text" />
									<span className="input-group-btn">
										<button type="submit" className="btn btn-primary rounded-xl"><i className="fa fa-search"></i></button>
									</span> 
								</div>
							</form>
						</div>
					</div>
				</div>
			</div> 
		</Fragment>
	)
	
}

export default ComingSoon1; 



