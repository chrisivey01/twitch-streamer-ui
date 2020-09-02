import React, { useState, useEffect } from "react";
import * as Apis from "./api/api";
import { useDispatch } from "react-redux";
import { getTwitchStreamers } from "./store/actions/twitch.actions";
import { Switch, Route, Redirect } from "react-router-dom";

import TwitchLayout from "./components/twitch-layout";
import Whitelist from "./components/whitelist";
import Header from "./components/Header";

import "../src/components/Layout.scss";
import { makeStyles } from "@material-ui/core";

const App = () => {
    const dispatch = useDispatch();
    //obtain data from my api for twitch
    useEffect(() => {
        Apis.getTwitchStreamers().then((results) => {
            dispatch(getTwitchStreamers(results));
        }, []);
    });

    const useStyle = makeStyles((theme) => ({
        background: {
            backgroundColor: "var(--primary)",
            height: "98.91vh",
            width: "100vw",
        }
    }))

    const classes = useStyle();

    return (
        <div className={classes.background}>
            <Header />
            <p>.</p>
            <p>.</p>
            <Switch>
                <Route exact path="/" component={TwitchLayout} />
                <Route path="/whitelist" component={Whitelist} />
            </Switch>
        </div>
    );
};

export default App;
