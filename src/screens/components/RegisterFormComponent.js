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
          <Dialog
            open={context.state.isErrorDialogOpen}
            onClose={onErrorDialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Грешка"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {context.state.loginErrorMessage}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={onErrorDialogClose} color="primary">
                Добре
              </Button>
            </DialogActions>
          </Dialog>

          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography variant="headline">Вход</Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="firstName">Първо име</InputLabel>
              <Input
                value={context.state.firstName}
                onChange={event =>
                  context.setState({ firstName: event.target.value })
                }
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="lastName">Фамилия</InputLabel>
              <Input
                  value={context.state.lastName}
                  onChange={event =>
                    context.setState({ lastName: event.target.value })
                  }
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                  value={context.state.email}
                  onChange={event =>
                    context.setState({ email: event.target.value })
                  }
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
            </FormControl>


            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Парола</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                value={context.state.password}
                onChange={event =>
                  context.setState({ password: event.target.value })
                }
                autoComplete="current-password"
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Повтори парола</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                value={context.state.confirmPassword}
                onChange={event =>
                  context.setState({ confirmPassword: event.target.value })
                }
                autoComplete="current-password"
              />
            </FormControl>

            <Button
              fullWidth
              onClick={() => loginAction()}
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {buttonText()}
            </Button>
          </form>
        </Paper>
      </main>
    </React.Fragment>
  );
}


export default withStyles(styles)(SignIn);
