import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
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

const UserProfile=(props)=>{
    const { classes, gistInfo } = props;
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            style={{ height: 100, width: 100 }}
            src={gistInfo.owner.avatar_url}
          />
        </ListItemAvatar>
        <ListItemText>
          <Typography
            color="textPrimary"
            variant="h1"
            component="h2"
          >
            {gistInfo.owner.login}
          </Typography>
          <Typography
            variant="h4"
            color="textSecondary"
            component="h4"
          >
            owner
          </Typography>
        </ListItemText>
      </ListItem>
    );
  }
UserProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserProfile);
