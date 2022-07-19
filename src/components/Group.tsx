import  * as React from 'react'
import  {useState}  from 'react'
import Item from "./Item"


import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {groupType} from "../types"



function Group({ inventory, increaseHandler, decreaseHandler, type }:groupType) {


    const [showList, setShowList] = useState<boolean>(false);

    const dropDownHandler = () => {
        setShowList(!showList);
    }

    return (
        <div>
            <div className="type">
                <h3>{type}</h3>
                <div className="cont"></div>
                {showList && <ExpandMoreIcon id="expand-icon" onClick={dropDownHandler} />}
                {!showList && <ExpandLessIcon id="expand-icon" onClick={dropDownHandler} />}
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