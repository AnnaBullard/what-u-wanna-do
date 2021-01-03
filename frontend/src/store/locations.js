import { fetch } from './csrf';

const GET = "locations/get";

const getAll = (payload) => ({
    type: GET,
    payload
});

export const getLocations = () => async dispatch => {
    const res = await fetch(`/api/locations`);
    if (res.ok) {
        dispatch(getAll(res.data));
    };
}

const initialState = [];

const LocationsReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET: {
            const newState = [];
            action.payload.forEach(location => {
                newState.push({...location});
            });
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default LocationsReducer;
