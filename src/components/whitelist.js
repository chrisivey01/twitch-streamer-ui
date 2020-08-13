import React, { useEffect } from "react";
import * as Apis from "../api/api";
import { connect, useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions/whitelist.actions";
import * as selectors from "../store/selectors/whitelist.selectors";
import { Container, Button, Typography } from "@material-ui/core";
import { createStructuredSelector } from "reselect";

const Whitelist = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        Apis.getIpUrl().then((results) => {
            dispatch(actions.getIp(results));
        });
    }, []);

    const fivem = () => {
        window.location = "fivem://connect/fivem.pmarp.com:30120";
    };

    return (
        <Container fixed>
            <Button onClick={() => fivem()}>Launch the game</Button>
            <Typography>
                {props.ip ? props.ip.ip : null} is now whitelisted until the
                Linux Box restarts!
            </Typography>
        </Container>
    );
};

const mapStateToProps = createStructuredSelector({
    ip: selectors.selectIpInformation,
});

export default connect(mapStateToProps)(Whitelist);
