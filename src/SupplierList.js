import { React, useState } from 'react'
import { useParams } from "react-router-dom";
import Item from './components/Item.js'
import options from './select-day.js'
import Group from './components/Group.js'

import './styles/app.scss'

import Button from '@material-ui/core/Button';



function SupplierList({ suppliers }) {



  const { supplierName } = useParams();
  const [day, setDay] = useState("Wednesday");
  const [globalQty, setGlobalQty] = useState(suppliers[supplierName].items.reduce((acc, item) => { acc += item.qty; return acc; }, 0));
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState("");
  const [inventory, setInventory] = useState(suppliers[supplierName].items);


  const increaseHandler = function () {
    const newState = inventory.map(it => {
      if (it.id !== this.id) return it;
      return { ...this, qty: this.qty + 1 > 10 ? 10 : this.qty + 1 };
    });



    setInventory(
      newState
    );

    setMessage(newState.filter(e => e.qty > 0).map(el => {

      return (
        `- ${el.qty} ${el.pack} of ${el.name}`
      );
    }).join("\n"));

    setGlobalQty(newState.reduce((acc, item) => { acc += item.qty; return acc; }, 0));
  };


  const decreaseHandler = function () {
    const newState = inventory.map(it => {
      if (it.id !== this.id) return it;
      return { ...this, qty: this.qty - 1 <= 0 ? 0 : this.qty - 1 };
    })
    setInventory(
      newState
    );

    setMessage(newState.filter(e => e.qty > 0).map(el => {
      return (
        `- ${el.qty} ${el.pack} of ${el.name}`
      );
    }).join("\n"));

    setGlobalQty(newState.reduce((acc, item) => { acc += item.qty; return acc; }, 0));
  };

  const resetQty = () => {
    const newState = inventory.map(it => { return { ...it, qty: 0 } });
    setInventory(newState)
    setGlobalQty(0);
    setCopied("")
  };


  const copiedMessage = () => {
    setCopied("Order has been copied!")
  }

  const copyTemplate = () => {
    navigator.clipboard.writeText(`Hello,\n\nI would like to order for Kazbah Darling Harbour the following items:\n\n${message}\n\nDelivery on ${day}\n
      Thanks,
      `)
  };

  const submit = () => {
    window.open(`mailto:${suppliers[supplierName].emailAddress}?cc=zahi@kazbah.com.au,dhmanager@kazbah.com.au&subject=Ordering Request for Kazbah&body=${encodeURIComponent(
      `Hello,\n\nI would like to order for Kazbah Darling Harbour the following items:\n\n${message}\n\nDelivery on ${day}\n
Thanks,
`)}`);
  };


  const handleChange = (e) => {
    setDay(e.target.value)
  }

  const suppArray = suppliers[supplierName].items;
  const filterSuppArray = suppArray.map(items => items.type)
  const typeArray = [...new Set(filterSuppArray)]


  if (typeArray.length === 1) {
    return (

      <div>


        <div className="list-container">
          <div>
            {inventory.map(item =>
              <Item
                key={item.id}
                item={item}
                increaseHandler={increaseHandler.bind(item)}
                decreaseHandler={decreaseHandler.bind(item)}
              />
            )}
          </div>
        </div>
        <div className="delivery-container">
          <h3>Delivery:</h3>
          <div className="select-container">

            <select value={day} onChange={handleChange}>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        <p>{copied}</p>
        <div className="list-buttons">
          <Button variant="contained" onClick={() => { resetQty(); }}>Clear</Button>
          <Button variant="contained" disabled={!globalQty} onClick={() => { copiedMessage(); copyTemplate(); }}>Copy</Button>
          {suppliers[supplierName].canSendEmail && <Button variant="contained" disabled={!globalQty} onClick={() => { submit(); }}>Send Email</Button>}
        </div>
      </div>

    )
  } else {
    return (
      <div>
        {typeArray.map(type =>
          <Group
            type={type}
            inventory={inventory}
            increaseHandler={increaseHandler}
            decreaseHandler={decreaseHandler} />
        )}
        <div className="delivery-container">
          <h4>Delivery:</h4>
          <div className="select-container">

            <select value={day} onChange={handleChange}>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
        <p>{copied}</p>
        <div className="list-buttons">
          <Button variant="contained" onClick={() => { resetQty(); }}>Clear</Button>
          <Button variant="contained" disabled={!globalQty} onClick={() => { copiedMessage(); copyTemplate(); }}>Copy</Button>
          {suppliers[supplierName].canSendEmail && <Button variant="contained" disabled={!globalQty} onClick={() => { submit(); }}>Send Email</Button>}
        </div>

      </div>
    )
  }


}

export default SupplierList



