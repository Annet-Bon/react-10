import './TaskList.css';
import { TaskListItem } from '../TaskListItem';

export const TaskList = ({ tasks, removeTaskOnClick }) => (
        <ul className="TaskList">
            {tasks.map(({ id, text }) =>
                <TaskListItem
                    key={id}
                    text={text}
                    onRemove={() => removeTaskOnClick(id)}
    // Для передачи значения кроме события, вписываем анонимную функцию
                />)}
        </ul>
)