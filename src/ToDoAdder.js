import { v4 } from "uuid";
import ToDoName from "./ToDoName";
import ToDoDate from "./ToDoDate";
import "./todoadder.css";
import { useState } from "react";

const ToDoAdder = (props) => {
  // let nameDate = { name: "", date: "" };
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());

  const nameHandler = (receivedName) => {
    setName(receivedName);
  };
  const dateHandler = (receivedDate) => {
    setDate(receivedDate);
  };

  // const keyAdder = () => {
  //   nameDate.id = v4();
  // };

  const nameDateHandler = () => {
    const nameAndDate = { name: name, date: date };
    nameAndDate.id = v4();
    props.nameDate(nameAndDate);
    setName("");
  };

  return (
    <div className="grid grid-cols-3 items-center justify-between bg-red-500 m-5 rounded-xl">
      <ToDoName name={nameHandler} />
      <ToDoDate date={dateHandler} />
      <button
        onClick={nameDateHandler}
        className="text-white font-serif`s m-5 border-2 border-blue-600 border-solid rounded addbutton"
        disabled={!name || !date}
      >
        Add
      </button>
    </div>
  );
};

export default ToDoAdder;
