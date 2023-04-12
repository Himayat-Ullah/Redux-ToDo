export const addTodo = (input) => {
  return {
    type: "ADDTODO",
    payload: {
      id: new Date().getTime().toString(),
      data: input,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETETODO",
    id,
  };
};

export const removeTodo = () => {
  return {
    type: "REMOVETODO",
  };
};
