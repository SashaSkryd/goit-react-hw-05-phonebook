import React from 'react';

import classes from './alert.module.css';

export default function AlertMassage({ children }) {
  return <div className={classes.alertMassage}>{children}</div>;
}