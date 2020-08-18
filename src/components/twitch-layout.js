import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
    Container,
    Divider,
} from "@material-ui/core";
import Streamers from "./streamers";
import "./Layout.scss"

const useStyles = makeStyles((theme) => ({
    titleStretch: {
        maxWidth: "100vw",
        maxHeight: "5vw",
        paddingLeft: 0,
        backgroundColor: "var(--primary)",
    },
    body: {
        display: "block",
        padding: "20px",
        color: "var(--primary)",
    },
    toolBarItems: {
        color:"#E3E3E3",
        margin:"0 25px 0px 10px",
        height:"inherit"
    },
    divider:{
        backgroundColor:"#E3E3E3"
    },
    bigBootyBitches: {
        backgroundColor: "transparent",
    },
}));

const TwitchLayout = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container className={classes.bigBootyBitches}>
                <Streamers
                    title={"Featured Streamers"}
                    data={props.streamers}
                    featured={true}
                />
                <Divider variant="middle" className={classes.bigBootyBitches} />
                <Streamers
                    title={"Streamers"}
                    data={props.streamers}
                    featured={false}
                />
            </Container>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return { streamers: state.twitchReducer.twitchStreamers };
};
export default connect(mapStateToProps)(TwitchLayout);
