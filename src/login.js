import { React, useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import App from './App';
import db from './firebase';

import './styles/app.scss';
import './styles/login.scss';
import styles from './styles/styles-ui'

import TextField from '@material-ui/core/TextField';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { withStyles } from '@material-ui/core/styles';



function Login({ classes }) {

    //Login functions
    const [logPwd, setLogPwd] = useState("");
    const [input, setInput] = useState("");
    // const [checkPwd, setCheckPwd] = useState();


    const getData = () => {
        db.collection('pwd-inventory').onSnapshot(querySnapshot => {
            const pwd = [];
            querySnapshot.forEach(doc => { pwd.push(doc.data()) })
            setLogPwd(pwd[0].pwd)
        })
    };

    useEffect(() => {
        getData();
    }, []);

    const resetInput = () => {
        // setCheckPwd(input);
        setInput("")
    }



    return (
        <div>

            <BrowserRouter>
                <div>
                    <Route path="/" exact>
                        <div className="nav">
                            <h2 className="nav-title">KAZBAH'APP</h2>
                        </div>
                        <div className="login-container flex">
                            <TextField id="standard-basic" value={input} onKeyPress={e => e.key === 'Enter' && resetInput()} onChange={e => setInput(e.target.value)} placeholder="Password" />
                            <Link to={input === logPwd && "/menu"}>
                                {/* <Button
                                    className={classes.root}
                                    type="submit"
                                    onClick={resetInput}
                                    variant="contained">
                                    SEND
                                </Button> */}
                                <PlayCircleFilledIcon fontSize="large" onClick={resetInput} className={classes.root} />
                            </Link>

                        </div>
                    </Route>


                    <Switch>
                        <Route path="/menu">
                            <App />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>

        </div >
    )
}

export default withStyles(styles)(Login);
