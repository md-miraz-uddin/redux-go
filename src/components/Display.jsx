import React, { useState } from "react";

export default function Display({ total }) {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">Total : {total}</div>
      </div>
    </div>
  );
}
