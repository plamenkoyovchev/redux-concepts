const redux = require('redux');
const createStore = redux.createStore;

const actionTypes = {
    BUY_CAR: "BUY_CAR"
};

// action
const buyCar = () => {
    return {
        type: actionTypes.BUY_CAR,
        info: 'First redux action'
    };
};

const carShopInitialState = {
    availableCars: 100
};

const reducer = (state = carShopInitialState, action) => {
    switch (action.type) {
        case actionTypes.BUY_CAR:
            return {
                ...state,
                availableCars: state.availableCars - 1
            };
        default:
            return state;
    }
};


// Application
const carsStore = createStore(reducer);
console.log('Initial state', carsStore.getState());

const unsubscribe = carsStore.subscribe(() => console.log('Updated state', carsStore.getState()));
carsStore.dispatch(buyCar());
carsStore.dispatch(buyCar());

unsubscribe();