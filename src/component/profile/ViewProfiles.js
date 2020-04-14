import React from 'react';

import {Container, Breadcrumbs, Typography, Button} from '@material-ui/core';
import { useHistory } from 'react-router';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useSelector} from 'react-redux';

import {
    Link
  } from "react-router-dom";


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
 
const ViewProfile = () => {

    const { push } = useHistory();

    const classes = useStyles();
    let drivers = useSelector(state => state.driverFormReducer.drivers)

    const read = (id) => {
        push('/view-profile/'+id)
    }
    

    return(
        <Container> 
            <Breadcrumbs aria-label="breadcrumb">
                <Link to="/">
                    Главная
                </Link>
                <Typography color="textPrimary">Отображение водителей</Typography>
            </Breadcrumbs>
            {/* <Link to="/profile"> */}
                <Button variant="contained" color="primary" onClick={() => push('/profile')}>
                    Добавить водителя
                </Button>
            {/* </Link> */}

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>№</TableCell>
                            <TableCell align="left">ФИО</TableCell>
                            <TableCell align="left">Телефон</TableCell>
                            <TableCell align="left">Регион</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {drivers.map((row,idx) => (
                        <TableRow key={row.fio}>
                        <TableCell component="th" scope="row">
                            {idx +1}
                        </TableCell>
                        <TableCell align="left">
                            {row.fio + '(' + row.id + ')'}
                        </TableCell>
                        <TableCell align="left">{row.phone}</TableCell>
                        <TableCell align="left">{row.region}</TableCell>
                        <TableCell><button onClick={() => read(row.id)}>Click</button> </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )

} 

export default ViewProfile;