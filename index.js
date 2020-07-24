const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const carShopActionTypes = {
    BUY_CAR: "BUY_CAR"
};

// action
const buyCar = () => {
    return {
        type: carShopActionTypes.BUY_CAR,
    };
};

const carShopInitialState = {
    availableCars: 100
};

const carReducer = (state = carShopInitialState, action) => {
    switch (action.type) {
        case carShopActionTypes.BUY_CAR:
            return {
                ...state,
                availableCars: state.availableCars - 1
            };
        default:
            return state;
    }
};

const motorShopInitialState = {
    availableMotors: 10
};

const motorShopActionTypes = {
    BUY_MOTOR: "BUY_MOTOR"
};

//action 
const buyMotor = () => {
    return {
        type: motorShopActionTypes.BUY_MOTOR,
    };
};


const motorReducer = (state = motorShopInitialState, action) => {
    switch (action.type) {
        case motorShopActionTypes.BUY_MOTOR:
            return {
                ...state,
                availableMotors: state.availableMotors - 1
            };
        default:
            return state;
    }
};

// Application
const rootReducer = combineReducers({
    cars: carReducer,
    motors: motorReducer
});

const store = createStore(rootReducer);
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));
store.dispatch(buyCar());
store.dispatch(buyCar());
store.dispatch(buyMotor());

unsubscribe();