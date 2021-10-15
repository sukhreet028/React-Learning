import React from 'react';
import './Cal.css';
import Input1 from '../input1-com/Input1'
import { useState } from 'react';
 const Mycal1=()=>{
   return (
       <div className="container">
       <Input1/>
           <button type='button' className='cal-button'>7</button>
           <button type='button' className='cal-button'>8</button>
           <button type='button' className='cal-button'>9</button>
           <button type='button' className='cal-button'>*</button>
           <button type='button' className='cal-button'>4</button>
           <button type='button' className='cal-button'>5</button>
           <button type='button' className='cal-button'>6</button>
           <button type='button' className='cal-button'>-</button>
           <button type='button' className='cal-button'>1</button>
           <button type='button' className='cal-button'>2</button>
           <button type='button' className='cal-button'>3</button>
           <button type='button' className='cal-button'>+</button>
           <button type='button' className='cal-button'>0</button>
           <button type='button' className='cal-button'>.</button>
           <button type='button' className='cal-button'>=</button>
           <button type='button' className='cal-button'>/</button>
       </div>
   )
 }
 export default Mycal1;