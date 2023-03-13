import React from 'react'
import "./purchaseorder.css";


export default function Purchaseorder() {
    const handleHover = () => {

        // return "hello"
        console.log("hover")
    }
  return (
    <div className="container">
    <form action="">
    <h1>Purchase Order Details</h1>
    <div className="content">
        <div className="input-box">
          <label for="name">Created by</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box">
          <label for="name">Created date</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box">
          <label for="name">PO#</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box_o">
          <label for="name">Vendor</label>
          <div className='select'>
          <select name="" id="">
          <option value="">1 Vendor Name here <span className='red' style={{ color : 'red'}}>  Min Order $500.00</span></option>
        </select>
        </div>
        </div>
          <div className='items' style={{display: "flex", justifyContent: 'space-between'}}>
           <div>Items</div>
           <div>Total Price: $0.00</div>
          </div>
          

          <div className="input-box_op">
          
          <div className="input-box_p">
          <label for="name">item</label>
          <select name="" id="">
          <option value=""></option>
        </select>
        </div>
          <div className="input-box-po">
          <label for="name">QTY</label>
          <select name="" id="">
          <input type="text" placeholder=''/>
          <option value=""></option>
        </select>
        </div>
        <div className="input-box_l">
          <label for="name">Price</label>
          <input type="text" placeholder="" />
        </div>
        </div>
        
        </div>
        <div className='more_btn'>
            <span></span>
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
  )
}
