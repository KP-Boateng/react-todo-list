import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const ToDoDate = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const changeHandler = (date) => {
    setStartDate(date);
    props.date(date);
  };
  return (
    <div className="m-5">
      {/* <h2 className="text-white">Date</h2> */}
      <ReactDatePicker
        required
        selected={startDate}
        onChange={changeHandler}
        className="font-mono my-2 border-2 border-blue-600 border-solid rounded w-full text-center"
      ></ReactDatePicker>
    </div>
  );
};

export default ToDoDate;
