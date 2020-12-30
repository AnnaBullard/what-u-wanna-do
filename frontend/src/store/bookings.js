import { fetch } from './csrf';

const GET_LIST = "bookings/get_list";

const getList = (payload) => ({
    type: GET_LIST,
    payload
});

export const getBookings = (id) => async dispatch => {
    let url = `/api/experiences/${id}/bookings`
    const res = await fetch(url);
    if (res.ok) {
        dispatch(getList(res.data));
    };
}

const initialState = [];

const BookingsReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_LIST: {
            const newState = []
            action.payload.forEach(exp => {
                newState.push({...exp});
            })
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default BookingsReducer;
