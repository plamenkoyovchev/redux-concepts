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
                availableCars: availableCars - 1
            };
        default:
            return state;
    }
};