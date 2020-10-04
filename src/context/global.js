import React, { createContext } from "react";
import useNumbers from "../hooks/useNumbers";
export const GlobalContext = createContext();

export function GlobalProvider(props) {
  const {
    numbers,
    level,
    score,
    time,
    createNewListNumber,
    selectNum,
  } = useNumbers();
  return (
    <GlobalContext.Provider
      value={{ numbers, level, score, time, createNewListNumber, selectNum }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
