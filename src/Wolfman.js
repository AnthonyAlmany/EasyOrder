import React from 'react'
import Group from './components/Group.js'

import './styles/supplier.scss'
import './styles/app.scss'


import Button from '@material-ui/core/Button';


function Wolfman({ inventory, globalQty, increaseHandler, decreaseHandler, submit, copyTemplate, copied, copiedMessage }) {


    const filterArray = inventory.filter(item => item.supplier === "Wolfman").map(foo => foo.type);
    const typeArray = [...new Set(filterArray)]

    return (
        <div>
            {typeArray.map(type =>
                <Group
                    type={type}
                    inventory={inventory}
                    increaseHandler={increaseHandler}
                    decreaseHandler={decreaseHandler} />
            )}
            <p>{copied}</p>
            <div className="list-buttons">
                <Button variant="contained" disabled={globalQty === 0} onClick={submit}>Submit</Button>
                <Button variant="contained" onClick={() => { copiedMessage(); copyTemplate(); }}>Copy</Button>
            </div>

        </div>

    )
}

export default Wolfman;



/* <div className="type dropdow-menu">
                <h3>Beers</h3>
                <div className="cont"></div>
                <Button onClick={dropDownHandler} >{!showList ? <ExpandMoreIcon /> : <ExpandLessIcon />}</Button>
            </div>

            <div className="list-container">
                <div className={showList ? "dropped" : "hidden"}>
                    {inventory.filter(item => item.supplier === 'Wolfman' && item.type === 'beer').map(item =>
                        <Item
                            key={item.id}
                            item={item}
                            increaseHandler={increaseHandler.bind(item)}
                            decreaseHandler={decreaseHandler.bind(item)}
                        />
                    )}
                </div>

            </div> */


/* <div>
                <div className="type dropdow-menu">
                    <h3>Spirits</h3>
                    <div className="cont"></div>
                    <Button onClick={dropDownHandler} >{!showList ? <ExpandMoreIcon /> : <ExpandLessIcon />}</Button>
                </div>

                <div className="list-container">
                    <div className={showList ? "dropped" : "hidden"}>
                        {inventory.filter(item => item.supplier === 'Wolfman' && item.type === 'house spirit').map(item =>
                            <Item
                                key={item.id}
                                item={item}
                                increaseHandler={increaseHandler.bind(item)}
                                decreaseHandler={decreaseHandler.bind(item)}
                            />
                        )}
                    </div>
                </div>
            </div> */

             // const typeArray = ["beer", "house spirit", "Gin", "Vodka", "Tequila", "Rhum", "Scotch", "Liqueur", "Fortified", "Cognac", "Digestive", "Others"];

