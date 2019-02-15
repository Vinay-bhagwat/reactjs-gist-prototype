import React from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
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

class GistApiCountComponent extends React.Component {

  renderList(gistApiCount, classes) {
    return gistApiCount.map(gistApi => (
      <ListItem
        alignItems="flex-start"
        style={{ background: "white", marginBottom: 3 }}
      >
        <ListItemText
          primary={
            <Typography variant="h5" variant="subtitle2" component="p">
            GIST API TYPE: {gistApi.gistApiType}
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
                style={{ marginTop: 3, marginBottom: 3 }}
              >
               API HIT COUNT: {gistApi.apiHitCount}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    ));
  }
  render() {
    const { classes, gistApiCount } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent style={{ background: "#00b0ff" }}>
          <Paper
            className={classes.root}
            elevation={1}
            style={{ background: "#4dd0e1" }}
          >
            <Typography variant="h5" component="h3" style={{ padding: 5 }}>
              API Count
            </Typography>
          </Paper>
          <List
            className={classes.root}
            style={{ maxHeight: 200, overflow: "auto" }}
          >
            {gistApiCount.length !== 0 ? (
              this.renderList(gistApiCount, classes)
            ) : (
              <Typography variant="h5" component="h4" style={{ padding: 5 }}>
                No Count available now
              </Typography>
            )}
          </List>
        </CardContent>
      </Card>
    );
  }
}
GistApiCountComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    gistApiCount: state.gistApiCount
  };
}
export default withStyles(styles)(
  connect(mapStateToProps)(GistApiCountComponent)
);
