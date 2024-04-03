import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import styled from "styled-components";
import { useSelector } from 'react-redux';

const button = styled.button`
  .div{
  background-color: red;
  width: 100px;
  height: 100px;
  }
`;

const PriceButtonSlider = ({ pricelist, timelist, Selectpricehandler,pricepertime, selectedindexlist,reserveYsno}) => {

    const [slider, setSlider] = useState(null);
    const selectIndex = useSelector((state)=>state.selectIndex);

    // console.log('reserveYsno',reserveYsno)
    
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrow:true,
    dots:true

  };
  
  return (
      <div>
        <div >
        </div>
    <Slider ref={(slider) => setSlider(slider)} {...settings} >
    
        {Object.entries(pricepertime).map(([time, price],index) => (
          <div>
        <button  className="border border-gray-800 px-4 py-2 rounded-lg " disabled={reserveYsno[index]==='y'} 
         key={index} onClick={() =>  Selectpricehandler({price,time,index,pricepertime}) }>
           <div style={{backgroundColor: selectIndex.includes(index) ? 'green' : reserveYsno[index]==='y' ? 'navy' :'transparent' }}>
          {/* <div>{index}</div> */}
          <div className='text-lg'>{time}</div>
          <div className='text-lg'>{price}원</div>
          </div>
        </button>
        </div>
      ))}    
    </Slider>
    </div>
  );
};

export default PriceButtonSlider;
