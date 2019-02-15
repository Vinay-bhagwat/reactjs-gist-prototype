import React from "react";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
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

const GistFileDetails = props => {
  const { classes, gistInfo } = props;
  const file = Object.values(gistInfo.files)[0];
  const date = new Date(gistInfo.created_at);

  return (
    <Paper className={classes.root} elevation={1}>
      <Typography
        variant="h5"
        component="h3"
        style={{ marginBottom: 3, padding: 5 }}
      >
        Gist: {file.filename}
      </Typography>
      <Typography
        paragraph={true}
        style={{ padding: 5 }}
        component="p"
        variant="h6"
      >
        Created on -{" "}
        {`${date.getDay()}/${date.getMonth() +
          1}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`}
      </Typography>
      <div style={{ padding: 20, background: "ghostwhite" }}>
        <Typography
          paragraph={true}
          variant="subtitle2"
          component="p"
          style={{ maxHeight: 200, overflow: "auto" }}
        >
          {file.content}
        </Typography>
      </div>
    </Paper>
  );
};
GistFileDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GistFileDetails);
