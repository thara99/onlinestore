import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

import Cheese from '../../img/Cheese.jpg'
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        margin: theme.spacing(3),
        height: 250,
        padding: theme.spacing(0)
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 250,
        marginRight: theme.spacing(2)
    },
    cardItem: {
        margin: 20,
    },
    cardItem2: {
        margin: 10,
    },
    cardBuyNow: {
        paddingLeft: 50,
        paddingRight: 50
    }

}));

const LastProduct = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={12} >
            <Card className={classes.card}>
                <div className={classes.cardDetails}>
                    <CardContent className={classes.cardItem}>
                        <Typography component="h1" variant="h3" >
                            Cheese
                        </Typography>
                        <div className={classes.cardItem2}>
                            <Typography variant="h5" color="textSecondary">
                                2020/03/25
                            </Typography>
                            <Typography variant="subtitle3" paragraph>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                            </Typography>
                        </div>
                        <Button variant="contained" color="primary" size="large" className={classes.cardBuyNow}>
                            Buy Now
                        </Button>
                    </CardContent>
                </div>
                <Hidden xsDown>
                    <CardMedia className={classes.cardMedia} image={Cheese} title="image title" />
                </Hidden>
            </Card>

            <Card className={classes.card}>
            <Hidden xsDown>
                    <CardMedia className={classes.cardMedia} image={Cheese} title="image title" />
                </Hidden>
                <div className={classes.cardDetails}>
                    <CardContent className={classes.cardItem}>
                        <Typography component="h1" variant="h3" >
                            Cheese
                        </Typography>
                        <div className={classes.cardItem2}>
                            <Typography variant="h5" color="textSecondary">
                                2020/03/25
                            </Typography>
                            <Typography variant="subtitle3" paragraph>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                            </Typography>
                        </div>
                        <Button variant="contained" color="primary" size="large" className={classes.cardBuyNow}>
                            Buy Now
                        </Button>
                    </CardContent>
                </div>
                
            </Card>
            
        </Grid>

        
    )
}

export default LastProduct
