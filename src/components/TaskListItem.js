

export const TaskListItem = ({ text, onRemove }) => (
  <li className="TaskList-item">
    <p className="TaskList-text">{text}</p>

    <section className="TaskList-actions">
      <button type="button" className="TaskList-button" onClick={onRemove}>
        Удалить
      </button>
    </section>
  </li>
);