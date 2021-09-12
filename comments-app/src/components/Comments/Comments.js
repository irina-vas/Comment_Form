import React from 'react';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import classes from './Comments.module.css';
import Pagination from '../Pagination/Pagination';

function Comments({ 
  dataComments, 
  setApiCurrentPage, 
  showMore, 
  apiCurrentPage, 
  pagesCount, 
  pagination 
}) {

  return (
    <div className={classes.wrapper}>
      {dataComments.map((item, index) => {
        return (
          <div  key={index}>
            <div className={classes.name}>{item.name}</div>
            <div className={classes.comments}>{item.text}</div>
          </div>
        )
      })}
      <div className={classes.button}>
        {apiCurrentPage !== pagesCount && <ShowMoreButton pagesCount={pagesCount} setApiCurrentPage={setApiCurrentPage} showMore={showMore} apiCurrentPage={apiCurrentPage} />}
      </div>
      <Pagination 
        apiCurrentPage={apiCurrentPage} 
        dataComments={dataComments} 
        pagination={pagination} 
        setApiCurrentPage={setApiCurrentPage} 
        pagesCount={pagesCount} 
      />
    </div>
  )
}

export default Comments;