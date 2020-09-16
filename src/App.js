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
        completed: false,
      },
      {
        id: 3,
        title: "Curso React",
        completed: false,
      }
    ]
  }
  render(){
    return(
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    )
  }
}



export default App;
