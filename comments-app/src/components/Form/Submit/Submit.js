import React from 'react';
import classes from './submit.module.css';

function Submit() {
  return (
    <div>
      <div className={classes.submit_field}>
        <input 
          type="submit" 
          id="submit" 
          value="POST A COMMENT" 
          className={classes.button_submit} 
        />
        </div>
    </div>
  )
}

export default Submit;