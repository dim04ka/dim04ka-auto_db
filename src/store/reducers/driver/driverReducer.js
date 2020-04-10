import {ADD_DRIVER} from '../../../constant/const';

const initialState = {
    app: {
        test: 'test_context',
        count: 0
    },
    b: {
        count: 100
    }
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