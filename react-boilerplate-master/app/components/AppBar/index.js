import React from 'react';
import { PropTypes } from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LocaleToggle from 'containers/LocaleToggle';
import useStyles from './useStyles';
import CustomMenu from './CustomMenu';

function HomePageAppBar({ handleClickMenu }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClickMenu}
          >
            <MenuIcon />
          </IconButton>
          <LocaleToggle />
          <Typography variant="h6" className={classes.title} />
          <CustomMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}

HomePageAppBar.propTypes = {
  handleClickMenu: PropTypes.func,
};

export default HomePageAppBar;
