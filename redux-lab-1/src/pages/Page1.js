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
    setTerm("");

    dispatch(termSlice.actions.saveTerm(term));
  };

  function submit(e) {
    e.preventDefault();
    console.log(term);
  }

  return (
    <div>
      <h3>Welcome to Page 1</h3>

      <form>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      <div className="response">
        <span> Term: {term}</span>
      </div>
      {/* <p> Id: {id}</p> */}
    </div>
  );
}

export default Page1;
