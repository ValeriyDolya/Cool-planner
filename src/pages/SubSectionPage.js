import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { remove, doneToggle } from '../store/todo'
import '../css/subsectionPage.css'

export default function SubSectionPage() {
    const items = useSelector((state) => state.todo);
    const section_item = useSelector((state) => state.todoSection.section)
    const dispatch = useDispatch();

    const sectionItems = items.filter((item) => item.sectionName === section_item);
   
    // useEffect(() => {
    //     dispatch(fetchTodos('http://localhost:8080/api/server'))
    //     console.log('init 2');
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return (
        <>
            <ul>
                {items.length ? sectionItems.map((item) => (
                    <li key={item.id} className='item'>
                        <span style={{textDecoration: item.completed ? 'line-through' : 'none'}}>{ item.title }</span>
                        <span style={{display: item.deadline ? "" : "none"}}>deadline: {item.deadline}</span>
                        <span style={{display: item.notification ? "" : "none"}}>notification: {item.notification}</span>
                        <span style={{display: item.priority ? "" : "none"}}>!</span>
                        <button style={{display: item.file ? "" : "none"}}>F</button>
                        <div>
                            <button onClick={() => dispatch(doneToggle(item.id))}>Done</button>
                            <button onClick={() => dispatch(remove(item.id))}>Delete</button>
                        </div>
                    </li>
                )) : <p>Nothing to show</p>}
            </ul>
            <Link to="/">
                <button>Back</button>
            </Link>
        </>
    )
}