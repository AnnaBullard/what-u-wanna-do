import { fetch } from './csrf';

const GET = "locations/get";
const EDIT = "locations/edit";

const getAll = (payload) => ({
    type: GET,
    payload
});

const edit = (payload) => ({
    type: EDIT,
    payload
})

export const getLocations = () => async dispatch => {
    const res = await fetch(`/api/locations`);
    if (res.ok) {
        dispatch(getAll(res.data));
    };
}

export const editLocation = (location) => async dispatch => {
    const res = await fetch(`/api/locations/${location.id}`,{
        method: "PATCH",
        body: JSON.stringify(location)
    })
    if (res.ok) {
        dispatch(edit(res.data));
    }
    return res
}

const initialState = {};

const LocationsReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET: {
            const newState = {};
            action.payload.forEach(location => {
                newState[location.id] = {...location};
            });
            return newState;
        }
        case EDIT: {
            const newState = {...state};
            newState[action.payload.id]={...action.payload}
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default LocationsReducer;
