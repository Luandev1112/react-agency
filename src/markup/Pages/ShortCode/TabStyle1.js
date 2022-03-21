import React,{Fragment,  useState} from 'react';
import {Link} from 'react-router-dom';
import { TabContent, TabPane, } from 'reactstrap';
import classnames from 'classnames';

import test1 from './../../../images/testimonials/pic1.jpg';
import test2 from './../../../images/testimonials/pic2.jpg';
import test3 from './../../../images/testimonials/pic3.jpg';

const commentBlog = [
	{image: test1, }, {image: test2, }, {image: test3, } 
];          
            
const TabStyle1 = (props) => {
	const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
	  
	return(
		<Fragment>			
			
                <div className="row">
					<div className="col-md-12">
						<div className="dlab-tabs product-description tabs-site-button">
							<ul className="nav nav-tabs">
								<li>
									<Link to={"#"} className= {classnames({ active : activeTab === '1'}) + ''} onClick={() => { toggle('1'); }}><i className="fa fa-globe"></i> Description</Link>
								</li>
								<li>
									<Link to={"#"}	className={classnames({active:activeTab === '2'}) + ''} onClick={()=>{ toggle('2');}}><i className="fa fa-photo"></i> Additional Information</Link>
								</li>
								<li>
									<Link to={"#"}	className={classnames({active:activeTab === '3'}) + ''} onClick={()=>{ toggle('3');}}><i className="fa fa-cog"></i> Product Review</Link>
								</li>
								
							</ul>
						
							<TabContent activeTab={activeTab}>
								<TabPane tabId="1">
									<p className="m-b10">Suspendisse et justo. Praesent mattis commyolk augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis  commyolk augue aliquam ornare augue.</p>
									<p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
									<ul className="list-check primary">
										<li>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and </li>
										<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </li>
									</ul>
								</TabPane>
								<TabPane tabId="2">
									<table className="table table-bordered" >
										<tr>
											<td>Size</td>
											<td>Small, Medium & Large</td>
										</tr>
										<tr>
											<td>Color</td>
											<td>Pink & White</td>
										</tr>
										<tr>
											<td>Rating</td>
											<td><span className="rating-bx"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </span> </td>
										</tr>
										<tr>
											<td>Waist</td>
											<td>26 cm</td>
										</tr>
										<tr>
											<td>Length</td>
											<td>40 cm</td>
										</tr>
										<tr>
											<td>Chest</td>
											<td>33 inches</td>
										</tr>
										<tr>
											<td>Fabric</td>
											<td>Cotton, Silk & Synthetic</td>
										</tr>
										<tr>
											<td>Warranty</td>
											<td>3 Months</td>
										</tr>
										<tr>
											<td>Chest</td>
											<td>33 inches</td>
										</tr>
									</table>
								</TabPane>
								<TabPane tabId="3">
									<div id="comments" >
										<ol className="commentlist">
											{commentBlog.map((item,index)=>(
												<li className="comment" key={index}>
													<div className="comment_container"> <img className="avatar avatar-60 photo" src={item.image} alt="" />
														<div className="comment-text">
															<div className="star-rating">
																<div data-rating='3'> <i className="fa fa-star" data-alt="1" title="regular"></i> <i className="fa fa-star" data-alt="2" title="regular"></i> <i className="fa fa-star-o" data-alt="3" title="regular"></i> <i className="fa fa-star-o" data-alt="4" title="regular"></i> <i className="fa fa-star-o" data-alt="5" title="regular"></i> </div>
															</div>
															<p className="meta"> <strong className="author">Cobus Bester</strong> <span><i className="fa fa-clock-o"></i> March 7, 2013</span> </p>
															<div className="description">
																<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
															</div>
														</div>
													</div>
												</li>
											))}
										</ol>
									</div>
									<div id="review_form_wrapper">
										<div id="review_form">
											<div id="respond" className="comment-respond">
												<h3 className="comment-reply-title" id="reply-title">Add a review</h3>
												<form className="comment-form" method="post" >
													<div className="comment-form-author">
														<label>Name <span className="required">*</span></label>
														<input type="text" aria-required="true" size="30" value="" name="author" id="author" />
													</div>
													<div className="comment-form-email">
														<label>Email <span className="required">*</span></label>
														<input type="text" aria-required="true" size="30" value="" name="email" id="email" />
													</div>
													<div className="comment-form-comment">
														<label>Your Review</label>
														<textarea aria-required="true" rows="8" cols="45" name="comment" id="comment"></textarea>
													</div>
													<div className="form-submit">
														<input type="submit" value="Submit" className="site-button" id="submit" name="submit" />
													</div>
												</form>
											</div>
										</div>
									</div>
								</TabPane>									
							</TabContent>
						</div>	
					</div>
				</div>		
			
		</Fragment>
	)
	
}	
export default TabStyle1;