import React, {useState} from 'react';
import MainLayout from "../layouts/MainLayout";
import {Grid} from "@material-ui/core";
import ItemCard from "../components/ItemCard";

const ItemList = () => {
    const [data, setData] = useState([
        {
            title: ' maika',
            img: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
            price: 9.4,
            id: 65
        },
        {
            title: ' maika',
            img: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
            price: 9.4,
            id: 64
        },
        {
            title: ' maika',
            img: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
            price: 9.4,
            id: 63
        },
        {
            title: 'maika',
            img: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
            price: 9.4,
            id: 62
        }
    ])
    return (
        <MainLayout>
            <Grid container>
                <Grid item xs={4} md={6}>sidebar</Grid>
                <Grid item xs={8}>

                    <Grid container>
                        {data.map(el => (
                            <Grid item xs={4}>
                                <ItemCard data={el} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>


        </MainLayout>
    );
};

export default ItemList;