const ListItem = (props) => {
  const deleteHandler = () => {
    props.delete(props.id);
  };
  return (
    <div className="grid grid-cols-3 my-3 bg-blue-700 rounded-xl items-center p-3">
      <div className="text-white text-center font-bold text-xl capitalize">
        {props.name}
      </div>
      <div className="text-white text-center font-bold text-xl capitalize p-3">
        {props.date}
      </div>
      <button
        onClick={deleteHandler}
        className="text-white text-center font-bold text-xl capitalize p-3"
      >
        Delete
      </button>
    </div>
  );
};
export default ListItem;
