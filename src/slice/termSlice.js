import {createSlice} from "@reduxjs/toolkit";

const termSlice = createSlice({
  name: "term",
  initialState: "",
  reducers: {
    saveTerm: (state, action) => {
      state = action.payload;
    },
  },
});

export default termSlice;
