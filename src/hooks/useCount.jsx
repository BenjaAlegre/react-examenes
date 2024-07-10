import { useState } from "react";

export const useCount = () => {
  const [state, setState] = useState(0);

  const add = () => {
    setState((prev) => prev + 1);
  };
  const desc = () => {
    setState((prev) => prev - 1);
  };
  const reset = () => {
    setState(0);
  };

  return { state, add, desc, reset };
};
