import React, { Component } from 'react';
import './App.css';
// import TodoItems from './TodoItems';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }
  deletefunc(key) {
    this.setState(this.state.items.pop(key));
  }

  addItem() {
    this.setState({
      items: [
        ...this.state.items,
        {
          text: this.taskInput.value,
          id: Date.now(),
        },
      ],
    });
    this.taskInput.value = '';
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.addItem();
            }}
          >
            <input ref={(el) => { this.taskInput = el; }} type="text" placeholder="enter task" />
            <button type="submit">add</button>
          </form>
        </div>
        <ul>
          {
            this.state.items.map(i =>
              <li key={i.id}><a
                href="" onClick={(e) => {
                  e.preventDefault();
                  this.deletefunc(i.id);
                }}
              >{i.text}</a></li>,
              // <TodoItems key={i.id} text={i.text} />,
          )
          }
        </ul>
      </div>
    );
  }
}


export default App;
