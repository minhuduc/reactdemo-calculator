import React from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = React.useState("");
  const [err, setErr] = React.useState("");
  const listNum = [];

  [9, 8, 7, 6, 5, 4, 3, 2, 1, ".", "%", "-", "+", "*", "/"].forEach(item => {
    listNum.push(
      <button
        key={item}
        value={item}
        onClick={e => setData(data + e.target.value)}
      >
        {item}
      </button>
    );
  });

  return (
    <div className="App wrapper">
      <p>{err}</p>

      <input type="text" name="view" value={data} />

      <div className="keypad digits flex">
        {listNum}
        <button
          name="c"
          onClick={() => setData(data.substr(0, data.length - 1))}
        >
          C
        </button>
        <button
          name="="
          onClick={() => {
            try {
              setData(eval(data));
            } catch (e) {
              setErr(err + e);
            }
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}
