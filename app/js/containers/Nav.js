import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import FormDialog from "../components/FormDialog";

export class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar style={{ justifyContent: "center" }}>
            <Typography variant="h5" component="h3" style={{ marginLeft: 5 }}>
              GIST API PROTOTYPE
            </Typography>
          </Toolbar>
          {/* <FormDialog /> */}
        </AppBar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userdetails: state.authentication
  };
}

export default connect(mapStateToProps)(Nav);
