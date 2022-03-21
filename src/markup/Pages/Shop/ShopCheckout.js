import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Accordion} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle'
import {OrderDetail} from './../Login';	

//image
import bnr1 from './../../../images/banner/bnr1.jpg';
import thumb1 from './../../../images/product/thumb1.jpg';
import thumb2 from './../../../images/product/thumb2.jpg';
import thumb3 from './../../../images/product/thumb3.jpg';
import thumb4 from './../../../images/product/thumb4.jpg';

const productBlog=[
	{image: thumb1,}, {image: thumb2,},
	{image: thumb3,}, {image: thumb4,},
	{image: thumb2,},
];

class ShopCheckout extends Component {


    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
						<PageTitle  motherMenu="Checkout"  activeMenu="Checkout" />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="section-full content-inner">
                        {/* <!-- Product --> */}
                        <div className="container">
                            <div>
                                <form className="shop-form row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                        <h4>Billing & Shipping Address</h4>
                                        <div className="form-group">
											<Form.Control as="select" custom>
                                                <option value="">Åland Islands</option>
                                                <option value="">Afghanistan</option>
                                                <option value="">Albania</option>
                                                <option value="">Algeria</option>
                                                <option value="">Andorra</option>
                                                <option value="">Angola</option>
                                                <option value="">Anguilla</option>
                                                <option value="">Antarctica</option>
                                                <option value="">Antigua and Barbuda</option>
                                                <option value="">Argentina</option>
                                                <option value="">Armenia</option>
                                                <option value="">Aruba</option>
                                                <option value="">Australia</option>
                                            </Form.Control>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-lg-6">
                                                <input type="text" className="form-control" placeholder="First Name" />
                                            </div>
                                            <div className="form-group col-lg-6">
                                                <input type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Company Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Address" />
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-lg-6">
                                                <input type="text" className="form-control" placeholder="Apartment, suite, unit etc." />
                                            </div>
                                            <div className="form-group col-lg-6">
                                                <input type="text" className="form-control" placeholder="Town / City" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-lg-6">
                                                <input type="text" className="form-control" placeholder="State / County" />
                                            </div>
                                            <div className="form-group col-lg-6">
                                                <input type="text" className="form-control" placeholder="Postcode / Zip" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-lg-6">
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                            <div className="form-group col-lg-6">
                                                <input type="text" className="form-control" placeholder="Phone" />
                                            </div>
                                        </div>
										<Accordion>
											<h6>
												<Accordion.Toggle as={Link} variant="link" eventKey="1">Ship to a different address <i className="fa fa-arrow-circle-o-down"></i></Accordion.Toggle>
											</h6>
											<Accordion.Collapse eventKey="1">
												<div id="create-an-account" className="collapsed">
													<p>Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
													<div className="form-group">
														<input type="password" className="form-control" placeholder="Password" />
													</div>
												</div>
											</Accordion.Collapse>		
										</Accordion>	
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
										<Accordion>
											<h4 className="font-weight-600">
												<Accordion.Toggle as={Link} variant="link" eventKey="0">Ship to a different address <i className="fa fa-arrow-circle-o-down"></i></Accordion.Toggle>
														
											</h4>
											<Accordion.Collapse eventKey="0">
												<div  className="collapsed">
													<p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer please proceed to the Billing & Shipping section.</p>
													<div className="form-group">
														<Form.Control as="select" custom>
															<option value="">Åland Islands</option>
															<option value="">Afghanistan</option>
															<option value="">Albania</option>
															<option value="">Algeria</option>
															<option value="">Andorra</option>
															<option value="">Angola</option>
															<option value="">Anguilla</option>
															<option value="">Antarctica</option>
															<option value="">Antigua and Barbuda</option>
															<option value="">Argentina</option>
															<option value="">Armenia</option>
															<option value="">Aruba</option>
															<option value="">Australia</option>
														</Form.Control>
													</div>
													<div className="row">
														<div className="form-group col-lg-6">
															<input type="text" className="form-control" placeholder="First Name" />
														</div>
														<div className="form-group col-lg-6">
															<input type="text" className="form-control" placeholder="Last Name" />
														</div>
													</div>
													<div className="form-group">
														<input type="text" className="form-control" placeholder="Company Name" />
													</div>
													<div className="form-group">
														<input type="text" className="form-control" placeholder="Address" />
													</div>
													<div className="row">
														<div className="form-group col-lg-6">
															<input type="text" className="form-control" placeholder="Apartment, suite, unit etc." />
														</div>
														<div className="form-group col-lg-6">
															<input type="text" className="form-control" placeholder="Town / City" />
														</div>
													</div>
													<div className="row">
														<div className="form-group col-lg-6">
															<input type="text" className="form-control" placeholder="State / County" />
														</div>
														<div className="form-group col-lg-6">
															<input type="text" className="form-control" placeholder="Postcode / Zip" />
														</div>
													</div>
													<div className="row">
														<div className="form-group col-lg-6">
															<input type="email" className="form-control" placeholder="Email" />
														</div>
														<div className="form-group col-lg-6">
															<input type="text" className="form-control" placeholder="Phone" />
														</div>
													</div>
													<p>Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
												</div>
											</Accordion.Collapse>	
										</Accordion>	
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="dlab-divider bg-gray-dark text-gray-dark icon-center"><i className="fa fa-circle bg-white text-gray-dark"></i></div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4>Your Order</h4>
                                    <table className="table-bordered check-tbl">
                                        <thead className="text-center">
                                            <tr>
                                                <th>IMAGE</th>
                                                <th>PRODUCT NAME</th>
                                                <th>TOTAL</th>
                                            </tr>
                                        </thead>
                                        <tbody>
											{productBlog.map((item,index)=>(
												<tr key={index}>
													<td><img src={item.image} alt="" /></td>
													<td>Prduct Item 3</td>
													<td className="product-price">$28.00</td>
												</tr>
											))}	
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-lg-6">
                                    <form className="shop-form">
                                        <h4>Order Total</h4>
                                        <table className="table-bordered check-tbl">
                                            <tbody>
                                                <tr>
                                                    <td>Order Subtotal</td>
                                                    <td className="product-price">$125.96</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping</td>
                                                    <td>Free Shipping</td>
                                                </tr>
                                                <tr>
                                                    <td>Coupon</td>
                                                    <td className="product-price">$28.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Total</td>
                                                    <td className="product-price-total">$506.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <h5>Payment Method</h5>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name on Card" />
                                        </div>
                                        <div className="form-group">
											<Form.Control as="select" custom>
												<option value="C">Credit Card Type</option>
                                                <option value="An">Another option</option>
                                                <option value="A">A option</option>
                                                <option value="P">Potato</option>
											</Form.Control>	
										
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Credit Card Number" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Card Verification Number" />
                                        </div>
                                        <div className="form-group">
                                            <button className="site-button button-lg btn-block" type="button">Place Order Now </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Product END --> */}
                    </div>
                    
					<OrderDetail />
					
                    {/* <!-- contact area  END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default ShopCheckout;