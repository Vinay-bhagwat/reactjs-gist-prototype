import React from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import { gistActions } from "../actions/gistActions";
import Divider from "@material-ui/core/Divider";
import CommentComponent from "./CommentComponent";
import UserProfile from "./UserProfile";
import GistFileDetails from "./GistFileDetails";
import CircularProgress from "@material-ui/core/CircularProgress";
import GistApiCountComponent from "./GistApiCountComponent";
const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },

  pos: {
    marginBottom: 12
  }
};

class GistComponent extends React.Component {
  render() {
    const { classes, gistInfo } = this.props;
    const file = Object.values(gistInfo.files)[0];
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={40}
        
        style={{width:'100%', marginTop: 50 }}
      >
        {gistInfo.owner.login === "" ? (
          <CircularProgress
            style={{ marginTop: 200 }}
            className={classes.progress}
          />
        ) : (
          <Card className={classes.card} style={{ margin: 50 }}>
            <CardContent style={{ background: "blueviolet" }}>
              <UserProfile {...this.props} />
              <GistFileDetails {...this.props} />
            </CardContent>
            <CardActions />
            <CommentComponent {...this.props} />
            <GistApiCountComponent {...this.props}/>
          </Card>
        )}
      </Grid>
    );
  }
}
GistComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  console.log("fnfk", state.gistComments);

  return {
    gistInfo: state.gistInfo
  };
}
export default withStyles(styles)(connect(mapStateToProps)(GistComponent));
