import React from "react";
import { connect } from "react-redux";
import { gistActions } from "../actions/gistActions";
import GistComponent from "./GistComponent";
import FormDialog from "./FormDialog";
import { Grid } from "@material-ui/core";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.toggleDialog = this.toggleDialog.bind(this);
  }
  toggleDialog() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <Grid xs={12} >
        {this.state.open ? (
          <FormDialog
            {...this.props}
            toggleDialog={this.toggleDialog}
            open={this.state.open}
          />
        ) : (
          <GistComponent {...this.props} />
        )}
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    gistInfo: state.gistInfo
  };
}
export default connect(mapStateToProps)(MainContainer);
