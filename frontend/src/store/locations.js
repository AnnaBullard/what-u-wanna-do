import { fetch } from './csrf';

const GET = "locations/get";
const EDIT = "locations/edit";
const DELETE = "location/delete";

const getAll = (payload) => ({
    type: GET,
    payload
});

const edit = (payload) => ({
    type: EDIT,
    payload
})

const remove = (id) => ({
    type: DELETE,
    id
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
    return res;
}

export const addLocation = (location) => async dispatch => {
    const res = await fetch(`/api/locations/`,{
        method: "POST",
        body: JSON.stringify(location)
    })
    if (res.ok) {
        dispatch(edit(res.data));
    }
    return res;
}

export const deleteLocation = (id) => async dispatch => {
    const res = await fetch(`/api/locations/${id}`,{
        method: "DELETE"
    })
    if (res.ok) {
        dispatch(remove(id));
    }
    return res;
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
        case DELETE: {
            const newState = {...state};
            delete newState[action.id];
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default LocationsReducer;
