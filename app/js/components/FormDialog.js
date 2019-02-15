import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import { gistActions } from "../actions/gistActions";

export class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gistId: "" };
    this.handleChange = this.handleChange.bind(this);
    this.subMitForm = this.subMitForm.bind(this);
  }


  handleChange(e) {
    console.log(e.target.value);

    this.setState({ gistId: e.target.value });
  }
  subMitForm() {
    this.props.toggleDialog();
    this.props.dispatch(gistActions.gistApiCount())
    this.props.dispatch(gistActions.gistDetails(this.state.gistId));
    this.props.dispatch(gistActions.gistComments(this.state.gistId));
  }
  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" variant="h5" component="h3">GIST Prototype</DialogTitle>
          <DialogContent>
            <DialogContentText variant="h5" component="h6">Please provide valid Gist ID</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Gist ID"
              type="text"
              fullWidth
              onChange={this.handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.subMitForm} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  
  return {
    state: state
  };
}
export default connect(mapStateToProps)(FormDialog);
