import React, { useState } from 'react'
import './styles/app.scss'
import Socrates from './Socrates'
import GroveJuices from './GroveJuices'
import Sfp from './Sfp'
import Wolfman from './Wolfman'
import items from './inventory'
import HomeIcon from '@material-ui/icons/Home';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";



function App() {

    const [inventory, setInventory] = useState(items);
    const [message, setMessage] = useState('')
    const [globalQty, setGlobalQty] = useState(inventory.reduce((acc, item) => { acc += item.qty; return acc; }, 0));
    const [copied, setCopied] = useState("");


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
        setCopied("")
    };


    const copiedMessage = () => {
        setCopied("Order has been copied!")
    }

    const copyTemplate = () => {
        navigator.clipboard.writeText(`Hello,\n\nI woud like to order for Kazbah Darling Harbour the following items:\n\n${message}\n\nDelivery on Wednesday\n
        Thanks,
        `)
    };

    const submit = () => {
        window.open(`mailto:timandrews@wolfman.com.au?cc=zahi@kazbah.com.au,dhmanager@kazbah.com.au&subject=Ordering Request for Kazbah&body=${encodeURIComponent(
            `Hello,\n\nI would like to order for Kazbah Darling Harbour the following items:\n\n${message}\n\nDelivery on Wednesday\n
 Thanks,
 `)}`);
    };

    return (
        <BrowserRouter>
            <div>
                <div className="nav">
                    <Link onClick={resetQty} to="/"><HomeIcon fontSize="large" /></Link>
                    <Link onClick={resetQty} to="/"><h2>KAZBAH'APP</h2></Link>

                </div>
                <Switch>
                    <Route path="/" exact>
                        <div className="menu">
                            <div className="list">
                                <Link to="/Socrates"> <div className="box"> <h2>Socrates</h2></div></Link>
                                <Link to="/GroveJuices"> <div className="box"> <h2>Grove Juices</h2></div></Link>
                                <Link to="/SFP"> <div className="box"> <h2>SFP</h2></div></Link>
                                <Link to="/Wolfman"> <div className="box"> <h2>Wolfman</h2></div></Link>
                            </div>
                        </div>
                    </Route>
                    <Route path="/Socrates">
                        <Socrates
                            copiedMessage={copiedMessage}
                            copied={copied}
                            copyTemplate={copyTemplate}
                            inventory={inventory}
                            increaseHandler={increaseHandler}
                            decreaseHandler={decreaseHandler}
                        />
                    </Route>
                    <Route path="/GroveJuices">
                        <GroveJuices
                            copiedMessage={copiedMessage}
                            copied={copied}
                            copyTemplate={copyTemplate}
                            inventory={inventory}
                            increaseHandler={increaseHandler}
                            decreaseHandler={decreaseHandler}
                        />
                    </Route>
                    <Route path="/SFP">
                        <Sfp
                            copiedMessage={copiedMessage}
                            copied={copied}
                            copyTemplate={copyTemplate}
                            inventory={inventory}
                            increaseHandler={increaseHandler}
                            decreaseHandler={decreaseHandler}
                        />
                    </Route>
                    <Route path="/Wolfman">
                        <Wolfman
                            copiedMessage={copiedMessage}
                            copied={copied}
                            copyTemplate={copyTemplate}
                            inventory={inventory}
                            submit={submit}
                            globalQty={globalQty}
                            increaseHandler={increaseHandler}
                            decreaseHandler={decreaseHandler}
                        />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>

    )
};

export default App;



    // const suppliers = items
    //     .map(({ supplier }) => supplier)
    //     .reduce((acc, curr) => {
    //         if (!acc.length || acc.indexOf(curr) === -1) {
    //             return [...acc].concat(curr);
    //         }
    //         return acc;
    //     }, []);



