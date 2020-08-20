import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import "./Layout.scss"
import { 
GridList,
GridListTile,
GridListTileBar,
ListSubheader,
IconButton,
Avatar,
}
from "@material-ui/core"
import tileData from "./tileData"
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';

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

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const main = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">PMA-RP</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <p className={classes.hi}>Welcome to PMA-RP!</p>
      <Avatar alt="Discord" cursor="clickable" component={Link} to="discord">D</Avatar>
    </div>
    );
};

const mapStateToProps = (state) => {
    return { main };
};

export default connect(mapStateToProps)(main);
