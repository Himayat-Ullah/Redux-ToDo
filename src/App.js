import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ".//App.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { addTodo } from "./actions";
import { deleteTodo } from "./actions";
import { removeTodo } from "./actions";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const [input, setInput] = useState("");
  const data = useSelector((state) => state.todoReducers.data);
  const dispatch = useDispatch();
  // const [data, setData] = useState([]);
  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter" && input) {
  //     setData([...data, input]);
  //     // console.log(data);
  //     // console.log(input);
  //     setInput("");
  //   }
  // };
  // const showData = () => {
  //   setData([...data, input]);
  //   setInput("");
  // };
  // const deleteitem = (id) => {
  //   const newdata = data.filter((item, index) => {
  //     return index !== id;
  //   });
  //   setData(newdata);
  // };
  return (
    <div className="container">
      <div className="col-8 bg-primary mt-5 rounded text-center m-auto">
        <div className="h2design">
          <motion.h2 initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}>
            ToDo App
          </motion.h2>
        </div>
        <div className="d-flex flex-row justify-content-between mt-1 bg-light text-primary m-auto lastd1">
          <input
            type="text"
            className="inputd"
            value={input}
            placeholder="✍ Write here..."
            onChange={(e) => setInput(e.target.value)}
            // onKeyDown={handleKeyDown}
          />
          <motion.button
            className="btnd caret"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {input && (
              <FontAwesomeIcon
                icon={faPlus}
                className="fa-2x text-success"
                // onClick={showData}
                onClick={() => dispatch(addTodo(input), setInput(""))}
              />
            )}
          </motion.button>
        </div>
        <hr style={{ color: "white", border: "1px solid white" }} />
        {data &&
          data.map((record) => {
            return (
              <motion.div
                key={record.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="d-flex flex-row justify-content-between mt-2 bg-light text-primary m-auto lastd2"
              >
                <h6 className="caret mt-2 ms-2" key={record.id}>
                  {record.data}
                </h6>

                <motion.button
                  className="btnd"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="fa-2x deleteicond caret"
                    onClick={() => dispatch(deleteTodo(record.id))}
                    // onClick={() => {
                    //   deleteitem(id);
                    // }}
                  />
                </motion.button>
              </motion.div>
            );
          })}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn btn-danger buttond"
          onClick={() => dispatch(removeTodo())}
          // onClick={() => {
          //   setData("");
          // }}
        >
          Clear All
        </motion.button>
      </div>
      <div className="col-2"></div>
    </div>
  );
};

export default App;
