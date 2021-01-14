import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "../src/components/Layout.scss";
import * as Apis from "./api/api";
import Header from "./components/Header";
import TwitchLayout from "./components/TwitchLayout";
import Whitelist from "./components/Whitelist";
import { getTwitchStreamers } from "./store/actions/twitch.actions";



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
            height: "100vh",
        }
    }))

    const classes = useStyle();

    return (
        <div className={classes.background}>
            <Header />
            <Switch>
                <Route exact path="/" component={TwitchLayout} />
                <Route path="/whitelist" component={Whitelist} />
            </Switch>
        </div>
    );
};

export default App;
