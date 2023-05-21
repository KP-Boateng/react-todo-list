import { useState } from "react";

const ToDoName = (props) => {
  const [name, setName] = useState("");
  const inputHandler = (event) => {
    setName(event.target.value);
    props.name(event.target.value);
  };

  return (
    <div className="m-5">
      <form>
        <div>
          {/* <label htmlFor="name" className="text-white">
            Name of item
          </label> */}
        </div>
        <div>
          <input
            placeholder="Item name here"
            required
            value={name}
            onChange={inputHandler}
            type="text"
            id="name"
            className="my-2 font-mono border-2 border-blue-600 border-solid rounded w-full text-center"
          />
        </div>
      </form>
    </div>
  );
};

export default ToDoName;

// import { useState } from "react";

// const ToDoName = (props) => {
//   const [name, setName] = useState("");
//   const inputHandler = (event) => {
//     setName(event.target.value);
//     props.name(event.target.value);
//   };

//   return (
//     <div className="m-5">
//       <form>
//         <div>
//           <label htmlFor="name" className="text-white">
//             Name of item
//           </label>
//         </div>
//         <div>
//           <input
//             required
//             value={name}
//             onChange={inputHandler}
//             type="text"
//             id="name"
//             className="my-2 font-mono border-2 border-blue-600 border-solid rounded w-full text-center"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ToDoName;
