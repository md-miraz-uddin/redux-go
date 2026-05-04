import React from "react";

export default function Button({ children, handler, color }) {
  return (
    <button
      className={`bg-${color}-400 text-white px-3 py-2 rounded shadow`}
      onClick={handler}
    >
      {children}
    </button>
  );
}
