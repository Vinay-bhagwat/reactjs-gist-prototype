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

class CommentComponent extends React.Component {
  renderDate(rawDate) {
    var date = new Date(rawDate);
    return `${date.getDay()}/${date.getMonth() +
      1}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`;
  }
  renderList(gistComments, classes) {
    return gistComments.map(comment => (
      <ListItem
        alignItems="flex-start"
        style={{ background: "white", marginBottom: 3 }}
      >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={comment.user.avatar_url} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant="h5" variant="subtitle2" component="p">
              {comment.body}
            </Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                className={classes.inline}
                variant="h5"
                component="h4"
                color="textPrimary"
                style={{ marginTop: 3,marginBottom: 3 }}
              >
                {comment.user.login}
              </Typography>
              <Typography variant="subtitle2" component="h6">
                'Commented on-'{this.renderDate(comment.created_at)}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    ));
  }
  render() {
    const { classes, gistComments } = this.props;
    return (
      <Card className={classes.card} style={{marginBottom:10}}>
        <CardContent style={{ background: "#00b0ff" }}>
          <Paper
            className={classes.root}
            elevation={1}
            style={{ background: "#4dd0e1" }}
          >
            <Typography variant="h5" component="h3" style={{ padding: 5 }}>
              Comments
            </Typography>
          </Paper>
          <List
            className={classes.root}
            style={{ maxHeight: 200, overflow: "auto" }}
          >
            {gistComments.length!==0? this.renderList(gistComments, classes):
            <Typography variant="h5" component="h4" style={{ padding: 5 }}>
            No comments yet...
          </Typography>}
          </List>
        </CardContent>
      </Card>
    );
  }
}
CommentComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  console.log("comoosfsdf", state.gistComments);

  return {
    gistComments: state.gistComments
  };
}
export default withStyles(styles)(connect(mapStateToProps)(CommentComponent));
