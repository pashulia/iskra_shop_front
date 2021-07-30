import React, { useEffect } from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Button,
  Grid,
  Typography,
} from '@material-ui/core';

import ProductItem from '../../components/ProductItem/ProductItem';
import { fetchProducts } from '../../store/actions/productsActions';

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const user = useSelector(state => state.users.user);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <Grid container direction="column" spacing={2}>
            <Grid
                item
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid item>
                    <Typography variant="h3">
                        Products
                    </Typography>
                </Grid>
                <Grid item>
                    {user ?
                        <Button color={"primary"} component={Link} to="/products/new">
                            Add product
                        </Button> : null
                    }
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="row"
                spacing={2}
            >
                {products.map(product => {
                    return <ProductItem
                        id={product._id}
                        title={product.title}
                        category={product.category}
                        price={product.price.$numberDecimal}
                        image={product.image}
                        key={product._id}
                    />
                })}
            </Grid>
        </Grid>
    );
};

export default Products;
