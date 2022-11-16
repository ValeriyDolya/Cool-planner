import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { add } from "../store/todo";

import '../css/AddItemPage.css'


function AddItem() {
    const items = useSelector(state => state.todo)
    const dispatch = useDispatch();
    
    const [value, setValue] = useState("");
    const [sectionValue, setSectionValue] = useState("");
    const [deadline, setDeadline] = useState('');
    const [notification, setNotification] = useState('');
    const [priority, setPriority] = useState(false)
    const [file, setFile] = useState()

    let tmpArray = [];
    function itemCheck(item) {
        if (tmpArray.indexOf(item.sectionName) === -1) {
            tmpArray.push(item.sectionName);
            return true
        }
        return false;
    }
    const x = items.filter((item) => itemCheck(item))
    const x2 = x.map((item) => item.sectionName)
    

    const addItemHandler = () => {
      return  dispatch(add({
        title:value,
        sectionName:sectionValue,
        deadline: deadline,
        notification: notification,
        priority: priority,
        file: file
    }))
    }
    
    return (
        <div className="container">
            <div className="enterSection">
                <label htmlFor="enterSection">Section </label>
                <input
                    placeholder="Enter section"
                    id="enterSection"
                    value={sectionValue}
                    list="sectionList"
                    onChange={(e) => setSectionValue(e.target.value)}
                />
                <datalist id="sectionList">
                    {x2.map((item) => (<option value={item} key={item}></option>))}
                </datalist>
            </div>
            <div className="enterItem">
                <label htmlFor="enterItem">Task </label>
                <input placeholder="Enter item" id="enterItem" value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <div className="enterDeadline">
                <label htmlFor="enterDeadline">Last date when task must be made</label>
                <input type="date" id="enterDeadline" value={deadline} onChange={(e) => setDeadline(e.target.value)}/>
            </div>
            <div className="enterNotification">
                <label htmlFor="enterNotification">Notification time</label>
                <input type="datetime-local" id="enterNotification" value={notification} onChange={(e) => setNotification(e.target.value)}/>
            </div>
            <div className="enterPriority">
                <label htmlFor="enterPriority">Priority of task if higher than other - check it</label>
                <input type="checkbox" id="enterPriority" onChange={(e) => setPriority(e.target.value)}/>
            </div>
            <div className="enterFile">
                <label htmlFor="enterFile">To attach file</label>
                 <input type="file" id="enterFile" onChange={(e) => setFile(e.target.value)} />
            </div>
            <Link to="/">
                <button className="addItem" onClick={addItemHandler} >Add item</button>
            </Link>
        </div>
    )
};

export default AddItem;