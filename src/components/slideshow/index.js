import React from "react";
import { withStyles } from "@material-ui/core";
import { Fade } from "react-slideshow-image";
import projects from "../../utils/projects";

const styles = theme => ({
  eachFade: {
    width: "1000px",
    heigth: "200px",
  },
  imageContainer: {
    marginLeft: "50%",
    transform: "translateX(-50%)",
    width: "75%",
    overflow: "hidden",
    objectFit: "cover",
  },
  image: {
    //   maxHeight: "350px",
    //   maxWidth: "700px"
  },
});

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  arrows: false
};

class Slideshow extends React.Component {
  renderProjects(projects) {
    const { classes } = this.props;

    return projects.map((element, index) => (
      <div className={classes.eachFade}>
        <div className={classes.imageContainer}>
          <img className={classes.image} src={element.url} />
        </div>
      </div>
    ));
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="container">
        <Fade {...fadeProperties}>{this.renderProjects(projects)}</Fade>;
      </div>
    );
  }
}

export default withStyles(styles)(Slideshow);
