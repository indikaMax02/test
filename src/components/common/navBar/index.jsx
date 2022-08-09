import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from "@material-ui/core/Grid";
/*import MenuIcon from '@material-ui/icons/Menu';*/



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        {/*<MenuIcon/>*/}
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Grid item lg={12} xs={6} sm={12} md={12}>
                            <Button color="inherit" style={{fontSize:'23PX'}}><b>Dashboard</b></Button>

                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex',align:'center',paddingBottom:'1px'}}
                              justifyContent="center"
                              alignItems="flex-end" direction="row" >
                            <Button size="large" variant="contained" color={"warning"}
                                    style={{marginRight: "30px", height: '34px', width: '150px',bottom:'26px'}}><b>Product</b></Button>
                            <Button size="large" variant="contained" color={"success"}
                                    style={{marginRight: "50px", height: '34px', width: '150px',bottom:'26px'}}><b>Cart</b></Button>
                        </Grid>

                    </Typography>
                    <Button color="inherit"><h3><b>Indika</b></h3></Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}



