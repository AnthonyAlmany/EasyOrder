import * as React from 'react'
import './styles/app.css'
import Main from './Main'
import suppliers from './inventory'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


function App() {




    return (
        <>
            <BrowserRouter>
                <div>
                    <div className="nav">
                    
                        <Link to="/"><span className="logo">Easy Order</span></Link>
                    </div>
                    

                    <Switch>
                        <Route path="/" exact>
                            <div className="menu">
                                <div className="sample-message">
                                    <h2>Please note that for privacy reasons, this is a sample version and not in use.</h2>
                                </div>
                                <div className="list">
                                    {Object.keys(suppliers).map(supplierName =>
                                        <Link key={supplierName} to={`/suppliers/${supplierName}`}> <div className="box"> <h2>{supplierName}</h2></div></Link>
                                    )}
                                </div>
                            </div>
                        </Route>

                        <Route path="/suppliers/:supplierName">
                            <Main
                                key={uuidv4()}
                                suppliers ={suppliers}
                            />

                        </Route>
                    </Switch>
                </div>
            </BrowserRouter >


        </>

    )
};

export default App;

