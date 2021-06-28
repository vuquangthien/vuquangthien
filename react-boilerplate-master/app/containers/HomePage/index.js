import React from 'react';
import Sidebar from 'components/Sidebar';
import AppBar from 'components/AppBar';
import { Switch, Route } from 'react-router-dom';
import AppLookup from 'components/AppLookup';
import messages from './messages';
import useStyles from './useStyles';
import Path from '../../configs/router';

export default function HomePage() {
  const classes = useStyles();
  const [menuStatus, setMenuStatus] = React.useState(false);

  return (
    <div className={classes.root}>
      <Sidebar hidden={menuStatus} messages={messages} />
      <div className={classes.content}>
        <AppBar handleClickMenu={() => setMenuStatus(!menuStatus)} />
        <Switch>
          <Route exact path={Path.APP_LOOKUP}>
            <AppLookup messages={messages} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
