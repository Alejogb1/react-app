import React,{Component} from 'react';
import "./App.css";
import { render } from '@testing-library/react';


export default class Todos extends Component {
    render () {
            return this.props.todos.map((todo)=>
                    <h3>{todo.title}</h3>
            )
          
    }
}


