import React from 'react'
import Item from './components/Item.js'
import Button from '@material-ui/core/Button';
import './styles/app.scss'




function GroveJuices({ inventory, message, increaseHandler, decreaseHandler }) {
    // let { name, type } = useParams();

    // const [showList, setShowList] = useState(false);
    // const dropDownHandler = () => {
    //   setShowList(!showList)
    // }
    return (

        <div>
            {/* <h3>Supplier #{name} - {type}</h3> */}
            <div className="list-container">


                <div className="dropdown-menu">
                    {/* <Button onClick={dropDownHandler} >{!showList ? <ExpandMoreIcon /> : <ExpandLessIcon />}</Button> */}
                </div>
                <div>
                    {/* <div className={showList ? "dropped" : "hidden"}> */}
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


            <div className="list-buttons">
                {/* <Button variant="contained" disabled={globalQty === 0} onClick={submit}>Submit</Button> */}
                <Button variant="contained" onClick={() => navigator.clipboard.writeText(`Hello,\n\nI woud like to order for Kazbah Darling Harbour the following items:\n\n${message}\n\nDelivery on Wednesday\n
 Thanks,
 `)}>Copy</Button>
            </div>
        </div>

    )
}

export default GroveJuices



