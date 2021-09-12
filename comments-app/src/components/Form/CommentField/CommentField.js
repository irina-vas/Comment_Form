import React from 'react'
import classes from './CommentField.module.css';

function CommentField({ errors, register }) {
  return (
    <div  className={classes.comment_field}>
      <div className={classes.wrapper}><label>Comment: </label>
        {errors.text && (<p className={classes.error}>* required</p>)}
      </div>
        <textarea 
          id="text" 
          placeholder="leave your comment..." 
          className={classes.user_comment} 
          {...register("text", { required: '* required'})}
        />
    </div>
  )
}

export default CommentField;
