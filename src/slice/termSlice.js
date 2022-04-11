import {createSlice} from "@reduxjs/toolkit";

const termSlice = createSlice({
  name: "term",
  initialState: "",
  reducers: {
    saveTerm: (state, action) => action.payload,
  },
});

export default termSlice;
