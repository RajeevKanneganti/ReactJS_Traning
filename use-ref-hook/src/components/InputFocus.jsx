import { useRef, useState, useEffect } from "react";

export const InputFocus = () => {
  const inputRef = useRef("");
  const inputRef1 = useRef("");

  return (
    <div>
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus box 1
      </button>
      <input ref={inputRef} type="text" />

      <button
        onClick={() => {
          inputRef1.current.focus();
        }}
      >
        Focus box 2
      </button>

      <input ref={inputRef1} type="text" />
    </div>
  );
};
