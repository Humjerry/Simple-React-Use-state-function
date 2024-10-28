import React from "react";
import "../App.css";

function Btn({ content, action }) {
  return (
    <div className="allbtn">
      <button className="thisbtn" onClick={action}>
        {" "}
        {content}
      </button>
    </div>
  );
}
export default Btn;
