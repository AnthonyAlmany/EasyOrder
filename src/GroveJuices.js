import React from 'react'
import Item from './components/Item.js'
import Button from '@material-ui/core/Button';
import './styles/app.scss'




function GroveJuices({ inventory, increaseHandler, decreaseHandler, copied, copiedMessage, copyTemplate }) {

    return (

        <div>
            <div className="list-container">

                <div>

                    {inventory.filter(item => item.supplier === 'Grove Juices').map(item =>
                        <Item
                            key={item.id}
                            item={item}
                            increaseHandler={increaseHandler.bind(item)}
                            decreaseHandler={decreaseHandler.bind(item)}
                        />
                    )}
                </div>
            </div>

            <p>{copied}</p>
            <div className="list-buttons">
                <Button variant="contained" onClick={() => { copiedMessage(); copyTemplate(); }}>Copy</Button>
            </div>
        </div >

    )
}

export default GroveJuices



