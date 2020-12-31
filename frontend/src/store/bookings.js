import { fetch } from './csrf';

const GET_ALL = "bookings/get_all";

const getAll = (payload) => ({
    type: GET_ALL,
    payload
});

export const getBookings = (id,type) => async dispatch => {
    let url = `/api/experiences/${id}/bookings${type?"/"+type:""}`
    const res = await fetch(url);
    if (res.ok) {
        dispatch(getAll(res.data));
    };
}

const initialState = [];

const BookingsReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_ALL: {
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
