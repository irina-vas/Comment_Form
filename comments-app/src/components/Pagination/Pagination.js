import React from 'react';
import classes from './Pagination.module.css';
import cn from 'classnames';

function Pagination({ 
  setApiCurrentPage, 
  pagesCount, 
  pagination, 
  apiCurrentPage 
}) {
  const buttons = [];

  for (let i = 1; i <= pagesCount; i++) {
    buttons.push(i);
  }

  function pageChange(page) {
    setApiCurrentPage(page);
    pagination()
  }

  function nextPage() {
    setApiCurrentPage(prev => prev + 1);
    pagination()
  }

  function prevPage() {
    setApiCurrentPage(prev => prev - 1);
    pagination()
  }
  
  return (
    <div className={classes.wrapper}>
      <button 
        className={classes.prev}
        onClick={prevPage}
        disabled={apiCurrentPage === 1}
      >
        PREV
      </button>
      {buttons
        .slice(5 * Math.floor((apiCurrentPage - 1) / 5), 5 * Math.floor((apiCurrentPage - 1) / 5) + 5)
        .map((item, index) => {
          return (
            <button 
              key={index} 
              className={cn({
                [classes.pagination_button]: true,
                [classes.pagination_button_active]: apiCurrentPage === item}
              )} 
              onClick={()=> pageChange(item)}
            >
              {item}
            </button>
          )
      })}
      <button 
        className={classes.next}
        onClick={nextPage}
        disabled={apiCurrentPage === pagesCount}
      >
        NEXT
      </button>
    </div>
  )
}

export default Pagination;