import React,{Component} from 'react';
import Todos from './components/Todos'
import { render } from '@testing-library/react';

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
        completed: true,
      },
      {
        id: 3,
        title: "Curso React",
        completed: false,
      }
    ]
  }
  markComplete = () => {
    console.log("App")
  }
  render(){
    return(
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    )
  }
}



export default App;
