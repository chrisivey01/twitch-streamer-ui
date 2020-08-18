import React, { useEffect } from "react";
import * as Apis from "../api/api";
import { connect, useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions/whitelist.actions";
import * as selectors from "../store/selectors/whitelist.selectors";
import { Container, Button, Typography } from "@material-ui/core";
import { createStructuredSelector } from "reselect";
import AdBlockDetect from 'react-ad-block-detect';

const Whitelist = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        Apis.getIpUrl().then((results) => {
            dispatch(actions.getIp(results.data));
        });
    }, []);

    const fivem = () => {
        Apis.setWhitelist(props.ip).then(results => console.log(results.data.finishedMessage));
        window.location = "fivem://connect/fivem.pmarp.com:30120";
    };

    return (
        <Container fixed>
            <AdBlockDetect>
                <p>Show this if an ad blocker has been enabled.</p>
            </AdBlockDetect>
            <Button variant="contained" color="primary" component="span" onClick={() => fivem()}>Launch the game</Button>
            <Typography>
                {props.ip ? props.ip : null} is now whitelisted until the
                Linux Box restarts!
            </Typography>
            <Typography variant='h4'>
                If you do not see your IP - Please turn your ad blocker off.
            </Typography>

        </Container>
    );
};

const mapStateToProps = createStructuredSelector({
    ip: selectors.selectIp,
});

export default connect(mapStateToProps)(Whitelist);
