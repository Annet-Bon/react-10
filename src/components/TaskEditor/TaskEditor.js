import './TaskEditor.css';

export function TaskEditor({ addTaskOnClick }) {
    return (
        <div className="TaskEditor">
            <button
                type="button"
                onClick={addTaskOnClick}
            >Add task</button>
        </div>
    );
}