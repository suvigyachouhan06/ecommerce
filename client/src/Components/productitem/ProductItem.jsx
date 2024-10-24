import React, { useContext, useState } from 'react';
import Rating from '@mui/material/Rating';
import { AiOutlineFullscreen } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import ProductModal from '../productModal/ProductModal';
import {myContext} from '../../App'

const ProductItem = (props) => {
  const context =useContext(myContext);
  const[isOpenProductModal,setIsOpenProductModal]=useState(false);
 
  const viewProduuctDetails=(id)=>{
      context.setIsOpenProductModal(true)
  }

  const closeProductsModal=()=>{
    context.setIsOpenProductModal(false)
}
  
  return (
    <>
                <div className={`item productItem mt-4 ${props.itemView}`}>
                    <div className="imgWrapper">
                      <img
                        src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/4/64b3470ZNYRIX00001800_1.jpg?rnd=20200526195200&tr=w-256"
                        className='w-100'
                        alt="Product 1"
                      
                      
                      
                      />
                      <span className='badge badge-primary'>28 %</span>

                      <div className="actions">
                        <button onClick={()=>viewProduuctDetails(1)} className='fullScreen'><AiOutlineFullscreen/></button>
                        <button className='wishList'><FaRegHeart/></button>
                      </div>
                    </div>
                    <div className="info">
                    <h4>Altecia Tie and Dye Jogger with Baggy Trouser with t-shirt</h4>
                    <span className='text-success d-block'>In Stock</span>
                    <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size="small" precision={0.5}/>

                    <div className="d-flex">
                      <span className='oldPrice'>Rs 490</span>
                      <span className='netPrice text-danger ms-2'>Rs 450</span>
                    </div>
                    </div>
                  </div>
    </>
  )
}

export default ProductItem
