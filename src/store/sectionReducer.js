

// const defaultState = {
//     section: ""
// }

// export const sectionReducer = (state = defaultState, action) => {
//     switch (action.type) {
//         case SHOW_SECTION:
//             return {...state, section: state.section = action.payload}
//         default:
//             return state
//     }
    
// }

import { createSlice } from "@reduxjs/toolkit";


const getInitialState = () => [{
    section: ''
}];

const todoSlice = createSlice({
    name: "todoSection",

    initialState: getInitialState(),

    reducers: {
        showSection(item, action) {
            return { section:  action.payload}
        }
    }
});

export const { showSection } = todoSlice.actions;

export default todoSlice.reducer;