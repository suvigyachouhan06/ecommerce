import React, { useRef, useState } from 'react';
import "./productDetails.css";
import ProductZoom from '../../Components/productZoom/ProductZoom';
import Rating from '@mui/material/Rating';
import QuantityBox from '../../Components/QuantityBox/QuantityBox';
import { Button } from '@mui/material';
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import RelatedProducts from './relatedProducts/RelatedProducts';

const ProductDetails = () => { // Change here
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [activeSize, setActiveSize] = useState(null);
    const [activeDesc,setActiveDesc]= useState('Description');

    const handleSizeChange = (size) => {
        setActiveSize(size);
    };
    const handleReviewChange = (e) => {
        setReview(e.target.value);
      };

      const handleRatingChange = (e) => {
        setRating(Number(e.target.value));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        setReview('');
        setRating(0);
       
      };

    return (
        <section className='productDetails section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ProductZoom />
                    </div>

                    <div className="col-md-7 ps-5">
                        <h2 className='hd text-capitalize'>Siril Georgette Brown Color Saree with Blouse piece</h2>

                        <ul className='list list-inline d-flex align-items-center'>
                            <li className="list-inline-item">
                                <div className="d-flex align-items-center">
                                    <span className="text-secondary me-2">Brands :</span>
                                    <span>SIRIL</span>
                                </div>
                            </li>

                            <li className='list-inline-item ms-4'>
                                <div className="d-flex align-items-center">
                                    <Rating name="read-only" value={4.5} readOnly size="small" precision={0.5} />
                                    <span className='text-secondary cursor ms-2'>1 review</span>
                                </div>
                            </li>

                            <li className="list-inline-item ms-4">
                                <div className="d-flex align-items-center">
                                    <span className="text-secondary me-2">SKU :</span>
                                    <span>ZU49VOR</span>
                                </div>
                            </li>
                        </ul>

                        <div className="d-flex info">
                            <span className="oldPrice">Rs 490</span>
                            <span className="netPrice text-danger ms-2">Rs 450</span>
                        </div>

                        <span className="badge badge-success">IN STOCK</span>

                        <p className='mt-2'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>

                        <div className="productSize d-flex align-items-center">
                            <span>Size / Weight :</span>
                            <ul className="list list-inline mb-0 ps-4">
                                {[ 'S', 'M', 'L', 'XL', 'XXL' ].map((size, index) => (
                                    <li className="list-inline-item" key={index}>
                                        <a 
                                            className={`tag ${activeSize === index ? 'active' : ''}`}
                                            onClick={() => handleSizeChange(index)} // Add click handler
                                        >
                                            {size}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="d-flex align-items-center mt-4">
                            <QuantityBox />
                            <Button className='btn-blue btn-lg btn-big btn-round'>
                                <FaCartShopping /> &nbsp; Add to Cart
                            </Button>
                            
                            <Tooltip title="ADD TO WISHLIST" placement='top'>
                            <Button className='btn-blue btn-lg btn-big btn-circle ms-5'>
                            <FaHeart/>
                            </Button>
                            </Tooltip>

                            <Tooltip title="ADD TO COMPARE" placement='top'>
                            <Button className='btn-blue btn-lg btn-big btn-circle ms-3'>
                            <MdCompareArrows style={{fontSize:"21px"}}/>
                            </Button>
                            </Tooltip>
                        </div>
                    </div>

                </div>
                
                                <br />
                <div className="addInfo mt-5 ">
                        <div className="infoBtn d-flex align-items-center mt-4 mb-4">
                            <Button onClick={()=>setActiveDesc("Description")} className={`${activeDesc==="Description" ? "active":""}`}>Description</Button>
                            <Button onClick={()=>setActiveDesc("Additional_info")} className={`${activeDesc==="Additional_info" ? "active":""}`}>Additional Info</Button>
                            <Button onClick={()=>setActiveDesc("Reviews")} className={`${activeDesc==="Reviews" ? "active":""}`}>Reviews</Button>
                        </div>
                    {
                    activeDesc==="Description" &&  
                                            <div>
                                                <p style={{padding:"0px 25px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                    }

                    {
                        activeDesc==="Additional_info" && 
                        <div class="tabContent"><div class="table-responsive"><table class="table table-bordered"><tbody><tr class="stand-up"><th>Stand Up</th><td><p>35″L x 24″W x 37-45″H(front to back wheel)</p></td></tr><tr class="folded-wo-wheels"><th>Folded (w/o wheels)</th><td><p>32.5″L x 18.5″W x 16.5″H</p></td></tr><tr class="folded-w-wheels"><th>Folded (w/ wheels)</th><td><p>32.5″L x 24″W x 18.5″H</p></td></tr><tr class="door-pass-through"><th>Door Pass Through</th><td><p>24</p></td></tr><tr class="frame"><th>Frame</th><td><p>Aluminum</p></td></tr><tr class="weight-wo-wheels"><th>Weight (w/o wheels)</th><td><p>20 LBS</p></td></tr><tr class="weight-capacity"><th>Weight Capacity</th><td><p>60 LBS</p></td></tr><tr class="width"><th>Width</th><td><p>24″</p></td></tr><tr class="handle-height-ground-to-handle"><th>Handle height (ground to handle)</th><td><p>37-45″</p></td></tr><tr class="wheels"><th>Wheels</th><td><p>12″ air / wide track slick tread</p></td></tr><tr class="seat-back-height"><th>Seat back height</th><td><p>21.5″</p></td></tr><tr class="head-room-inside-canopy"><th>Head room (inside canopy)</th><td><p>25″</p></td></tr><tr class="pa_color"><th>Color</th><td><p>Black, Blue, Red, White</p></td></tr><tr class="pa_size"><th>Size</th><td><p>M, S</p></td></tr></tbody></table></div></div>
                    }

                    {
                        activeDesc==="Reviews" && 
                        
                        <div className='reviews'>
                            <h3>Customer questions & answers</h3>
                       
                        <br />
                        <div class="reviewBox mb-4 border-bottom">
                            <div class="info">
                                <div class="d-flex align-items-center w-100">
                                    <h5>Suman Kumawat</h5>
                                    <div class="ms-auto">
                                    <Rating name="read-only" value={4.5} readOnly size="small" precision={0.5} />
                                    </div>

                                </div>
                                
                                <h6 className='text-secondary'>2024-08-06</h6>
                                    <p>This saree is perfect for festivals! The color is bright and festive, and the sequins add a lovely sparkle. It’s easy to drape and stays in place all day. I received compliments from everyone, and I feel beautiful wearing it!</p>
                            </div>
                        </div>

                        <div class="reviewBox mb-4 border-bottom">
                            <div class="info">
                                <div class="d-flex align-items-center w-100">
                                    <h5>Anju Scaria</h5>
                                    <div class="ms-auto">
                                    <Rating name="read-only" value={4.5} readOnly size="small" precision={0.5} />
                                    </div>

                                </div>
                                
                                <h6 className='text-secondary'>2024-10-06</h6>
                                    <p>I recently purchased this silk saree for a wedding, and I couldn’t be happier! The fabric is incredibly soft and luxurious, making it comfortable to wear all day. The colors are vibrant and true to the photos. Draping it was easy, and I received so many compliments!</p>
                            </div>
                        </div>

                        <form className="reviewForm" onSubmit={handleSubmit}>
                        <h4>Add a review</h4>
                        <div className="form-group">
                            <textarea
                            className="form-control shadow"
                            placeholder="Write a Review"
                            name="review"
                            value={review}
                            onChange={handleReviewChange}
                            />
                        </div>
                       
                        <div className="row mt-3">
                            <div className="col-md-6">
                            <div className="form-group">
                                <Rating
                                name="read-only"
                                value={rating}
                                precision={0.5}
                                onChange={handleRatingChange}
                                size="large"
                                />
                            </div>
                            </div>
                        </div>
                       
                        <br />
                        <div className="form-group">
                            <Button
                            className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium btn-blue btn-lg btn-big btn-round"
                            type="submit"
                            >
                            Submit Review
                            </Button>
                        </div>
                        </form>

                        </div>
                    }

                </div>

                <br />

                <RelatedProducts title="RELATED PRODUCTS"/>

                <RelatedProducts title="RECENTLY VIEWED PRODUCTS"/>


            </div>
        </section>
    );
}

export default ProductDetails; // Ensure this matches the component name




