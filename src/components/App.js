import React, { useState, useEffect } from 'react';
import api from '../lib/api';
import Container from '@material-ui/core/Container';
import MyTable from './MyComponents/MyTable/MyTable'
import Box from '@material-ui/core/Box';

export const App = () => {
  //variables for the fetch : result of the fetch, error and loading
  const [result, setResult] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // fetch data function
  // set differents data according to the success or not of the fetch
  const fetchData = () => {
    const result = api.getUsersDiff().then(res => {
      setResult(res);
      setLoading(false);
      setError(false);
    }, err => {
      setLoading(false);
      setError(true);
      console.error(err, result);
    });
  };

  // set loading state as soon as the fetch is done
  useEffect(() => {
    if (result?.data)
      setLoading(false)
  }, [result])

  // fetchning data on loading page 
  useEffect(() => {
    setResult(fetchData());
    setLoading(true)
  }, [])
  return (
    <Container className="app" fixed>
      <Box data-testid="app-box" m={2}>
        {/* compoments in MyTable Component */}
        <MyTable result={result} loading={loading} error={error} fetchData={fetchData} setLoading={setLoading} />
      </Box>
    </Container>
  );
};

export default App;
