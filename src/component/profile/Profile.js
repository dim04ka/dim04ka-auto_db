import React, {useState} from 'react';
import { Container,FormControl,
    FormLabel,Button,RadioGroup,Breadcrumbs,Typography,
    FormControlLabel,Radio,Divider, TextField } from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,  } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
//import MaterialUiForm from './Test';
import PhoneInput from '../../../node_modules/react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import {ADD_DRIVER} from '../../constant/const'



export default function Profile(props){

    const dispatch = useDispatch()

    const [value, setValue] = React.useState('м');
    const handleChange = event => {
        setValue(event.target.value);
    };

    const [selectedDate, setSelectedDate] = React.useState(Date.now());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const sendForms = event => {
        event.preventDefault()
        
        const task = {
            id: Date.now(),
            
            selectedDate: selectedDate,
            value: value,
            phone: phone,
            phoneAdd: phoneAdd,
            changeFamily,
            changeName,
            changeLastname
        }
       // console.log('submit forms')
        //console.log(task)
        dispatch({ type: ADD_DRIVER, payload: task })
    }

    const [phone, setPhone] = useState('')
    const [phoneAdd, setPhoneAdd] = useState('')


    // const submitt = values => {
    //     window.alert (JSON.stringify (values));
    //   };

    const [changeFamily, SetChangeFamily] = useState('');
    const [changeName, SetChangeName] = useState('');
    const [changeLastname, SetChangeLastname] = useState('');
    

    return(
        <>
        <Container>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to="/">
                    Главная
                </Link>
                <Link to="/view-profile" >
                    Водители
                </Link>
                <Typography color="textPrimary">Добавление нового водителя </Typography>
            </Breadcrumbs>
            <form className='profile-form' onSubmit={sendForms}>
                <FormControl>
                    <TextField id="profile-family" name="family" label="Фамлия" variant="outlined" value={changeFamily} onChange={(e) => SetChangeFamily(e.target.value)} />
                </FormControl>
                <div>{changeFamily}</div>
                <FormControl>
                    <TextField id="profile-name" name="name" label="Имя" variant="outlined" value={changeName}  onChange={(e) => SetChangeName(e.target.value)}/>
                </FormControl>
                <FormControl>
                    <TextField id="profile-lastname" name="lastname" label="Отчество" variant="outlined" value={changeLastname} onChange={(e) => SetChangeLastname(e.target.value)}/>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="man" control={<Radio />} label="Мужчина" />
                        <FormControlLabel value="woman" control={<Radio />} label="Женщина" />
                    </RadioGroup>
                </FormControl>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                        
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Выбрать дату"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        /> 
                    </Grid>
                </MuiPickersUtilsProvider>
                <PhoneInput
                    country='by'
                    regions={'europe'}
                    onlyCountries={['ru', 'ua', 'by']}
                    value={phone}
                    onChange={phone => setPhone(phone)}
                />
                <PhoneInput
                    country='by'
                    regions={'europe'}
                    onlyCountries={['ru', 'ua', 'by']}
                    value={phoneAdd}
                    onChange={phone => setPhoneAdd(phone)}
                />


                <Divider />
                    Контакты:

                <Divider />
                <FormControl className="profile-form__btn">
                    <Button  variant="contained" color="secondary">Очистить</Button>
                    <Button type="submit" variant="contained" color="primary">Добавить</Button>
                </FormControl>
            </form>
            {/* <MaterialUiForm onSubmit={submitt}/> */}
        </Container>
        </>
    )

}

