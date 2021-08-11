import React, {useEffect, useState} from 'react';
import './App.css';
import {Box, Button, Container, Link as MLink} from "@material-ui/core";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./pages/Home";
import ItemList from "./pages/ItemList";
import SingleItem from "./pages/SingleItem";
import {HOME, PRODUCT_LIST, SINGLE_PRODUCT} from "./routes";
import {useDispatch, useSelector} from "react-redux";
import {setToken, setUser} from "./store/user/userActionCretor";
import {selectUser} from "./store/user/userSelector";
import {loginUser} from "./store/user/userAction";

function App() {

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(loginUser('admin@user.com', 'crwd123'));
    }, [])
    const user = useSelector(selectUser);

const [data, setData] = useState({})

    return (
        <Router>

            <Switch>
                <Route path={PRODUCT_LIST} exact component={ItemList}/>
                <Route path={SINGLE_PRODUCT} component={SingleItem}/>
                <Route path={HOME} exact component={Home}/>
            </Switch>

        </Router>

    )

};

export default App;