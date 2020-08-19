import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import "./Layout.scss"

const useStyles = makeStyles((theme) => ({
    hi: {
        color: "brown",
        fontSize: "22px"
    }
}));

const main = (props) => {
    const classes = useStyles();
    return (
       <p className={classes.hi}>Welcome to PMA RP!</p>
    );
};

const mapStateToProps = (state) => {
    return { main };
};

export default connect(mapStateToProps)(main);
