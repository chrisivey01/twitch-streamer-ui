import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Divider,
} from "@material-ui/core";
import Streamers from "./Streamers";

const useStyles = makeStyles((theme) => ({
    titleStretch: {
        maxWidth: "100vw",
        backgroundColor: "#333333"
    },
    body: {
        display: "block",
        padding: "20px",
        color: "F2F2F2",
    },

}));

const TwitchLayout = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            {/* <ThemeProvider theme={darkTheme}> */}
                <AppBar className={classes.titleStretch} position="static">
                    <Toolbar>
                        <Typography>PMA-RP Streamers</Typography>
                    </Toolbar>
                </AppBar>
                <Container>
                    <Streamers
                        title={"Featured Streamers"}
                        data={props.streamers}
                        featured={true}
                    />
                    <Divider variant="middle" />
                    <Streamers
                        title={"Streamers"}
                        data={props.streamers}
                        featured={false}
                    />
                </Container>
            {/* </ThemeProvider> */}
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return { streamers: state.twitchReducer.twitchStreamers };
};
export default connect(mapStateToProps)(TwitchLayout);
