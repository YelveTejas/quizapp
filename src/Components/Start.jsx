import React, { useRef } from "react";
import "../app.css";
const Start = ({ setUsername }) => {
  const inputRef = useRef();
  const handle = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };
  return (
    <>
      <img
        src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/10bc9b109168105.Y3JvcCw4MzEsNjUwLDE4NSww.png"
        alt="error"
      ></img>

      <div className="start">
        <input
          ref={inputRef}
          placeholder="Enter Your Name"
          className="input"
        ></input>
        <button className="start-button" onClick={handle}>
          Start
        </button>
      </div>
    </>
  );
};

export default Start;
