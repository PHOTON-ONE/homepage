import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  withStyles,
} from "@material-ui/core";

const styles = theme => ({
  card: {
    top: "-30px",
    position: "relative",
    paddingBottom: "1.5rem",
    paddingTop: "1.5rem",
  },
  pos: {
    marginBottom: 12,
  },
  center: {
    textAlign: "center",
  },
});

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return <div className={classes.center}>
      <Card className={classes.card}>
        <CardContent className={classes.container}>
          <Typography variant="h3">About us</Typography>
          <br />
          <Typography variant="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pretium sapien ullamcorper ultricies ullamcorper. Sed quis nulla
            malesuada quam tincidunt suscipit vel vel eros. Vestibulum quis
            magna aliquet, dapibus mauris sit amet, varius diam. In hac
            habitasse platea dictumst. Mauris sed feugiat sem. Nulla vehicula
            aliquet purus non porttitor. Morbi eget nisl lectus. Sed pharetra
            sollicitudin lacus in volutpat. Aliquam commodo iaculis enim, vel
            tincidunt nibh sollicitudin non.
          </Typography>
        </CardContent>
      </Card>
    </div>;
  }
}

export default withStyles(styles)(Content);
