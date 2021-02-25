// import './App.css';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from './Layout/Layout';
import { createTask } from '../utils/create-task'
import { Counter } from './Counter';
import { TaskList } from './TaskList/TaskList';
import { TaskEditor } from './TaskEditor/TaskEditor';

export class App extends Component {

  state = {
    tasks: [],
  };

  static propTypes = {
    initialValue: PropTypes.number,
    step: PropTypes.number,
    addTask: PropTypes.func,
    removeTask: PropTypes.func,
  };

  addTask = () => {
    const task = createTask();

    this.setState(prevState => {
      return {
        tasks: [...prevState.tasks, task],
        // Так нужно работать с массивом, не слайс, не пуш, только распылением
      }
    })
  };

  removeTask = taskId => {
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.filter(({id}) => id !== taskId),
      };
    });
  };

  render() {
    return (
      <>
      <Layout>
        <Counter initialValue={0} step={1}/>
        <TaskEditor addTaskOnClick={this.addTask} />
        {this.state.tasks.length > 0 && <TaskList
          tasks={this.state.tasks}
          removeTaskOnClick={this.removeTask} />}
      </Layout>
      </>
    );
  }
}