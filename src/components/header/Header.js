import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Logo from '../../img/logo.jpg';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    margin: {
        margin: theme.spacing(1),
    },
    searchbar: {
        mr: theme.spacing(3),
        ml: theme.spacing(3),
    },
    logoSize: {
        height: 75,
        width: 75
    },
    buttonPadding: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },

    button: {
        display: 'block',
        marginTop: theme.spacing(2),
      },

}));

const Header = () => {
    const classes = useStyles();

    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar} color="inherit">
                <Button size="small">Shou Shop</Button>
                <img src={Logo} className={classes.logoSize} alt="logo" />
                <Typography color="inherit" align="center" noWrap className={classes.toolbarTitle}>
                    <TextField
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        placeholder="Search"
                        fullWidth
                        margin="normal"
                        className={classes.searchbar}
                    />
                </Typography>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Button variant="contained" size="small" color="primary" className={classes.buttonPadding}>
                    Sign up
                </Button>
                <Button variant="contained" size="small" color="primary" className={classes.buttonPadding}>
                    Sign In
                </Button>
            </Toolbar>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                <Grid container direction="row" justify="flex-start" alignItems="center">
                    <Button color="inherit" className={classes.margin} >  HOME </Button>
                    <Button color="inherit" className={classes.margin} >  HOT DEALS </Button>
                    <Button color="inherit" className={classes.margin} >  CONTACT US </Button>
                </Grid>
                <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">CATEGORY</InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={age}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={0}>electronic</MenuItem>
                    <MenuItem value={1}>baby</MenuItem>
                    <MenuItem value={2}>clothes</MenuItem>
                    <MenuItem value={1}>books</MenuItem>

                  </Select>
              </FormControl>
            </Toolbar>
            
        </React.Fragment>
    )
}


export default Header
