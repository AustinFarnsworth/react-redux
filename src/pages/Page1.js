import React from "react";
import {useState} from "react";

function Page1() {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h3>Welcome to Page 1</h3>

      <form>
        <input
          type="text"
          onClick={(e) => {
            setTerm(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Submit</button>
        <span>{term}</span>
      </form>
    </div>
  );
}

export default Page1;
