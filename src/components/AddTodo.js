import { render } from '@testing-library/react'
import React, {Component} from 'react'

export class AddTodo extends Component {
    state = {
        title: ""
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddTodo(this.state.title);
        this.setState({title: ""})
    }
    onChange = (e) => {
        this.setState({title: e.target.value})
    }
        render(){
            return (
                <form onSubmit={this.onSubmit}>
                    <input 
                    type = {"text"}
                    name = {"title"}
                    placeholder = {"Add todo"}
                    value={this.state.title}
                    onChange={this.onChange}
                    
                    />
                    <input
                    type = {"submit"}
                    name = {"submit"}
                    className = {"btn"}
                    />
                </form>
        
            )
        }
}

export default AddTodo