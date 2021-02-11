import React from 'react'
import './styles/app.scss'
import SupplierList from './SupplierList'
import suppliers from './inventory'
import HomeIcon from '@material-ui/icons/Home';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";



function App() {

    return (
        <BrowserRouter>
            <div>
                <div className="nav">
                    <Link to="/"><HomeIcon fontSize="large" /></Link>
                    <Link to="/"><h2>KAZBAH'APP</h2></Link>
                </div>

                <Switch>
                    <Route path="/" exact>
                        <div className="menu">
                            <div className="list">
                                {Object.keys(suppliers).map(supplierName =>
                                    <Link key={supplierName} to={`/suppliers/${supplierName}`}> <div className="box"> <h2>{supplierName}</h2></div></Link>
                                )}
                            </div>
                        </div>
                    </Route>

                    <Route path="/suppliers/:supplierName" children={
                        <SupplierList suppliers={suppliers}
                        />
                    }>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter >

    )
};

export default App;