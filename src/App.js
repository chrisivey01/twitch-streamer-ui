import React, { useState, useEffect } from "react";
import * as apis from "./api/api";
import { useDispatch } from "react-redux";
import { getTwitchStreamers } from "./store/actions/index";

import TwitchLayout from './components/TwitchLayout';

const App = () => {
    const dispatch = useDispatch();
    //obtain data from my api for twitch
    useEffect(() => {
        apis.getTwitchStreamers().then((results) => {
            dispatch(getTwitchStreamers(results));
        }, []);
    });

    return <TwitchLayout/>;
};

export default App;
