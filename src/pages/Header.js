import React from "react";
import '../css/Header.css'


export function Header() {

var today = new Date();
var now = today.toLocaleString();

    return (
        <div className="header">
            <p>Task maneger</p>
            <div>
                <p>Curent time</p>
                <div>{now}</div>
            </div>
            
        </div>
    )
}

