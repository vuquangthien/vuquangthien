import React from 'react';
import PropTypes from 'prop-types';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AddBoxIcon from '@material-ui/icons/AddBox';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import AppsIcon from '@material-ui/icons/Apps';
import ExtensionIcon from '@material-ui/icons/Extension';
import PageviewIcon from '@material-ui/icons/Pageview';
import UpdateIcon from '@material-ui/icons/Update';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';
import useStyles from './useStyles';
import Path from '../../configs/router';

const Sidebar = ({ hidden, messages }) => {
  const classes = useStyles();
  const [openUser, setOpenUser] = React.useState(false);
  const [openDepartment, setOpenDepartment] = React.useState(false);
  const [openApplication, setOpenApplication] = React.useState(false);
  const [openUtilities, setOpenUtilities] = React.useState(false);

  const handleClick = name => {
    switch (name) {
      case 'user':
        setOpenUser(!openUser);
        break;
      case 'department':
        setOpenDepartment(!openDepartment);
        break;
      case 'application':
        setOpenApplication(!openApplication);
        break;
      case 'extension':
        setOpenUtilities(!openUtilities);
        break;
      default:
    }
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={!hidden ? classes.root : classes.rootHidden}
      subheader={
        <ListSubheader
          className={classes.category}
          component="div"
          id="nested-list-subheader"
        >
          <div>
            <span className={classes.center}>LIFETEK.VN</span>
            <hr className={classes.separation} />
            <FormattedMessage {...messages.category} />
          </div>
        </ListSubheader>
      }
    >
      <Wrapper />
      {/* User */}
      <ListItem
        className={classes.item}
        button
        onClick={() => handleClick('user')}
      >
        <ListItemIcon>
          <AccountBoxIcon className={classes.item} />
        </ListItemIcon>
        <ListItemText
          className={classes.item}
          primary={<FormattedMessage {...messages.user} />}
        />
        {openUser ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse
        className={classes.item}
        in={openUser}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          {/* Add */}
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AddBoxIcon className={classes.item} />
            </ListItemIcon>
            <ListItemText
              primary={<FormattedMessage {...messages.addNewUser} />}
            />
          </ListItem>

          {/* Update */}
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <UpdateIcon className={classes.item} />
            </ListItemIcon>
            <ListItemText
              primary={<FormattedMessage {...messages.updateUserInfo} />}
            />
          </ListItem>

          {/* Assignment */}
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AssignmentIcon className={classes.item} />
            </ListItemIcon>
            <ListItemText
              primary={<FormattedMessage {...messages.assignUser} />}
            />
          </ListItem>

          {/* Assign roles */}
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AssignmentLateIcon className={classes.item} />
            </ListItemIcon>
            <ListItemText
              primary={<FormattedMessage {...messages.assignRole} />}
            />
          </ListItem>

          {/* Assign functions */}
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AssignmentReturnIcon className={classes.item} />
            </ListItemIcon>
            <ListItemText
              primary={<FormattedMessage {...messages.assignFunc} />}
            />
          </ListItem>
        </List>
      </Collapse>

      {/* Department */}
      <ListItem
        className={classes.item}
        button
        onClick={() => handleClick('department')}
      >
        <ListItemIcon>
          <MeetingRoomIcon className={classes.item} />
        </ListItemIcon>
        <ListItemText primary={<FormattedMessage {...messages.department} />} />
        {openDepartment ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse
        className={classes.item}
        in={openDepartment}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} />
        </List>
      </Collapse>

      {/* Application */}
      <ListItem
        className={classes.item}
        button
        onClick={() => handleClick('application')}
      >
        <ListItemIcon>
          <AppsIcon className={classes.item} />
        </ListItemIcon>
        <ListItemText
          primary={<FormattedMessage {...messages.application} />}
        />
        {openApplication ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse
        className={classes.item}
        in={openApplication}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} />
        </List>
      </Collapse>

      {/* Extension */}
      <ListItem
        className={classes.item}
        button
        onClick={() => handleClick('extension')}
      >
        <ListItemIcon>
          <ExtensionIcon className={classes.item} />
        </ListItemIcon>
        <ListItemText primary={<FormattedMessage {...messages.extension} />} />
        {openUtilities ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse
        className={classes.item}
        in={openUtilities}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          {/* Search */}
          <Link to={Path.APP_LOOKUP}>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <PageviewIcon className={classes.item} />
              </ListItemIcon>
              <ListItemText
                className={classes.item}
                primary={<FormattedMessage {...messages.lookUpApp} />}
              />
            </ListItem>
          </Link>
        </List>
      </Collapse>
    </List>
  );
};

Sidebar.propTypes = {
  hidden: PropTypes.bool,
  messages: PropTypes.object,
};

export default Sidebar;
