import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Button from '@mui/material/Button'
import './quantityBox.css'

const QuantityBox = () => {
    const [inputValue,setInputValue]=useState(1);

    const plus=()=>{
        setInputValue(inputValue + 1)
      }
    
      const minus=()=>{
        if(inputValue!==1 && inputValue>0){
          setInputValue(inputValue - 1)
        }
      }
  return (
    <div>
       <div className="quantityDrop d-flex align-items-center">
              <Button onClick={plus}><FaPlus/></Button>
              <input type="text" value={inputValue}/>
              <Button onClick={minus}><FaMinus/></Button>
        </div>
    </div>
  )
}

export default QuantityBox
