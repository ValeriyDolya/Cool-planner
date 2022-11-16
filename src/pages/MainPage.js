import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../css/mainPage.css'

import { remove, doneToggle } from '../store/todo'
import { showSection } from '../store/sectionReducer'



function MainPage() {
    const items = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    // console.log(items);
    const sectionItems = items.filter(i => i.sectionName)
    const noSectionItems = items.filter(i => !i.sectionName)
    // console.log(sectionItems);
    // console.log(noSectionItems);
    // useEffect(() => {
    //     dispatch(fetchTodos('http://localhost:8080/api/server'))
    //     console.log('init');
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    let tmpArray = [];
    function itemCheck(item) {
        if (tmpArray.indexOf(item.sectionName) === -1) {
            tmpArray.push(item.sectionName);
            return true
        }
        return false;
    }
    const sectionItemsButton = sectionItems.filter((item) => itemCheck(item))
    
    return (
        <>
            <ul>
                {sectionItemsButton.map((item) => (
                    <li key={item.id}>
                        <Link to="subItems">
                            <button className="section" onClick={()=> dispatch(showSection(item.sectionName))}>{item.sectionName}</button>
                        </Link>
                    </li>
                ))}
            </ul>
            <ul>
                 {items.length ? noSectionItems.map((item) => (
                    <li key={item.id} className='item'>
                        <span style={{textDecoration: item.completed ? 'line-through' : 'none'}}>{ item.title }</span>
                        <span style={{display: item.deadline ? "" : "none"}}>deadline: {item.deadline}</span>
                        <span style={{display: item.notification ? "" : "none"}}>notification: {item.notification}</span>
                        <span style={{display: item.priority ? "" : "none"}}>!</span>
                        <button style={{display: item.file ? "" : "none"}}> File </button>
                        <div>
                            <button onClick={() => dispatch(doneToggle(item.id))}>Done</button>
                            <button className="btnDelete" onClick={() => dispatch(remove(item.id))}>Delete</button>
                        </div>

                    </li>
                )) : <p>Nothing to show</p>}
            </ul>
            <Link to="/addItem">
                <div className="btnCreateItemContainer">
                    <button className="btnCreateItem">Add one more task!</button>
                </div>
            </Link> 
        </>
    )
};

export default MainPage;