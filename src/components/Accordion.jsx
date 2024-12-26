/* eslint-disable react/prop-types */
import { useState } from "react";
import "./accordion.css";

export default function Accordion({ data }) {
  const [selected, setSelected] = useState(null);

  function toggleSelected(id) {
    if (id === selected) return setSelected(null);

    setSelected(id);
  }

  return (
    <>
      {data.map((datum, i) => (
        <div className={i === selected ? "item show" : "item"} key={i}>
          <div className="title" onClick={() => toggleSelected(i)}>
            <h1 className="question">{datum.question}</h1>
            <span>
              {selected === i ? (
                <svg className="icon minus">
                  <use href="#minus"></use>
                </svg>
              ) : (
                <svg className="icon plus">
                  <use href="#plus"></use>
                </svg>
              )}
            </span>
          </div>
          <div className={i === selected ? "content show" : "content"}>
            <p className="answer">{datum.answer}</p>
          </div>
        </div>
      ))}
    </>
  );
}
