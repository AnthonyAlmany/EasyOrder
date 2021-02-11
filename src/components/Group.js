import { React, useState } from 'react'
import Item from "../components/Item.js"
import Button from '@material-ui/core/Button';
import '../styles/item.scss'
import '../styles/supplier.scss'
import '../styles/app.scss'

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Group({ inventory, increaseHandler, decreaseHandler, type }) {


    const [showList, setShowList] = useState(false);

    const dropDownHandler = () => {
        setShowList(!showList)
    }

    return (
        <div>
            <div className="type">
                <h3>{type}</h3>
                <div className="cont"></div>
                <Button onClick={dropDownHandler} >{!showList ? <ExpandMoreIcon /> : <ExpandLessIcon />}</Button>
            </div>

            <div className="list-container">
                <div className={showList ? "dropped" : "hidden"}>
                    {inventory.filter(item => item.type === `${type}`).map(item =>
                        <Item
                            key={item.id}
                            item={item}
                            increaseHandler={increaseHandler.bind(item)}
                            decreaseHandler={decreaseHandler.bind(item)}
                        />
                    )}
                </div>

            </div>
        </div>
    );
}

export default Group;