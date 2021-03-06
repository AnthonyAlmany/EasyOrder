import React from 'react'
import Button from '@material-ui/core/Button';

import {propsItem} from "../types"



function Item({ item, decreaseHandler, increaseHandler }: propsItem) {

  return (
    <div className="component">
      <div className='item-component'>
        <h3>{item.name}</h3>
        <div className='count-component'>
          <Button variant="contained" onClick={decreaseHandler}><span>-</span></Button>
          <h2>{item.qty}</h2>
          <Button variant="contained" onClick={increaseHandler}><span>+</span></Button>
        </div>
      </div>
    </div>

  );
}

export default Item;
