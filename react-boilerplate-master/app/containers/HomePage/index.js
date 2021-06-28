import React from 'react';
import Sidebar from 'components/Sidebar';
import AppBar from 'components/AppBar';
import messages from './messages';
import useStyles from './useStyles';

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Sidebar messages={messages} />
      <div className={classes.content}>
        <AppBar />
      </div>
    </div>
  );
}
