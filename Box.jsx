import React from 'react';

function Box(props) {
  return (
    <div className='s-box'>
        <div className='s-b-img'>
            <img src={props.image} alt={props.alte}/>
        </div>
        <div className='s-box-text'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente 
               quaerat dolorem velit veniam quos quo illum porro quam optio tempore!</p>
               <a href='#' className='cv-btn'>{props.button}</a>
        </div>
    </div>
  )
}

export default Box;