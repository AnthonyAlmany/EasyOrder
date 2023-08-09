import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { newStateType } from "../types"

interface orderListType {
    globalQty: number;
    inventory: newStateType[];
}

function OrderList({ globalQty, inventory }: orderListType) {
    return (<div className='order-container'>
        {!globalQty ? <div className='empty-list'><h2>Order List Empty</h2></div>
            : <div className='order-list'>
                <h4>Order List</h4>
                {inventory.filter((item) => item.qty > 0).map(item =>
                    <h5 key={uuidv4()}>{item.name}: {item.qty}</h5>
                )}
            </div>}
    </div>
    )
}

export default OrderList