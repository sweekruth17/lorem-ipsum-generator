import { useState } from "react";
import data from "./data";
import { BiCopyAlt } from "react-icons/bi";
import { FaRegCopy } from "react-icons/fa";
import copy from "copy-to-clipboard";
const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amt = parseInt(count);
    setText(data.splice(0, amt));
  };

  return (
    <>
      <main className="section-center">
        <h4 className="section-center h4">Tired of boring Lorem Ipsum?</h4>
        <form action="Submit" className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount" className="lorem-form label">
            Paragraphs:{" "}
          </label>
          <input
            type="number"
            value={count}
            name="count"
            onChange={(e) => {
              setCount(e.target.value);
            }}
            className="lorem-form input"
            max="8"
            min="0"
          />
          <button type="submit" className="lorem-form btn">
            Generate
          </button>
          <button
            className="lorem-form btn"
            onClick={() => {
              setText([]);
              setCount(0);
            }}
          >
            clear
          </button>
        </form>
        <button
          onClick={() => {
            copy(text);
            console.log(text);
          }}
        >
          <FaRegCopy />
        </button>
        <article className="lorem-text p">
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </main>
    </>
  );
};
export default App;
