import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import "./dropbox.css"
import { myContext } from '../../../App';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Dropbox = () => {
  const context=useContext(myContext);
  const[locationName,setLocationName]=useState(null);
  const[isOpenModal,setIsOpenModal]= useState(false);
  const[selectedTab,setSelectedTab]=useState(null);
  const[countryList,setCountryList]=useState([]);
  const [filteredCountryList, setFilteredCountryList] = useState([]);

  const selectCountry=(idx)=>{
    setSelectedTab(idx);
    setIsOpenModal(false)
    
  }

  useEffect(()=>{
    setCountryList(context.countryList)
    setFilteredCountryList(context.countryList);
    if (isOpenModal) {
      setFilteredCountryList(countryList);
    }
  },[context.countryList,isOpenModal, countryList])

  const filterList=(e)=>{
    const keyword= e.target.value.toLowerCase();
    if(keyword!==''){
      const list=countryList.filter((item)=>{
        return item.country.toLowerCase().includes(keyword)
      });
      setFilteredCountryList(list);
    }
    else{
      setFilteredCountryList(countryList);
    }
  
  }

  return (
  <>
      <Button className='countryDrop' onClick={()=>setIsOpenModal(true)}>
            <div className="info d-flex flex-column">
                <span className='location'>Your Location</span>
                <span className='name'>{locationName!==null ? locationName :"Select Location"}</span>
            </div>
            <span className='ms-auto'><FaAngleDown/></span>
            
        
    </Button>
    <Dialog open={isOpenModal} className='locationModal'  TransitionComponent={Transition}>
    <h4 className='mb-1'>Choose Your Delivery Location</h4>
    <p>Enter your address and we will specify the offer for your area.</p>
    <Button className='closeModal' onClick={()=>setIsOpenModal(false)}><MdClose/></Button>

    <div className="headerSearch w-100">
        <input type="text" placeholder='Search your Area..' onChange={filterList} />
        <Button><IoIosSearch/></Button>
    </div>

    <ul className="countryList my-3">
      {filteredCountryList.length !==0 && filteredCountryList?.map((item,idx)=>{
        return( <li key={idx}><Button onClick={()=>{selectCountry(idx);setLocationName(item.country)}} className={`${selectedTab===idx ? "active":""}`}>{item.country}</Button></li>)
      })}
    </ul>
    </Dialog>
  </>  
  )
}

export default Dropbox
