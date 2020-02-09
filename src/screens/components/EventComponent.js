import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import {List} from "@material-ui/icons";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block", // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

/**
 * @return {boolean}
 */
function SignIn(props) {
  const { classes } = props;
  const { buttonText, loginAction, context, onErrorDialogClose } = props;

  return (
    <React.Fragment>

    {/*  <DashboardRedirectComponent
        context={context}
        role={context.state.roleString}/>*/}

      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <List className={classes.root} subheader={<li/>}>
            {context.state.events.map(event =>
                <ListItem>
                  <ListItemText
                      primary={event.name}
                      secondary={event.deadline !== null ? event.deadline : "No deadline"}
                  />
                </ListItem>
            )}
          </List>
        </Paper>
      </main>
    </React.Fragment>
  );
}


export default withStyles(styles)(SignIn);
