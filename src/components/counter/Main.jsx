import React, { useState } from "react";
import Button from "./Button";

export default function Counter({ label, count, increment, decrement }) {
  return (
    <div>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
          <p className="text-1xl font-bold">Counter : {label}</p>
          <div className="text-2xl font-semibold">{count}</div>
          <div className="flex space-x-3">
            <Button handler={increment} color={"indigo"}>
              Increment
            </Button>
            <Button handler={decrement} color={"red"}>
              Decrement
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
