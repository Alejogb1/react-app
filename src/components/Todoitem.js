import React, { Component } from 'react'
import Todos from './Todos'
import App from "../App"
import {PropTypes} from "prop-types";


export class Todoitem extends Component {
    getStyle = () => {
        return {
            backgroundColor: "white",
            borderBottom: "1px black dotted",
            textDecoration: this.props.todo.completed ? 
            "line-through" : "none"
        }
    }
     

    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind
                (this, id)
                }/>
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
               <p>{title}</p>
            </div>
        )
    }
}

// PropTypes
Todoitem.propTypes = {
    todo : PropTypes.object.isRequired   
}

const btnStyle  = {
    background: "red",
    color: "white",
    border: "none",
    float: "right",
    borderRadius: "50%",
    padding: "5px 9px",
    cursor: "pointer",
    
}
export default Todoitem
