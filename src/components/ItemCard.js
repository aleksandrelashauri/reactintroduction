import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link, useHistory} from "react-router-dom";
import {SINGLE_PRODUCT} from "../routes";
import {Link as MLink} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    media: {
        height: 140,
    },
});

export default function ItemCard({data: 
    {
        title, price, img, id
    }})
    {
    const classes = useStyles();
    const history = useHistory();
    const goToItem = () => {
        history.push({
            pathname: SINGLE_PRODUCT.replace(':id', id),
            state: { fromDashboard: true }
        })
    }
    return (

            <Card className={classes.root} onClick={goToItem}>

                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={img}
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <p>{price}</p>
                    </CardContent>
                </CardActionArea>

            </Card>
    );
}