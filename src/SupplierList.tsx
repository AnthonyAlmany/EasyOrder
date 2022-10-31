import * as React from 'react'
import { useState } from 'react';
import { useParams } from "react-router-dom";

import Item from './components/Item'
import Date from './components/Date'
import Options from './components/Options'

import Button from '@material-ui/core/Button';
import {supplierList, supplierParams, thisType, newStateType, QtyOperation, supplierDetails} from "./types";



function SupplierList({ suppliers }: supplierList) {

  const { supplierName} = useParams<supplierParams>();
  const [day, setDay] = useState<string>("");
  const [globalQty, setGlobalQty] = useState(suppliers[supplierName].items.reduce((acc, item) => { acc += item.qty; return acc; }, 0));
  const [message, setMessage] = useState<string>('');
  const [copied, setCopied] = useState("");
  const [inventory, setInventory] = useState<newStateType[]>(suppliers[supplierName].items);
  const [supplierDetails] = useState<supplierDetails>(suppliers[supplierName]);
  const [deleteToggle, setDeleteToggle] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('')

  const getQtyForOperation  = (item: newStateType, operation: QtyOperation) => {
    switch (operation) {
      case QtyOperation.Decrease: return Math.max(0, item.qty - 1);
      case QtyOperation.Increase: return Math.min(10, item.qty + 1);
    };
  }
  
  const qtyHandler = (item: newStateType, operation : QtyOperation) => {
    const newQty = getQtyForOperation(item, operation);
   
    const newState = inventory.map(it => {
      if (it.id !== item.id) return it;
      return { ...item, qty: newQty };
    });

    setInventory(newState);
    setMessage(newState.filter(e => e.qty).map(el => {

      return (
        `- ${el.qty} ${el.pack} of ${el.name}`
      );
    }).join("\n"));

    setGlobalQty(newState.reduce((acc, item) => { acc += item.qty; return acc; }, 0));
  }

  const deleteItem = function (this: thisType) {
    setInventory(inventory.filter(it => it.id !== this.id && it))
  }

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



  console.log(inventory.filter(item => item.name?.toLowerCase().includes("Full")))

    return (
      
      <div>
        <Options
          supplierDetails={supplierDetails}
          supplierName={supplierName} 
          inventory={inventory}
          setInventory={setInventory}
          deleteToggle={deleteToggle}
          setDeleteToggle={setDeleteToggle}
          setSearch={setSearch}
          />

          {inventory.map((item: newStateType ) =>
            <Item
              key={item.id}
              item={item}
              increaseHandler={qtyHandler.bind(null, item, QtyOperation.Increase)}
              decreaseHandler={qtyHandler.bind(null, item, QtyOperation.Decrease)}
              deleteItem={deleteItem.bind(item)}
              deleteToggle={deleteToggle}
            />
          )}
    

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
  }


export default SupplierList



      