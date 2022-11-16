import {addManyTodos} from "../store/actionGenerators";


export const fetchTodos = (url) => {
    return function(dispatch) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(todos => dispatch(addManyTodos(todos)))
    }
}

