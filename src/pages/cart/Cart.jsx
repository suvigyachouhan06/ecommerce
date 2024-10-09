import React from 'react'
import '../../App.css';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import QuantityBox from '../../Components/QuantityBox/QuantityBox';
import { RiDeleteBinLine } from "react-icons/ri";
import Button from '@mui/material/Button'
import { FaCartShopping } from "react-icons/fa6";

const Cart = () => {
    
  return (
    <section className='section cartPage'>
      <div className="container">
      <h2 className="hd mb-0">Your Cart</h2>
      <p className='mt-2 mb-3'>There are <b className='text-blue'>3</b> products in your cart</p>
       <div className="row">
        <div className="col-md-9 pe-5">
        <div className="table-responsive">
    <table className="table">
        <thead style={{background:"#ececec"}}>
            <tr>
                <th width="45%">Product</th>
                <th width="15%">Unit Price</th>
                <th width="20%">Quantity</th>
                <th width="15%">Subtotal</th>
                <th width="5%">Remove</th>    
            </tr>
        </thead>
        <tbody>
            <tr>
                <td width="45%">
                    <Link to="/products/1">
                    <div className="d-flex align-items-center cartItemImgWrapper">
                        <div className="imgWrapper">
                            <img src="https://res.cloudinary.com/da26rdzwp/image/upload/v1726541933/1726541933044_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp" alt="" className='w-100'/>
                        </div>
                        <div className="info px-3">
                            <h6>Siril Georgette Brown Color Saree with Blouse piece</h6>
                            <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size="small" precision={0.5}/>
                        </div>
                    </div>
                    </Link>
                </td>
                <td width="15%">Rs 450</td>
                <td className='quantity' width="20%">
                  <QuantityBox/>
                </td>
                <td width="15%">Rs 450</td>
                <td width="5%"><span className="remove"><RiDeleteBinLine/></span>
                
                </td>
            </tr>
        
        </tbody>


        <tbody>
            <tr>
                <td width="45%">
                    <Link to="/products/1">
                    <div className="d-flex align-items-center cartItemImgWrapper">
                        <div className="imgWrapper">
                            <img src="https://res.cloudinary.com/da26rdzwp/image/upload/v1726541933/1726541933044_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp" alt="" className='w-100'/>
                        </div>
                        <div className="info px-3">
                            <h6>Siril Georgette Brown Color Saree with Blouse piece</h6>
                            <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size="small" precision={0.5}/>
                        </div>
                    </div>
                    </Link>
                </td>
                <td width="15%">Rs 450</td>
                <td className='quantity' width="20%">
                  <QuantityBox/>
                </td>
                <td width="15%">Rs 450</td>
                <td width="5%"><span className="remove"><RiDeleteBinLine/></span>
                
                </td>
            </tr>
        
        </tbody>


        <tbody>
            <tr>
                <td width="45%">
                    <Link to="/products/1">
                    <div className="d-flex align-items-center cartItemImgWrapper">
                        <div className="imgWrapper">
                            <img src="https://res.cloudinary.com/da26rdzwp/image/upload/v1726541933/1726541933044_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp" alt="" className='w-100'/>
                        </div>
                        <div className="info px-3">
                            <h6>Siril Georgette Brown Color Saree with Blouse piece</h6>
                            <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size="small" precision={0.5}/>
                        </div>
                    </div>
                    </Link>
                </td>
                <td width="15%">Rs 450</td>
                <td className='quantity' width="20%">
                  <QuantityBox/>
                </td>
                <td width="15%">Rs 450</td>
                <td width="5%"><span className="remove"><RiDeleteBinLine/></span>
                
                </td>
            </tr>
        
        </tbody>


        <tbody>
            <tr>
                <td width="45%">
                    <Link to="/products/1">
                    <div className="d-flex align-items-center cartItemImgWrapper">
                        <div className="imgWrapper">
                            <img src="https://res.cloudinary.com/da26rdzwp/image/upload/v1726541933/1726541933044_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp" alt="" className='w-100'/>
                        </div>
                        <div className="info px-3">
                            <h6>Siril Georgette Brown Color Saree with Blouse piece</h6>
                            <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size="small" precision={0.5}/>
                        </div>
                    </div>
                    </Link>
                </td>
                <td width="15%">Rs 450</td>
                <td className='quantity' width="20%">
                  <QuantityBox/>
                </td>
                <td width="15%">Rs 450</td>
                <td width="5%"><span className="remove"><RiDeleteBinLine/></span>
                
                </td>
            </tr>
        
        </tbody>

        <tbody>
            <tr>
                <td width="45%">
                    <Link to="/products/1">
                    <div className="d-flex align-items-center cartItemImgWrapper">
                        <div className="imgWrapper">
                            <img src="https://res.cloudinary.com/da26rdzwp/image/upload/v1726541933/1726541933044_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp" alt="" className='w-100'/>
                        </div>
                        <div className="info px-3">
                            <h6>Siril Georgette Brown Color Saree with Blouse piece</h6>
                            <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size="small" precision={0.5}/>
                        </div>
                    </div>
                    </Link>
                </td>
                <td width="15%">Rs 450</td>
                <td className='quantity' width="20%">
                  <QuantityBox/>
                </td>
                <td width="15%">Rs 450</td>
                <td width="5%"><span className="remove"><RiDeleteBinLine/></span>
                
                </td>
            </tr>
        
        </tbody>
    </table>
</div>

        </div>

        <div className="col-md-3">
            <div className="card border p-3 cartDetails">
                <h4>CART TOTALS</h4>

                <div className="d-flex alogn-items-center mb-3">
                    <span>Subtotal</span>
                    <span className='ms-auto text-red fw-bold'>Rs 1830</span>
                </div>

                <div className="d-flex alogn-items-center mb-3">
                    <span>Shipping</span>
                    <span className='ms-auto fw-bold'><b>Free</b></span>
                </div>

                <div className="d-flex alogn-items-center mb-3">
                    <span>Estimated For</span>
                    <span className='ms-auto fw-bold'><b>India</b></span>
                </div>

                <div className="d-flex alogn-items-center mb-3">
                    <span>Total</span>
                    <span className='ms-auto text-red fw-bold'>Rs 1830 </span>
                </div>
                <br />
                <Button className="btn-blue btn-lg btn-big fw-bold">
                    <FaCartShopping/> 
              <span className='ms-2'>Add To Cart</span>
          </Button>
            </div>
        </div>
       </div>
      </div>
    </section>
  )
}

export default Cart
