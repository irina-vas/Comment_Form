import React from 'react';
import loader from '../images/Spinner.gif';
import classes from './Loader.module.css';

function Loader() {
  return (
    <div className={classes.loader}>
      <img src={loader} alt="loader" />
    </div>
  );
}

export default Loader;