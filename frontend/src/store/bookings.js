import { fetch } from './csrf';

const GET = "bookings/get";
const BOOK = "bookings/book";

const getBookings = (payload) => ({
    type: GET,
    payload
});

const book = (id) => ({
    type: BOOK,
    id
});

export const getAvailable = (id) => async dispatch => {
    const res = await fetch(`/api/experiences/${id}/bookings/available`);
    if (res.ok) {
        dispatch(getBookings(res.data));
    };
}

export const makeBooking = ({booking}) => async dispatch => {
    let experience = await fetch(`/api/experiences/${booking.experienceId}`);
    experience = experience.data;
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

export const getBooked = () => async dispatch => {
    const res = await fetch(`/api/bookings/booked`);
    if (res.ok) {
        dispatch(getBookings(res.data));
    };
}

export const unbook = (id) => async dispatch => {
    let res = await fetch(`/api/bookings/${id}/unbook`);
    if (res.ok) {
        dispatch(book(id));
    };
}

const initialState = [];

const BookingsReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET: {
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
