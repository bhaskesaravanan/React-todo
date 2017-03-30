import React from 'react';
import App from './App';
// class TodoItems extends Component {
//   render() {
//     const todoEntries = this.props.entries;
//     console.log(todoEntries);
//     return (<div> <ul className="thelist">
//       {
//         todoEntries.map(item => <li> key = {item.text}</li>)
//       }
//     </ul>
//     </div>);
//   }
// }
function deletefunction(key) {
  App.deletefunc(key);
}
const TodoItems = ({ id, text }) => <li key={id}><a
  href="" onClick={(e) => {
    e.preventDefault();
    deletefunction(id);
  }}
>{text}</a></li>;

export default TodoItems;
