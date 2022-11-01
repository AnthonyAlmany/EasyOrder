import React from 'react'

import { Button } from '@mui/material';

import {propsItem} from "../types"
import Delete from '@mui/icons-material/Delete';



function Item({ item, decreaseHandler, increaseHandler, deleteToggle, deleteItem }: propsItem) {

  return (
    <div className="list-container">
    <div className="component">
      <div className='item-component'>
        <h3>{item.name}</h3>
        <div className='count-component'>

          <Button variant="contained" onClick={decreaseHandler}><span>-</span></Button>
          <h2>{item.qty}</h2>
          <Button variant="contained" onClick={increaseHandler}><span>+</span></Button>

          <Delete className={deleteToggle ? 'delete-button' : 'hidden'} color="action" onClick={deleteItem}  />
          
        </div>
      </div>
    </div>
    </div>

  );  
}

export default Item;
