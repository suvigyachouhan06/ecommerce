import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button'
import React from 'react'
import { MdClose } from 'react-icons/md';

const ProductModal = () => {
  return (
    <div>
        <Dialog open={true}>
        <Button className='close' ><MdClose/></Button>
        </Dialog>
    </div>
  )
}

export default ProductModal;
