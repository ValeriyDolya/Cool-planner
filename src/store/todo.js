import { createSlice } from "@reduxjs/toolkit";


const getInitialState = () => [
    { id: 1, title: 'To clean flat', sectionName: '', completed: false},
    { id: 6, title: 'To maintain fireplace', sectionName: '', completed: true},
    { id: 2, title: 'To clean 11', sectionName: 'list one to do', completed: false},
    { id: 3, title: 'To clean 12', sectionName: 'list one to do', completed: false},
    { id: 4, title: 'To clean 21', sectionName: 'list two to do', completed: false},
    { id: 5, title: 'To clean 22', sectionName: 'list two to do', completed: false},
    {
        id: 7,
        title: 'To wash car', 
        sectionName: '',
        deadline: '2022-11-15',
        notification: '2022-11-15T18:32',
        priority: 'on',
        file: 'C:\\fakepath\\description.pdf',
        completed: false
    }
  ];

const todoSlice = createSlice({
    name: "todo",

    initialState: getInitialState(),

    reducers: {
        add(items, action) {
            if (action.payload.title) {
                const item = {
                    id: Date.now().toString(),
                    title: action.payload.title,
                    sectionName: action.payload.sectionName,
                    file: action.payload.file,
                    deadline: action.payload.deadline,
                    notification: action.payload.notification,
                    priority: action.payload.priority,
                    completed: false
                };
                return [...items, item];
            }
            return
        },
        remove(items, action) {
            return items.filter((x) => x.id !== action.payload);
        },
        doneToggle(items, action) {
            const item = items.find((item) => item.id === action.payload);

            if (item) {
                item.completed = !item.completed;
            }
        },

    }
});

export const { add, remove, doneToggle } = todoSlice.actions;

export default todoSlice.reducer;