import { fetch } from './csrf';

const GET_ALL = "states/get_all";

const getAll = (payload) => ({
    type: GET_ALL,
    payload
})

export const getStates = () => async dispatch => {
    const res = await fetch(`/api/locations/states`);
    if (res.ok) {
        dispatch(getAll(res.data));
    };
}

const initialState = [];

const StatesReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_ALL: {
            return [...action.payload];
        }
        default: {
            return state;
        }
    }
}

export default StatesReducer;
