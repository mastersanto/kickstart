import { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map(task => <TodoItem key={task._id} task={task} />)}
      </ul>
    );
  }
}

TodoList.propTypes = {
  hideCompleted: PropTypes.bool,
  tasks: PropTypes.array.isRequired
};

export default TodoList;
