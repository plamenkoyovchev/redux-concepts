// action types
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

// state 
const carShopInitialState = {
    availableCars: 100
};

// reducer
const reducer = (state = carShopInitialState, action) => {
    switch (action.type) {
        case actionTypes.BUY_CAR:
            return {
                ...state,
                availableCars: availableCars - 1
            };
        default:
            return state;
    }
};