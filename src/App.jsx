import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/counter/Main";
import Display from "./components/Display";

export default function App() {
  const [counters, setCounters] = useState([
    {
      id: 1,
      count: 0,
    },
    {
      id: 2,
      count: 0,
    },
  ]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      counters.reduce((prevTotal, currentElem) => {
        return currentElem.count + prevTotal;
      }, 0),
    );
  }, [counters]);

  const handler = (key, id) => {
    setCounters(
      counters.map((el) => {
        if (el.id === id) {
          switch (key) {
            case "increment":
              return {
                ...el,
                count: el.count + 1,
              };
            case "decrement":
              return {
                ...el,
                count: el.count > 0 ? el.count - 1 : el.count,
              };
              break;
            default:
              return { ...el };
          }
        }
        return { ...el };
      }),
    );
  };
  return (
    <div className="h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      {counters.map((el) => (
        <Counter
          key={el.id}
          label={el.id}
          count={el.count}
          increment={() => handler("increment", el.id)}
          decrement={() => handler("decrement", el.id)}
        />
      ))}
      <Display total={total} />
    </div>
  );
}
