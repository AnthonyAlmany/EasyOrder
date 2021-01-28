import React from 'react'
import Item from './components/Item.js'
import Button from '@material-ui/core/Button';
import './styles/supplier.scss'




function Sfp({ inventory, increaseHandler, decreaseHandler, copied, copiedMessage, copyTemplate }) {

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
            <p>{copied}</p>
            <div className="list-buttons">
                <Button variant="contained" onClick={() => { copiedMessage(); copyTemplate(); }}>Copy</Button>
            </div>
        </div>

    )
}

export default Sfp;



