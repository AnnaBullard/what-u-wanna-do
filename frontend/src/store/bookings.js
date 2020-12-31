import { fetch } from './csrf';

const GET_ALL = "bookings/get_all";
const BOOK = "booking/book"

const getAll = (payload) => ({
    type: GET_ALL,
    payload
});

const book = (id) => ({
    type: BOOK,
    id
});

export const getBookings = (id) => async dispatch => {
    let url = `/api/experiences/${id}/bookings/available`
    const res = await fetch(url);
    if (res.ok) {
        dispatch(getAll(res.data));
    };
}

export const makeBooking = ({booking}) => async dispatch => {
    let experience = await fetch(`/api/experiences/${booking.experienceId}`);
    let res = await fetch(`/api/bookings/${booking.id}/book`,{
        method: "PATCH",
        body: JSON.stringify({
            price: experience.currentPrice,
            statusId: 2,
        })
    })
    if (res.ok) {
        dispatch(book(res.data.id));
    };
    return res;
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
        case BOOK: {
            const newState= []
            state.forEach(rec => {
                if (rec.id !== action.id) newState.push(rec)
            })
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default BookingsReducer;
