import { fetch } from './csrf';

const GET_LIST = "experiences/get_list";
const CHANGE = "experiences/add"

const getList = (payload) => ({
    type: GET_LIST,
    payload
});

const addEdit = (payload) => ({
    type: CHANGE,
    payload
})

export const getExperiences = (type) => async dispatch => {
    //types: booked, hosted, for available leave empty
    let url = "/api/experiences"+(type?`/${type}`:"")
    const res = await fetch(url);
    if (res.ok) {
        dispatch(getList(res.data));
    };
}

export const editExperience = ({experience, type}) => async dispatch => {
    let method = (type==="edit")?"PATCH":"POST"
    const res = await fetch("/api/experiences", {
        method,
        body: JSON.stringify(experience)
    });
    if (res.ok) {
        dispatch(addEdit(res.data));
    };
    return res;
}


const initialState = {};

const ExperiencesReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_LIST: {
            const newState = {}
            action.payload.forEach(exp => {
                newState[exp.id] = {...exp};
            })
            return newState;
        }
        case CHANGE: {
            const newState = {...state}
            newState[action.payload.id] = {...action.payload}
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default ExperiencesReducer;
