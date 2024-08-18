import React, { Component } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";


export default class Todo extends Component {

     removeClickHandler = (id) => {
        this.props.onRemove(id)
    }

    editClickHandler = (id) => {
        this.props.onEdit(id)
    }
render(){

    return (
        // 'completed' class for completed todos
        <div className={`todo ${this.props.completed ? 'completed' : ''}`} style={{ display: 'flex' }}>
            <li className="todo-item">{this.props.title}</li>

            <button className="check-btn"  onClick={this.editClickHandler.bind(this,this.props.id)}>
               <FaRegCalendarCheck/>
            </button>

            <button className="trash-btn" onClick={this.removeClickHandler.bind(this,this.props.id)}>
                <FaRegTrashAlt/>
            </button>
        </div>
    )
}
    }