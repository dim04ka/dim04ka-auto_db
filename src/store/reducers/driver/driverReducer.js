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
            fio: 'Ivanov Ivan Ivanon',
            phone: 8139878,
            region: 'Minks'
        },
        {
            id: 2,
            fio: '2Ivanov Ivan Ivanon',
            phone: 28139878,
            region: 'Minks'
        }
    ]
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_DRIVER:
            console.log('ADD_DRIVER')
            return state
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