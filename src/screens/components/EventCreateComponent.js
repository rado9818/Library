
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { KeyboardDatePicker } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import {TextField} from "@material-ui/core";

import React from 'react';
import {
  KeyboardTimePicker,
} from '@material-ui/pickers';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import EventsRedirect from "./EventsRedirect";
import NavBarComponent from "./NavBarComponent";

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
function EventCreateComponent(props) {
  const { classes } = props;
  const { onCreateEvent, context, onStartDateChange, onEndDateChange} = props;
  
  return (
    <React.Fragment>
      <EventsRedirect
        context={props.context}/>
      <CssBaseline />

      <NavBarComponent
      context={context}
      onBackArrowClicked={()=>{
        props.context.setState({
          eventsRedirect: true
        })
      }}/>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <h3>Желая да използвам семинарната зала на</h3>
          {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={context.state.startDate}
          onChange={onStartDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </Grid>
        </MuiPickersUtilsProvider> */}
        
        <TextField id="standard-basic" label="Start Date" onChange={(onStartDateChange)} />
        <TextField id="standard-basic" label="End Date" onChange={onEndDateChange} />
        <TextField id="standard-basic" label="Name of the event" onChange={(e) => {
          context.setState({name: e.target.value});
        }} />
        <FormControlLabel control= {<Checkbox
            checked={context.state.allDay}
            onChange={(event) => {context.setState({allDay: event.target.checked})}}
            value="checked"
            color="primary"
           />}label="All Day" />
        <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows="4"
          value={context.state.description}
          onChange={(e) => {
            context.setState({description: e.target.value});
          }}
        />
          <Button
              variant="contained"
              color="primary"
              onClick={() => {
                console.log("clicked");
            onCreateEvent()
          }}>СЪЗДАЙ</Button>
        </Paper>
      </main>
    </React.Fragment>
  );
}


export default withStyles(styles)(EventCreateComponent);
