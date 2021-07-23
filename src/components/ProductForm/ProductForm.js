import React, { useState } from 'react';

import {
  Button,
  Grid,
  TextField,
} from '@material-ui/core';

import FileInput from '../UI/FileInput/FileInput';

const ProductForm = props => {
  const [state, setState] = useState({
    name: "",
    price: "",
    description: "",
    image: ""
  });

  const inputChangeHandler = e => {
    const {name, value} = e.target;
    setState(prevState => {
      return {...prevState, [name]: value};
    });
  };

  const fileChangeHandler = e => {
    const file = e.target.files[0];
    setState(prevState => {
      return {
        ...prevState,
        image: file 
      };
    });
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(state).forEach(key => {
      formData.append(key, state[key]);
    });
    props.onSubmit(formData);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField
            fullWidth
            variant="outlined"
            label="Name"
            name="name"
            onChange={inputChangeHandler}
            value={state.name}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            variant="outlined"
            label="Price"
            name="price"
            onChange={inputChangeHandler}
            value={state.price}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            label="Description"
            name="description"
            onChange={inputChangeHandler}
            value={state.description}
          />
        </Grid>
        <Grid item>
          <FileInput
            label="Image"
            name="image"
            onChange={fileChangeHandler}
          />
        </Grid>
        <Grid item>
          <Button type="submit" color="primary">
            Create
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProductForm;
