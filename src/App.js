import React, { useState, useRef } from "react";
import "./App.css";

const createObjectURL =
  (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

function App() {
  const [src, setSrc] = useState("");
  const inputRef = useRef(null);
  const handleChangeFile = e => {
    let files = e.target.files;
    let src = createObjectURL(files[0]);
    setSrc(src);
  };
  return (
    <div>
      <input type="file" ref={inputRef} onChange={handleChangeFile} />
      <img src={src} alt="" />
      <button type="button">Post</button>
    </div>
  );
}

export default App;
