import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button'
import React, { useRef } from 'react'
import { MdClose } from 'react-icons/md';
import Rating from '@mui/material/Rating';
import "./productmodal.css"

const ProductModal = ({closeProductsModal}) => {

  const zoomSliderBig =useRef();
  const zoomSlider=useRef();

  var settings= {
    dots:false,
    infinite:false,
    speed: 500,
    slidesToShow:5,
    slidesToScroll:1,
    fade:false,
    arrows:true
  }

  var settings2= {
    dots:false,
    infinite:false,
    speed: 700,
    slidesToShow:1,
    slidesToScroll:1,
    fade:false,
    arrows: false
  }
  return (
    <div>
        <Dialog className='productModal' open={true} onClose={closeProductsModal}>
        <Button className='close_' onClick={closeProductsModal}><MdClose/></Button>
        <h4 className='mb-1 font-weight-bold'>Siril Georgette Brown Color Saree with Blouse piece</h4>
        <div className="d-flex align-items-center">
        <div className="d-flex align-items-center me-4">
          <span>Brands:</span>
          <span className='ms-2'><b>SIRIL</b></span>
        </div>
        <Rating name="read-only" value={5} readOnly size="small" precision={0.5}/>
        </div>
        <hr />

        <div className="row mt-2 productDetaileModal">
          <div className='col-md-5'>
            <div className="productZoom">
              <slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>
                {
                  currentProduct.productImages !== undefined &&
                  currentProduct.productImages.map((imgUrl, index)=>{
                    return(
                      <div className="item">
                  
                      </div>
                    )
                  })
                }
              </slider>
            </div>
          </div>

          <div className='col-md-7'>

          </div>
        </div>


        </Dialog>
    </div>
  )
}

export default ProductModal;
