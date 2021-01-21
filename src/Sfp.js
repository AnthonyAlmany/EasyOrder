import React from 'react'
import Item from './components/Item.js'
import Button from '@material-ui/core/Button';
import './styles/supplier.scss'




function Sfp({ inventory, message, globalQty, increaseHandler, decreaseHandler }) {

    return (

        <div>
            <div className="type">
                <h3>Fruits</h3>
                <div className="cont"></div>
            </div>

            <div className="list-container">
                {inventory.filter(item => item.supplier === 'Sfp' && item.type === 'fruit').map(item =>
                    <Item
                        key={item.id}
                        item={item}
                        increaseHandler={increaseHandler.bind(item)}
                        decreaseHandler={decreaseHandler.bind(item)}
                    />
                )}

            </div>

            <div className="type">
                <h3>Dry goods</h3>
                <div className="cont"></div>
            </div>

            <div className="list-container">
                {inventory.filter(item => item.supplier === 'Sfp' && item.type === 'dry goods').map(item =>
                    <Item
                        key={item.id}
                        item={item}
                        increaseHandler={increaseHandler.bind(item)}
                        decreaseHandler={decreaseHandler.bind(item)}
                    />
                )}

            </div>

            <div className="list-buttons">
                <Button variant="contained" onClick={() => navigator.clipboard.writeText(`Hello,\n\nI woud like to order for Kazbah Darling Harbour the following items:\n\n${message}\n\nDelivery on Wednesday\n
 Thanks,
 `)}>Copy</Button>
            </div>
        </div>

    )
}

export default Sfp;



