import React, { useState } from 'react';
import {
  //BrowserRouter as Router,
  Link,
  //Switch
  // Route,
  // Redirect,
  // useHistory,
  // useLocation
} from "react-router-dom";



import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import TimeToLeaveIcon from '@material-ui/icons/TimeToLeave';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import BuildIcon from '@material-ui/icons/Build';

import {APP_VODITEL} from '../../constant/const';

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


 function Header(props) {

    const classes = useStyles();

    const [state, setState] = useState(false)
      
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
        setState(open);
    };

    const handleClick = (text) => {

      // switch (text) {
      //     case APP_VODITEL:
      //         props.history.push('/view-profile')
      //         break;
      //     default:
      //         console.error(text)
      // }
      setState(false);
  }

    return(
        <AppBar position="static" className="header-line">
            <Toolbar>
                <IconButton edge="start" onClick={toggleDrawer(true)} className={classes.menuButton} color="inherit" aria-label="menu" >
                    <MenuIcon />
                </IconButton>
                
                  <Typography variant="h6" className={classes.title}>
                  <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Главная</Link>
                  </Typography>
                
                
                <Button color="inherit">Вход</Button>
            </Toolbar>
            <Drawer open={state} onClose={toggleDrawer(false)}>
                <List>
                  <Link to='/view-profile'>
                    <ListItem button key={'Водитель'} onClick={() => handleClick('Водитель')}>
                      <ListItemIcon><PersonPinIcon /></ListItemIcon>
                      <ListItemText primary={'Водитель'} />
                    </ListItem>
                  </Link>
                  <Link to='/'>
                    <ListItem button key={'Автомобиль'} onClick={() => handleClick('Автомобиль')}>
                      <ListItemIcon><TimeToLeaveIcon /></ListItemIcon>
                      <ListItemText primary={'Автомобиль'} />
                    </ListItem>
                  </Link>
                    <ListItem button key={'Обслуживание'}>
                        <ListItemIcon><BuildIcon /></ListItemIcon>
                        <ListItemText primary={'Обслуживание'} />
                    </ListItem>
                </List>
              <Divider />
            </Drawer>
        </AppBar>
    )
}

export default Header;