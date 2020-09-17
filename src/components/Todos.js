import React,{Component} from 'react';
import "./App.css";
import { render } from '@testing-library/react';
import {Todoitem} from "./Todoitem";
import {PropTypes} from "prop-types";

export default class Todos extends Component {
        markComplete = () => {
                        console.log("hello")

        }
    render () {
            return this.props.todos.map((todo)=>
                <Todoitem key={todo.id} todo={todo} markComplete={this.markComplete}/>
            )
          
    }
}

// PropTypes
Todos.propTypes = {
       todos: PropTypes.array.isRequired   
}


