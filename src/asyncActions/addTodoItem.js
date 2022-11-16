import {addManyTodos} from "../store/actionGenerators";
import { useSelector } from "react-redux";

export const AddTodoItem = (url) => {

    const a = useSelector((state) => state.reducer.item)
    console.log(a);
 
     return function(dispatch) {
         fetch(url, {
             method: 'POST',
             body: JSON.stringify(a),
             headers: {
               'Content-type': 'application/json; charset=UTF-8',
             },
           })
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