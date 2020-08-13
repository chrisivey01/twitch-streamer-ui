import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Card,
    CardHeader,
    CardContent,
    CircularProgress,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    image: {
        height: "20vh",
        paddingLeft: "20px",
        paddingRight: "20px",
        cursor: "pointer",
    },
    streamerInfo: {
        paddingLeft: 0,
        width: "300px",
    },
    cardContent: {
        display: "flex",
        justifyContent:"space-around",
        flexWrap:"wrap"
    },
    ul: {
        listStyle: "none",
        fontSize: 10,
        paddingLeft: "2vh",
        paddingTop: 0,
    },
    darkFont: {
        fontWeight: "bold",
    },
    streamerSections:{
        margin: "20px"
    }
}));

const Streamers = (props) => {
    const classes = useStyles();

    const linkTwitch = (url) => {
        window.location = url;
    };

    return (
        <React.Fragment>
            <Card className={classes.streamerSections}>
                <CardHeader title={props.title} />
                <CardContent className={classes.cardContent}>
                    {props.data.length > 0 ? (
                        props.data.map((streamer, i) => {
                            let imageSrc = streamer.preview.large;
                            return (
                                <React.Fragment key={i}>
                                    {streamer.featured === props.featured ? (
                                        <div className={classes.streamerInfo}>
                                            <img
                                                onClick={() =>
                                                    linkTwitch(
                                                        streamer.channel.url
                                                    )
                                                }
                                                className={classes.image}
                                                src={imageSrc}
                                                href={streamer.channel.connect}
                                                alt={"Big sad"}
                                            ></img>
                                            <Typography component={"span"}>
                                                <div>
                                                    <ul className={classes.ul}>
                                                        <li>
                                                            <span
                                                                className={
                                                                    classes.darkFont
                                                                }
                                                            >
                                                                Name:
                                                            </span>
                                                            {
                                                                streamer.channel
                                                                    .display_name
                                                            }
                                                        </li>
                                                        <li>
                                                            <span
                                                                className={
                                                                    classes.darkFont
                                                                }
                                                            >
                                                                Status:
                                                            </span>
                                                            {
                                                                streamer.channel
                                                                    .status
                                                            }
                                                        </li>
                                                        <li>
                                                            <span
                                                                className={
                                                                    classes.darkFont
                                                                }
                                                            >
                                                                Viewers:
                                                            </span>
                                                            {streamer.viewers}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Typography>
                                        </div>
                                    ) : null}
                                </React.Fragment>
                            );
                        })
                    ) : (
                        <CircularProgress color="secondary" thickness={6.0} />
                    )}
                </CardContent>
            </Card>
        </React.Fragment>
    );
};

export default Streamers;