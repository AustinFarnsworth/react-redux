const id = (state = "", action) => {
  switch (action.type) {
    case "CHECK_ID":
      return state;
    default:
      return state;
  }
};

export default id;
