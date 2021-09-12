import React, {useState, useEffect} from 'react';
import classes from './App.module.css';
import * as axios from 'axios';
import Comments from './components/Comments/Comments';
import Loader from './common/loader/Loader';
import Form from './components/Form/Form';

function App() {
  const [dataComments, setDataComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiCurrentPage, setApiCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);
  
  useEffect(() => {
    showMore()
  },[])

  function showMore() {
    axios.get(`https://jordan.ashton.fashion/api/goods/30/comments?page=${apiCurrentPage}`)
      .then(response => response)
      .then(data => {
        setDataComments(oldComments => oldComments.concat(data.data.data));
        setLoading(false);
        setPagesCount(data.data.last_page);
      }).catch(error => console.error(error))
  }

  function pagination() {
    axios.get(`https://jordan.ashton.fashion/api/goods/30/comments?page=${apiCurrentPage}`)
      .then(response => response)
      .then(data => {
        setDataComments(data.data.data);
        setLoading(false);
      }).catch(error => console.error(error))
  }

  return (
    <div className={classes.wrapper}>
      {loading
        ? (<div><Loader /></div>)
        : (<>
            <Form />
            <Comments 
              pagesCount={pagesCount} 
              apiCurrentPage={apiCurrentPage} 
              dataComments={dataComments} 
              setApiCurrentPage={setApiCurrentPage} 
              showMore={showMore}
              pagination={pagination}
            />
          </>)  
      } 
    </div>
  );
}

export default App;
