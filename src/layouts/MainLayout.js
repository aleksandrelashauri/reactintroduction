import React from 'react';
import {AppBar, Button, Container, IconButton, Link as MLink, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from "./MainLayoutStyles";
import {Contactless} from "@material-ui/icons";
import {BrowserRouter as Router, Link} from "react-router-dom";
import {HOME, PRODUCT_LIST, SINGLE_PRODUCT} from "../routes";

const MainLayout = ({children}) => {
    const classes = useStyles();
    return (
        <>
            <Container>
                <AppBar position="static" classes={{
                    root: classes.menu
                }
                }>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            News
                        </Typography>
                        <MLink component={Link} to={HOME} >home</MLink>
                        <MLink component={Link} to={PRODUCT_LIST} >list</MLink>
                        <MLink component={Link} to={SINGLE_PRODUCT} >single</MLink>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>

            </Container>
            <Container maxWidth='md'>
                {children}
            </Container>
            <footer>
                footer
            </footer>
        </>
    );
};

export default MainLayout;