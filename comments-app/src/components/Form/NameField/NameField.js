import React from 'react';
import classes from './NameField.module.css';

function NameField({ errors, register }) {
  return (
    <div className={classes.name_field}>
      <div className={classes.wrapper}>
        <label>User name: </label>
        {errors.name && (<p className={classes.error}>* required</p>)}
      </div>
      <input 
        type="text" 
        id="name" 
        placeholder="enter your name..." 
        className={classes.user_name} 
        {...register("name", { required: '* required'})}
      />
    </div>
  )
}

export default NameField;
