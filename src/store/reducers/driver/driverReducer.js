import {ADD_DRIVER} from '../../../constant/const';

const initialState = {
    app: {
        test: 'test_context',
        count: 0
    },
    b: {
        count: 100
    },
    drivers: [
        {
            id: 1,
            family: 'Иванов',
            name: 'Сергей',
            lastname: 'Крузенштерн',
            gender: 'M',
            dateBirthday: '05.12.1992',
            phone: '+375(29)8139878',
            phoneDop : ''
        },
        {
            id: 1,
            family: 'Петровa',
            name: 'Василиса',
            lastname: 'Васильевична',
            gender: 'Ж',
            dateBirthday: '01.02.1991',
            phone: '+375(29)3323938',
            phoneDop : ''
        }
    ]
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_DRIVER:
            console.log('ADD_DRIVER', action.payload)
            return {
                ...state, 
                drivers: [...state.drivers, action.payload] 
                }
        case 'increment-counter':
            
            return {
                ...state,
                ...state.app.count = state.app.count + 1 
                
                // count: state.app.count + 1
            }
        default: 
            return state;
    }

  
};

export default userReducer;