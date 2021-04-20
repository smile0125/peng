import { DEFAULT_TYPE } from '../action/actionTypes.jsx';
const initialState = {
    defaultState: '日期计算'
};
const inputChangeReducer = (state = initialState, action) => {
    switch (action.type) {
        case DEFAULT_TYPE:
            let newState = JSON.parse(JSON.stringify(state));
            newState.defaultState = action.payload.value;
            return newState;
        default:
            return state;
    }
};
export default inputChangeReducer;