import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
    Container,
    Divider,
} from "@material-ui/core";
import Streamers from "./streamers";

const useStyles = makeStyles((theme) => ({
    titleStretch: {
        maxWidth: "100vw",
        backgroundColor: "#333333",
    },
    body: {
        display: "block",
        padding: "20px",
        color: "F2F2F2",
    },
    toolBarItems: {
        color:"#E3E3E3",
        margin:"0 25px 0px 10px",
        height:"inherit"
    },
    divider:{
        backgroundColor:"#E3E3E3"
    }
}));

const TwitchLayout = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return { streamers: state.twitchReducer.twitchStreamers };
};
export default connect(mapStateToProps)(TwitchLayout);
