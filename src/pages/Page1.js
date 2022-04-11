import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import termSlice from "../slice/termSlice";
import "./page1.css";

function Page1() {
  const [term, setTerm] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(termSlice.actions.saveTerm(term));
  };

  return (
    <div>
      <h3>Welcome to Page 1</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onClick={(e) => {
            setTerm(e.target.value);
          }}
        />
        <button type="submit">Submit</button>

        <div className="response">
          <span> Term: {term}</span>
        </div>
        {/* <p> Id: {id}</p> */}
      </form>
    </div>
  );
}

export default Page1;
