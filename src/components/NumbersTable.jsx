import React from "react";

export default function NumbersTable({ limit }) {
  const numbers = [];
  for (let i = 1; i <= limit; i++) {
    numbers.push(
       i % 2 === 0 ? <div className="border border-solid border-black bg-red-600 w-10 h-10 flex justify-center items-center">
        <p>{i}</p>
      </div> : <div className="border border-solid border-black w-10 h-10 flex justify-center items-center"><p>{i}</p></div>
      
    );
  }

  return <div className="flex">{numbers}</div>;
}
