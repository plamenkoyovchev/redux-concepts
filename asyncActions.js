const redux = require('redux');
const createStore = redux.createStore;

const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const axios = require('axios');

const initialState = {
    loading: false,
    users: [],
    error: ''
};

const actionTypes = {
    FETCH_USERS_START: 'FETCH_USERS_START',
    FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
    FETCH_USERS_FAILURE: 'FETCH_USERS_FAILURE'
};

const fetchUsersStart = () => {
    return {
        type: actionTypes.FETCH_USERS_START
    };
};

const fetchUsersSuccess = (users) => {
    return {
        type: actionTypes.FETCH_USERS_SUCCESS,
        payload: users
    };
};

const fetchUsersFailure = (error) => {
    return {
        type: actionTypes.FETCH_USERS_FAILURE,
        payload: error
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                    users: action.payload,
                    error: ''
            };
        case actionTypes.FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                    error: action.payload
            };
        default:
            return state;
    };
};

// action creator 
const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersStart());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data.map(user => user.id);
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error.message));
            });
    };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers());