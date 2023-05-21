import ListItem from "./ListItem";

const TodoList = (props) => {
  const deleteHandler = (id) => {
    const updatedTodos = props.toDoItems.filter((item) => item.id !== id);
    props.setToDoItems(updatedTodos);
  };

  return (
    <div className="m-5">
      {props.toDoItems.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          name={item.name}
          date={item.date.toLocaleDateString()}
          delete={deleteHandler}
        />
      ))}
    </div>
  );
};

export default TodoList;
