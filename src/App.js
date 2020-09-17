import React,{Component} from 'react'
import Todos from './components/Todos'
import Header from "./components/layout/header"
import AddTodo from "./components/AddTodo"
import { render } from '@testing-library/react'

class App extends Component {
  state ={
    todos: [
      {
        id: 1,
        title: "Llevar la ropa",
        completed: false,
      },  
      {
        id: 2,
        title: "Comprar Palta",
        completed: false,
      },
      {
        id: 3,
        title: "Curso React",
        completed: false,
      }
    ]
  }
  // Toggle Complete
  markComplete = (id) => {
    this.setState({todos:this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })
  })
}
delTodo = (id) => {
  this.setState({todos: [ ... this.state.todos.filter(todo => todo.id
    !== id )]})
}
AddTodo = (title) => {
  const newTodo = {
    title,
    id: 4,
    complete: false,
  }
  this.setState({todos: [...this.state.todos, newTodo]})
}
  render(){
    return(
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo AddTodo={this.AddTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>

        </div>
      </div>
    )
  }
}



export default App;
