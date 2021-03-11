import { React, useState } from 'react'
import Item from "../components/Item.js"
import '../styles/item.scss'
import '../styles/supplier.scss'
import '../styles/app.scss'

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Group({ inventory, increaseHandler, decreaseHandler, type }) {


    const [showList, setShowList] = useState(false);

    const dropDownHandler = (e) => {
        setShowList(!showList);
    }

    return (
        <div>
            <div className="type">
                <h3>{type}</h3>
                <div className="cont"></div>
                {showList && <ExpandMoreIcon onClick={dropDownHandler} />}
                {!showList && <ExpandLessIcon onClick={dropDownHandler} />}
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