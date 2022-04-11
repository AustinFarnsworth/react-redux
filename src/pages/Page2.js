import React from "react";
import {useSelector} from "react-redux";

function Page2() {
  const term = useSelector((state) => state.term);

  return (
    <div>
      <h3>This is page 2</h3>
      <p>This is your saved term: {term}</p>
    </div>
  );
}

export default Page2;
