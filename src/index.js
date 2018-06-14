import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    fontFamily: "sans-serif",
    textAlign: "center"
  },
  padding20: {
    padding: 20
  }
};

const App = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="display1" className={classes.padding20}>
        Hello CodeSandbox
      </Typography>
      <Typography variant="title" className={classes.padding20}>
        Start editing to see some magic happ 0en!
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Paper className={classes.padding20}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.padding20}>xs=12</Paper>
        </Grid>
      </Grid>
      <Button>test</Button>
    </div>
  );
};
const AppWithStyles = withStyles(styles)(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<AppWithStyles />, rootElement);
