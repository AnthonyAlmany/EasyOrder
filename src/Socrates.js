import React from 'react'
import Item from './components/Item.js'

import './styles/app.scss'

import Button from '@material-ui/core/Button';



function Socrates({ inventory, increaseHandler, decreaseHandler, copied, copiedMessage, copyTemplate }) {

  return (

    <div>
      <div className="list-container">
        <div>

          {inventory.filter(item => item.supplier === 'Socrates').map(item =>
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
    </div>

  )
}

export default Socrates



