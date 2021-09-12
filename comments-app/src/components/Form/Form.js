import React from 'react';
import classes from './Form.module.css';
import { useForm } from 'react-hook-form';
import axious from 'axios';
import CommentField from './CommentField/CommentField';
import Submit from './Submit/Submit';
import NameField from './NameField/NameField';

function Form() {
  const url = 'https://jordan.ashton.fashion/api/goods/30/comments';
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = data => {
    reset();
    axious.post(url, {
      name: data.name,
      text: data.text
    })
    .then(res => {
      console.log(data)
    })
  }

  return (
    <div>
      <form 
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
      >
      <NameField errors={errors} register={register} />
      <CommentField errors={errors} register={register} />
      <Submit />
      </form>
    </div>
  )
}


export default Form;