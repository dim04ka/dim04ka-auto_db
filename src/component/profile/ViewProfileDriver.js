import React from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom'

import { Container,FormControl,
    FormLabel,Button,RadioGroup,Breadcrumbs,Typography,
    FormControlLabel,Radio,Divider, TextField } from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,  } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import PhoneInput from '../../../node_modules/react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

 const ViewProfileDriver = () => {
    const params = useParams();
    const state = useSelector(state => state.driverFormReducer.drivers)
    const profile = state.filter(el => el.id === +params.id)
    const profiteItem = profile[0];


    const sendFormsUpdate = event => {
        event.preventDefault()
        
        const task = {
        }
        console.log('updates input forms')
        //console.log(task)
        //dispatch({ type: UPDATE_DRIVER, payload: task })
    }

    return(
        <Container>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to="/">
                    Главная
                </Link>
                <Link to="/view-profile" >
                    Водители
                </Link>
                <Typography color="textPrimary">Редактирование водителя </Typography>
            </Breadcrumbs>

            <div>{profiteItem.id}</div>

  
            
            
        </Container>
    )
}
export default ViewProfileDriver