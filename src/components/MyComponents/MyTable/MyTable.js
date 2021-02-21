
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MyLoading from '../MyLoading/MyLoading';
import MyErrorMessage from '../MyErrorMessage/MyErrorMessage';
import MyButton from '../MyButton/MyButton';
import { formatDate, propertySort, createData } from './utils/utils';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  myBottom: {
    margin: "15px",
  }
});

export default function BasicTable(props) {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [myRows, setMyRows] = useState([]);
  const [sortOrder, setSortOrder] = useState(1);

  // function to call the sort function 
  const sortData = (data) => {
    myRows.sort(propertySort("date", sortOrder))
    if (data !== undefined)
      setMyRows(data);
    setSortOrder(-1 * sortOrder);
  }

  // function to format data for material UI table, 
  const createTableArray = (data) => {
    let res = []
    // timestamp use a function formatDate
    data.forEach(e => {
      res.push(createData(formatDate(e.timestamp), e.id, e.diff[0].oldValue, e.diff[0].newValue));
    })
    return res;
  }
  // creating data for table material UI
  useEffect(() => {
    if (props.loading === false && props.result?.code === 200) {
      setData(props?.result?.data);
      let res = createTableArray(data);
      if (res !== undefined)
        setMyRows(res.sort(propertySort("date", 1)));
    }
  }, [props.loading, props.result, data])

  return (
    <TableContainer component={Paper}>
      {/* table compoent with data create on fetch */}
      <Table className={classes.table} aria-label="MyTable" id="MyTable">
        <TableHead>
          <TableRow>
            {/* click on Date to sort by date time */}
            <TableCell onClick={() => sortData(myRows)} id="SortableDate">Date ⭥</TableCell>
            <TableCell align="left" id="UserID">User ID</TableCell>
            <TableCell align="left" id="OldValue">Old Value</TableCell>
            <TableCell align="left" id="NewValue">New Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myRows.map((row) => (
            <TableRow key={row.date}>
              <TableCell component="th" scope="row">{row.date}</TableCell>
              <TableCell align="left">{row.userID}</TableCell>
              <TableCell align="left">{row.oldValue}</TableCell>
              <TableCell align="left">{row.newValue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* components : button to fetch api, loading component */}
      <div className={classes.myBottom}>
        {/* Loading component displayed only if loading exist */}
        {props.loading === true && <MyLoading />}
        {/* Error component displayed only if loading is over and error fetching */}
        {props.error && !props.loading && <MyErrorMessage />}
        {/* button component displaying different messages according to the props - not necessary to use redux for that simple component, stay simple with props */}
        <MyButton fetchData={props.fetchData} setLoading={props.setLoading} error={props.error} />
      </div>

    </TableContainer>
  );
}
