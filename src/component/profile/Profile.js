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

//import MaterialUiForm from './Test';
import PhoneInput from '../../../node_modules/react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



export default function Profile(props){

    const [value, setValue] = React.useState('м');
    const handleChange = event => {
        setValue(event.target.value);
    };

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const sendForms = event => {
        event.preventDefault()
        console.log('submit forms')
    }

    const [phone, setPhone] = useState('')

    // const submitt = values => {
    //     window.alert (JSON.stringify (values));
    //   };

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
                    <TextField id="profile-family" label="Фамлия" variant="outlined" />
                </FormControl>
                <FormControl>
                    <TextField id="profile-name" label="Имя" variant="outlined" />
                </FormControl>
                <FormControl>
                    <TextField id="profile-lastname" label="Отчество" variant="outlined" />
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
                        
                        disableToolbar
                        variant="inline"
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
                <FormControl>
                    <TextField id="profile-maprod" label="Место рождения" variant="outlined" />
                </FormControl>
                <PhoneInput
                    country='by'
                    regions={'europe'}
                    onlyCountries={['ru', 'ua', 'by']}
                    value={phone}
                    onChange={phone => setPhone(phone)}
                />
                <adress>{phone}</adress>


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

