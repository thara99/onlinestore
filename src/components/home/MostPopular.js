import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { Button } from '@material-ui/core';

import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import Cheese from '../../img/Cheese.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 250,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    card: {
        display: 'flex',
        margin: theme.spacing(3),
        padding: theme.spacing(2),
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 250,
    },
    cardItem: {
        margin: 20,
    },
    cardItem2: {
        margin: 10,
    },

}));

const MostPopular = () => {

    const classes = useStyles();
    return (
        <Grid item xs={12} md={12}>
            <Card className={classes.card}>
                <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <Grid item xs={6} sm={3}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        Seller
                            </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                className={classes.media}
                                image={Cheese}
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Button variant="contained" color="primary" size="medium" align="right">
                                    Buy Now
                        </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        Seller
                            </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                className={classes.media}
                                image={Cheese}
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Button variant="contained" color="primary" size="medium" align="right">
                                    Buy Now
                        </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        Seller
                            </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                className={classes.media}
                                image={Cheese}
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Button variant="contained" color="primary" size="medium" align="right">
                                    Buy Now
                        </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        Seller
                            </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                className={classes.media}
                                image={Cheese}
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Button variant="contained" color="primary" size="medium" align="right">
                                    Buy Now
                        </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
        
    )
}

export default MostPopular
