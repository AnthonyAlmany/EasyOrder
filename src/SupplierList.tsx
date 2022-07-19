import * as React from 'react'
import { useState } from 'react';
import { useParams } from "react-router-dom";

import Item from './components/Item'
import Group from './components/Group'
import Date from './components/Date'

import Button from '@material-ui/core/Button';
import {supplierList, supplierParams, thisType, newStateType} from "./types";



function SupplierList({ suppliers }: supplierList) {

  const { supplierName} = useParams<supplierParams>();
  const [day, setDay] = useState<string>("Wednesday");
  const [globalQty, setGlobalQty] = useState(suppliers[supplierName].items.reduce((acc, item) => { acc += item.qty; return acc; }, 0));
  const [message, setMessage] = useState<string>('');
  const [copied, setCopied] = useState("");
  const [inventory, setInventory] = useState<newStateType[]>(suppliers[supplierName].items);


  const increaseHandler = function (this : thisType) {
    const newState : newStateType[] = inventory.map((it) => {
      if (it.id !== this.id ) return it;
      return { ...this, qty: this.qty + 1 > 10 ? 10 : this.qty + 1 };
 
    });

    setInventory(newState);
    setMessage(newState.filter(e => e.qty > 0).map((el) => {

      return (
        `- ${el.qty} ${el.pack} of ${el.name}`
      );
    }).join("\n"));

    setGlobalQty(newState.reduce((acc, item) => { acc += item.qty; return acc; }, 0));

  };


  const decreaseHandler = function (this : thisType) {
    const newState = inventory.map(it => {
      if (it.id !== this.id) return it;
      return { ...this, qty: this.qty - 1 <= 0 ? 0 : this.qty - 1 };
    });

    setInventory(newState);
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
    navigator.clipboard.writeText(`Hello,\n\nI would like to order for "My Company" the following items:\n\n${message}\n\nDelivery on ${day}\n
      Thanks,
      `)
  };

  const submit = () => {
    window.open(`mailto:${suppliers[supplierName].emailAddress}?cc=yourcc@email.com.au&subject=Ordering Request for "My Company"&body=${encodeURIComponent(
      `Hello,\n\nI would like to order for "My Company" the following items:\n\n${message}\n\nDelivery on ${day}\n
Thanks,
`)}`);
  };



  const suppArray  = suppliers[supplierName].items;
  const filterSuppArray  = suppArray.map(items => items.type)
  const typeArray = [...new Set(filterSuppArray)]


  if (typeArray.length === 1) {
    return (
      
      <div>
        <div className="list-container">
          {inventory.map((item: newStateType ) =>
            <Item
              key={item.id}
              item={item}
              increaseHandler={increaseHandler.bind(item)}
              decreaseHandler={decreaseHandler.bind(item)}
            />
          )}
        </div>

        <Date
          day={day}
          setDay={setDay}
        />

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
            key={type}
            type={type}
            inventory={inventory}
            increaseHandler={increaseHandler}
            decreaseHandler={decreaseHandler} />
        )}

        <Date
          day={day}
          setDay={setDay}
        />

        <p>{copied}</p>
        <div className="list-buttons">
          <Button variant="contained" onClick={() => { resetQty(); }}><span>Clear</span></Button>
          <Button variant="contained" disabled={!globalQty} onClick={() => { copiedMessage(); copyTemplate(); }}><span>Copy</span></Button>
          {suppliers[supplierName].canSendEmail && <Button variant="contained" disabled={!globalQty} onClick={() => { submit(); }}>Send Email</Button>}
        </div>
      </div>
    )
  }


}

export default SupplierList




      