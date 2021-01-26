import { Button, Container, Divider, Grid } from "@material-ui/core";
import Reaptcha from 'reaptcha';
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import AdBlockDetect from "react-ad-block-detect";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import * as Apis from "../api/api";
import * as actions from "../store/actions/whitelist.actions";
import * as selectors from "../store/selectors/whitelist.selectors";
import "./Layout.scss";

const useStyles = makeStyles((theme) => ({
    text: {
        color: "black",
        backgroundColor: "black",
        
        "&:hover": {
            backgroundColor: "white",
        },
    },
    reminder: {
        margin: 20
    }
}));

const Whitelist = (props) => {
    const classes = useStyles();
	const dispatch = useDispatch();
	let captcha = null
	let verificationReady = false

    useEffect(() => {
        Apis.getIpUrl().then((results) => {
			dispatch(actions.getIp(results.data));
        });
    }, []);

	const onLoad = () => {
		verificationReady = true
	}
	
	const onVerify = (verification) => {
		Apis.setWhitelist(verification).then((response) => {
			if (response.data === 'success') {
				window.location = "fivem://connect/fivem.pmarp.com:30120";
			} else {
				alert('Failed to whitelist your ip, please refresh the page and try again.')
			}
		})
	}

    return (
        <Container fixed>
            <AdBlockDetect>
                <p className={classes.text}>
                    Hey! You have your adblocker turned on. If you don't see
                    your IP you need to turn it off.
                </p>
            </AdBlockDetect>
            <p></p>
			
            <Grid className={classes.reminder}>
                This box here is now hidden with a fly over, hover your mouse over the black box to see if it's your IP.
            </Grid>
            <Divider/>
			<Reaptcha
				ref={e => (captcha = e)}
				// actual
				sitekey="6LeUrSsaAAAAAK0OpPxDixgAFJ_wmLeJCestJGDs"
				// test
				// sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
				onVerify={onVerify}
				onLoad={onLoad}
				explicit
			/>
			<Button
				disabled={verificationReady}
                variant="contained"
                color="primary"
                component="span"
				onClick={() => captcha.renderExplicitly().catch()}
            >
                Launch the game
            </Button>
            <p className={classes.text}>
                {props.ip ? props.ip : 'Error: Couldn\'t get ip!'} { props.ip ? 'is now whitelisted until the Linux Box restarts!' : 'Please try turning off your ad-block!'}
            </p>
        </Container>
    );
};

const mapStateToProps = createStructuredSelector({
    ip: selectors.selectIp,
});

export default connect(mapStateToProps)(Whitelist);
