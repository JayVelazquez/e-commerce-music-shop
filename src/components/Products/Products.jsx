import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles'

/*
const products = [
    { id: 1, name: 'Headphones', description: 'Beats headphones.', price: '$300', image: 'https://images.unsplash.com/photo-1505751104546-4b63c93054b1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 2, name: 'Microphone', description: 'Rhode microphone.', price: '$230', image: 'https://images.unsplash.com/photo-1492879291357-620e858bd26a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHxtaWNyb3Bob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
];
*/

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>  
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;