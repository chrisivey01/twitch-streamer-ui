import react from "react"
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import "./Layout.scss"

const useStyles = makeStyles((theme) => ({
    hi: {
        color: "brown",
        fontSize: "22px",
        display: "flex",
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
      },
      gridList: {
        width: 500,
        height: 450,
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
}));

const discord = (props) => {
const classes = makeStyles;
    return (
        <p>Hi</p>
    );

}

const mapStateToProps = (state) => {
    return { discord };
};

export default connect(discord);