import { fetch } from './csrf';

const GET_ONE = "experiences/get_one";

const getOne = (payload) => ({
    type: GET_ONE,
    payload
});

export const getExperience = (id) => async dispatch => {
    let url = `/api/experiences/${id}`;
    const res = await fetch(url);
    if (res.ok) {

        dispatch(getOne(res.data));
    };
}


const initialState = [];

const SingleExperienceReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_ONE: {
            const newState = {...action.payload}
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default SingleExperienceReducer;
