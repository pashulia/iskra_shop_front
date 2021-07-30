import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import defaultImage from '../../assets/image/default.png';
import config from '../../config';

const useStyles = makeStyles({
  card: {
    height: "100%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" //16:9
  }
});

const ProductItem = props => {
  let cardImage = defaultImage;
  if (props.image) {
    cardImage = config.apiUrl + "/uploads/" + props.image;
  }

  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={cardImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="h6">
            {props.price} тг.
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton component={Link} to={"/products/" + props.id}>
            Подробнее <ArrowForwardIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string,
  category: PropTypes.object.isRequired
};

export default ProductItem;
