import React from 'react'
import "./vender.css";

export default function Vendor() {
  return (
  
       <div className="container">
    <form action="">
    <h1>Vendor Details</h1>
    <div className="content">
        <div className="input-box">
          <label for="name">Vendor Name</label>
          <input type="text" placeholder="" />
        </div>
        </div>
        <div className='cont'>
        <div className="input-box_0">
          <label for="name">Phone</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box_0">
          <label for="name">Email</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box_0">
          <label for="name">Address</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box_0">
          <label for="name">City</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box_0">
          <label for="name">State</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box_0">
          <label for="name">Zip Code</label>
          <input type="text" placeholder="" />
        </div>
        </div>
       
        <div className='head'>
            <div className='head_0'>Free Freight Conditions</div>
       <div className='cont_0'>
        <div className="input-box_1">
          <label for="name">Free Fright Allowance</label>
          <input type="text" placeholder="" />
          </div>
        <div className="input-box_1">
          <label for="name">Minimum Order Amount</label>
          <input type="text" placeholder="" />
        </div>
        </div>
        </div>
        <div className="daySection">
        <div className="first">
          <span>Free fright Date</span>
          </div>
          <div className="checkbox">
            
            <span className="lang"><input type="checkbox" value="mon" />Mon</span>

            <span className="lang"><input type="checkbox" value="tue" />Tue</span>
           
            <span className="lang"><input type="checkbox" value="wed" />Wed</span>

            <span className="lang"><input type="checkbox" value="thu" />Thu</span>

            <span className="lang"><input type="checkbox" value="fri" />Fri</span>

            <span className="lang"><input type="checkbox" value="sat" />Sat</span>

            <span className="lang"><input type="checkbox" value="sun" />Sun</span>

            <span className="lang"><input type="checkbox" value="n/a" />N/A</span>
          
      </div>
      </div>
         
      <div className='policy'>
        <span>Dropship Policy</span>
        <div className="input-box_2">
          <label for="name">Policy #</label>
          <input type="text" placeholder="" />
        </div>
      </div>
      <div className='info'>
        <span>Warranty Info</span>
        <div className="input-box_2">
          <label for="name">Warranty #</label>
          <input type="text" placeholder="" />
        </div>
      </div>
      <div className='info_1'>
        <span>Website Info</span>
        <div className="input-box_2">
          <label for="name">Website URL</label>
          <input type="text" placeholder="" />
        </div>
        <div className='tnt'>
        <div className="input-box_3">
          <label for="name">Username</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box_3">
          <label for="name">Password</label>
          <input type="password" placeholder="" />
        </div>
        </div>
      </div>
      <div className='more_btn'>
            <span></span>
        </div>
        <div className="nameSection">
        <div className="note">
          <span>Note</span>
          <textarea placeholder="" type="text" />
        </div>
      </div>
        
        <div className="button-container">
      <div className="btn">
        <button className="save" type="submit">Save</button>
        <div className="btn-o">
        <button type="clear:  ">Cancel</button>
        </div>
        </div>
      </div>
        </form>
        </div>
   
  );
};
