import React from 'react'
import classes from './ShowMoreButton.module.css';

function ShowMoreButton({ setApiCurrentPage, showMore }) {
  function buttonOnClickHandler() {
    setApiCurrentPage(currentPage => currentPage + 1)
    showMore()
  }

  return (
    <div className={classes.wrapper}>
      <button className={classes.showMoreButton} onClick={ buttonOnClickHandler }>SHOW MORE</button>
    </div>
  )
}

export default ShowMoreButton;
