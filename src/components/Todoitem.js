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
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete}/>
               <p>{this.props.todo.title}</p> 
            </div>
        )
    }
}

// PropTypes
Todoitem.propTypes = {
    todo : PropTypes.object.isRequired   
}

export default Todoitem
