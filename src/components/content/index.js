import React, { Component } from 'react';
import { Card, CardContent, Typography, CardActions, Button } from 'material-ui';

class Content extends Component {
	constructor(props) {
		super(props);	
		this.state = {

		}
	}

	render() {

		const styles = {
		  card: {
		    minWidth: 275,
		  },
		  bullet: {
		    display: 'inline-block',
		    margin: '0 2px',
		    transform: 'scale(0.8)',
		  },
		  title: {
		    marginBottom: 16,
		    fontSize: 14,
		  },
		  pos: {
		    marginBottom: 12,
		  },
		};

		const bull = <span className={styles.bullet}>•</span>;

		return 	<div className="container">
			      <Card className={styles.card}>
			        <CardContent>
			          <Typography className={styles.title} color="textSecondary">
			            Word of the Day
			          </Typography>
			          <Typography variant="headline" component="h2">
			            be{bull}nev{bull}o{bull}lent
			          </Typography>
			          <Typography className={styles.pos} color="textSecondary">
			            adjective
			          </Typography>
			          <Typography component="p">
			            well meaning and kindly.<br />
			            {'"a benevolent smile"'}
			          </Typography>
			        </CardContent>
			        <CardActions>
			          <Button size="small">Learn More</Button>
			        </CardActions>
			      </Card>
				</div>;
	}
}

export default Content;