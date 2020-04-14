import React from 'react';
import {Container, Button} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom';


     
const  Home = (props) => {
    const history = useHistory();

    const dispatch = useDispatch()
    const useSelec = useSelector(state => state)

    const toggleDrawer = () => {

        history.push('/view-profile')
    }

    const handleClick = () => {
        dispatch({ type: 'increment-counter' })
    }

    const getClick = () => {
        console.log(useSelec.driverFormReducer.count)
    }

    
    return(
        <Container>
            <h1>This is Home page</h1>
            <Button variant="contained" color="primary" onClick={toggleDrawer}>Add</Button>
            <Button onClick={handleClick} variant="contained" color="secondary">disp</Button>
            <Button onClick={getClick} variant="contained" color="secondary">get</Button>
        </Container>
    )
}


export default Home;