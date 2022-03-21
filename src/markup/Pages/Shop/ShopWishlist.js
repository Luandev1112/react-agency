import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import {OrderDetail} from './../Login';		

import bnr from './../../../images/banner/bnr2.jpg';
import thumb1 from './../../../images/product/thumb/item1.jpg';
import thumb2 from './../../../images/product/thumb/item2.jpg';
import thumb3 from './../../../images/product/thumb/item3.jpg';
import thumb4 from './../../../images/product/thumb/item4.jpg';
import thumb5 from './../../../images/product/thumb/item5.jpg';
import thumb6 from './../../../images/product/thumb/item6.jpg';



const poductBlog= [
	{image: thumb1 },
	{image: thumb2 },
	{image: thumb3 },
	{image: thumb4 },
	{image: thumb5 },
	{image: thumb6},
];

const ShopWishlist = () => {
   
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr + ")" }}>
                        <PageTitle motherMenu='Wishlist' activeMenu='Wishlist' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="section-full content-inner">
                        {/* <!-- Product --> */}
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="table-responsive">
                                        <table className="table check-tbl">
                                            <thead className="text-left">
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Product name</th>
                                                    <th>Unit Price</th>
                                                    <th>Quantity</th>
                                                    <th>Add to cart</th>
                                                    <th>Close</th>
                                                </tr>
                                            </thead>
                                            <tbody>
												{poductBlog.map((item,index)=>(
													<tr key={index}>
														<td className="product-item-img"><img src={item.image} alt="" /></td>
														<td className="product-item-name">Prduct Item 3</td>
														<td className="product-item-price">$28.00</td>
														<td className="product-item-quantity">
															<div className="quantity btn-quantity max-w80">
																<input type="number" name="num" className="form-control input-btn input-number" defaultValue={1} />
															</div>
														</td>
														<td className="product-item-totle"><Link to={"#"} className="site-button">Add To Cart</Link></td>
														<td className="product-item-close"><Link to ={"#"} className="ti-close"></Link></td>
													</tr>
												))}	
                                               
                                            </tbody>
                                        </table>
                                    </div>
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
export default ShopWishlist;