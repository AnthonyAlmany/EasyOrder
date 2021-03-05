import React from 'react'
import './styles/app.scss'
import SupplierList from './SupplierList'
import suppliers from './inventory'
import HomeIcon from '@material-ui/icons/Home';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


function App() {




    return (
        <div>
            <BrowserRouter>
                <div>
                    <div className="nav">
                        <Link to="/menu"><HomeIcon fontSize="large" /></Link>
                        <Link to="/menu"><h2>KAZBAH'APP</h2></Link>
                    </div>

                    <Switch>
                        <Route path="/menu" exact>
                            <div className="menu">
                                <div className="list">
                                    {Object.keys(suppliers).map(supplierName =>
                                        <Link key={supplierName} to={`/menu/suppliers/${supplierName}`}> <div className="box"> <h2>{supplierName}</h2></div></Link>
                                    )}
                                </div>
                            </div>
                        </Route>

                        <Route path="/menu/suppliers/:supplierName">
                            <SupplierList
                                key={uuidv4()}
                                suppliers={suppliers}
                            />

                        </Route>
                    </Switch>
                </div>
            </BrowserRouter >


        </div>

    )
};

export default App;