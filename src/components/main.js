import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import "./Layout.scss"

const useStyles = makeStyles((theme) => ({
    hi: {
        color: "brown",
    }
}));

const main = (props) => {
    const classes = useStyles();
    return (
       <p>Hi</p>
    );
};

const mapStateToProps = (state) => {
    return { selectors: main };
};

export default connect(mapStateToProps)(main);
