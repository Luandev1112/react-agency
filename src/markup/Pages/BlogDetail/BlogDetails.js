import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import Sidebar from './../../Element/Sidebar';

import bnr from './../../../images/banner/bnr5.jpg';
import thum1 from './../../../images/blog/default/thum1.jpg';
import grid4 from './../../../images/blog/grid/pic4.jpg';
import grid1 from './../../../images/blog/grid/pic1.jpg';
import test1 from './../../../images/testimonials/pic1.jpg';
import test2 from './../../../images/testimonials/pic2.jpg';
import test3 from './../../../images/testimonials/pic3.jpg';

class BlogDetails extends Component {


    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr + ")" }}>
						<PageTitle motherMenu='Blog Details' activeMenu='Blog Details' />
                    </div>
                    <div className="content-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-xl-9">
                                    <div className="blog-post blog-single">
                                        <div className="dlab-post-title ">
                                            <h4 className="post-title m-t0"><Link to={"#"}>Title of first blog post</Link></h4>
                                        </div>
                                        <div className="dlab-post-meta m-b20">
                                            <ul className="d-flex align-items-center">
                                                <li className="post-date"> <i className="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                <li className="post-author"><i className="fa fa-user"></i>By<Link to={"#"}> demongo</Link> </li>
                                                <li className="post-comment"><i className="fa fa-comments"></i><Link to={"#"}>0 Comments</Link></li>
                                            </ul>
                                        </div>
                                        <div className="dlab-post-media dlab-img-effect zoom-slow">
											<Link to={"#"}><img src={thum1} alt="" /></Link>
										</div>
                                        <div className="dlab-post-text">
                                            <p>
												Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum  is simply dummy text of the printing and typesetting  printer a galley Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen  It has urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
											</p>
                                            <p>
												Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen It has urvived not only five centuries, but also the leap into electronic typesetting.
											</p>
                                            <blockquote>
												Lorem Ipsum is simply dummy text of the printing and typesetting industry. Has been the industry's standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimencenturies.
											</blockquote>
                                            <p>
												Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen It has urvived not only five centuries, but also the leap into electronic typesetting.
											</p>
                                            <h5>Completely Responsive</h5>
                                            <img className="alignleft" width="300" src={grid4} alt="" />
                                            <p>
												Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only  five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release  of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like  Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum   has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releasefive centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
											</p>
                                            <div className="dlab-divider bg-gray-dark"></div>
                                            <img className="alignright" width="300" src={grid1} alt="" />
                                            <p>
												Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only  five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release  of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                                has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a  type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  It was popularised in the 1960s with the release
											</p>
                                        </div>
                                        <div className="dlab-post-tags clear">
                                            <div className="post-tags">
												<Link to={"#"}>Child </Link> 
												<Link to={"#"}>Eduction </Link> 
												<Link to={"#"}>Money </Link>
												<Link to={"#"}>Resturent </Link> 
											</div>
                                        </div>
                                        <div className="dlab-divider bg-gray-dark op4"><i className="icon-dot c-square"></i></div>
                                        <div className="share-details-btn">
                                            <ul>
                                                <li><h5 className="m-a0">Share Post</h5></li>
                                                <li><Link to={"#"} className="site-button facebook button-sm"><i className="fa fa-facebook"></i> Facebook</Link></li>
                                                <li><Link to={"#"} className="site-button google-plus button-sm"><i className="fa fa-google-plus"></i> Google Plus</Link></li>
                                                <li><Link to={"#"} className="site-button linkedin button-sm"><i className="fa fa-linkedin"></i> Linkedin</Link></li>
                                                <li><Link to={"#"} className="site-button instagram button-sm"><i className="fa fa-instagram"></i> Instagram</Link></li>
                                                <li><Link to={"#"} className="site-button twitter button-sm"><i className="fa fa-twitter"></i> Twitter</Link></li>
                                                <li><Link to={"#"} className="site-button whatsapp button-sm"><i className="fa fa-whatsapp"></i> Whatsapp</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="clear" id="comment-list">
                                        <div className="comments-area" id="comments">
                                            <h2 className="comments-title">8 Comments</h2>
                                            <div className="clearfix m-b20">
                                                <ol className="comment-list">
                                                    <li className="comment">
                                                        <div className="comment-body">
                                                            <div className="comment-author vcard"> <img className="avatar photo" src={test1} alt="" /> 
															<cite className="fn">Stacy poe</cite> <span className="says">says:</span> </div>
                                                            <div className="comment-meta"> <Link to={"#"}>October 6, 2015 at 7:15 am</Link> </div>
                                                            <p>
																Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neqnsectetur adipiscing elit. Nam viae neqnsectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. 
															</p>
                                                            <div className="reply"><Link to={"#"} className="comment-reply-link">Reply</Link> </div>
                                                        </div>
                                                        <ol className="children">
                                                            <li className="comment odd parent">
                                                                <div className="comment-body">
                                                                    <div className="comment-author vcard"> 
																		<img className="avatar photo" src={test2} alt="" />
																		<cite className="fn">Stacy poe</cite> <span className="says">says:</span>
																	</div>
                                                                    <div className="comment-meta"> <Link to={"#"}>October 6, 2015 at 7:15 am</Link> </div>
                                                                    <p>
																		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molesti.Sed vestibulum sem felis, ac elementum ligula blandit ac.
																	</p>
                                                                    <div className="reply"><Link to={"#"} className="comment-reply-link">Reply</Link> </div>
                                                                </div>
                                                                <ol className="children">
                                                                    <li className="comment odd parent">
                                                                        <div className="comment-body">
                                                                            <div className="comment-author vcard"> <img className="avatar photo" src={test3} alt="" /> <cite className="fn">Stacy poe</cite> <span className="says">says:</span> </div>
                                                                            <div className="comment-meta"> <Link to={"#"}>October 6, 2015 at 7:15 am</Link> </div>
                                                                            <p>
																				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, ac elementum ligula blandit ac.
																			</p>
                                                                            <div className="reply"><Link to={"#"} className="comment-reply-link">Reply</Link> </div>
                                                                        </div>
                                                                    </li>
                                                                </ol>
                                                            </li>
                                                        </ol>
                                                    </li>
                                                    <li className="comment">
                                                        <div className="comment-body">
                                                            <div className="comment-author vcard"> 
																<img className="avatar photo" src={test3} alt="" />
																<cite className="fn">Stacy poe</cite> <span className="says">says:</span> 
															</div>
                                                            <div className="comment-meta"> <Link to={"#"}>October 6, 2015 at 7:15 am</Link> </div>
                                                            <p>
																Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, ac elementum ligula blandit ac.
															</p>
                                                            <div className="reply"><Link to={"#"} className="comment-reply-link">Reply</Link></div>
                                                        </div>
                                                    </li>
                                                    <li className="comment">
                                                        <div className="comment-body">
                                                            <div className="comment-author vcard">
																<img className="avatar photo" src={test2} alt="" /> 
																<cite className="fn">Stacy poe</cite> <span className="says">says:</span>
															</div>
                                                            <div className="comment-meta"> <Link to={"#"}>October 6, 2015 at 7:15 am</Link> </div>
                                                            <p>
																Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, ac elementum ligula blandit ac.
															</p>
                                                            <div className="reply"><Link to={"#"} className="comment-reply-link">Reply</Link> </div>
                                                        </div>
                                                    </li>
                                                    <li className="comment">
                                                        <div className="comment-body">
                                                            <div className="comment-author vcard"> 
																<img className="avatar photo" src={test3} alt="" /> 
																<cite className="fn">Stacy poe</cite> <span className="says">says:</span> 
															</div>
                                                            <div className="comment-meta"> 99<Link to={"#"}>October 6, 2015 at 7:15 am</Link> </div>
                                                            <p>
																Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, ac elementum ligula blandit ac.
															</p>
                                                            <div className="reply"><Link to={"#"} className="comment-reply-link">Reply</Link> </div>
                                                        </div>
                                                    </li>
                                                </ol>
                                                <div className="comment-respond" id="respond">
                                                    <h4 className="comment-reply-title" id="reply-title">Leave a Reply 
														<small>
															<Link to={"#"} className="d-none"  id="cancel-comment-reply-link" rel="nofollow">Cancel reply</Link> 
														</small>
													</h4>
                                                    <form className="comment-form" id="commentform" method="post" action="http://sedatelab.com/developer/donate/wp-comments-post.php">
                                                        <p className="comment-form-author">
                                                            <label for="author">Name <span className="required">*</span></label>
                                                            <input type="text" value="Author" name="Author" placeholder="Author" id="author" />
                                                        </p>
                                                        <p className="comment-form-email">
                                                            <label for="email">Email <span className="required">*</span></label>
                                                            <input type="text" value="email" placeholder="Email" name="email" id="email" />
                                                        </p>
                                                        <p className="comment-form-url">
                                                            <label for="url">Website</label>
                                                            <input type="text" value="url" placeholder="Website" name="url" id="url" />
                                                        </p>
                                                        <p className="comment-form-comment">
                                                            <label for="comment">Comment</label>
                                                            <textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
                                                        </p>
                                                        <p className="form-submit">
                                                            <input type="submit" value="Post Comment" className="submit" id="submit" name="submit" />
                                                        </p>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-3 sticky-top">
                                    <Sidebar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        )
    }
}
export default BlogDetails;