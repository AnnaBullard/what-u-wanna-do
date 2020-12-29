import { fetch } from './csrf';

const GET_LIST = "experiences/get_list";

const getList = (payload) => ({
    type: GET_LIST,
    payload
});

export const getExperiences = (type) => async dispatch => {
    //types: booked, hosted
    let url = "/api/experiences"+(type?`/${type}`:"")
    const res = await fetch(url);
    if (res.ok) {
        dispatch(getList(res.data));
    };
}

const initialState = [];

const ExperiencesReducer = (state = initialState, action) =>{
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

export default ExperiencesReducer;
