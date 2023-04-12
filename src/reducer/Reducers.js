const initialData = {
  data: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADDTODO":
      const { id, data } = action.payload;
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: id,
            data: data,
          },
        ],
      };
    default:
      return state;
    case "DELETETODO":
      const newList = state.data.filter((item) => item.id !== action.id);
      return {
        ...state,
        data: newList,
      };
    case "REMOVETODO":
      return {
        ...state,
        data: [],
      };
  }
};
export default todoReducers;
