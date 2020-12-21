import React, { createContext } from "react";
import useNumbers from "../hooks/useNumbers";
export const InGameContext = createContext();

export function InGameProvider(props) {
  const {
    numbers,
    level,
    score,
    time,
    createNewListNumber,
    selectNum,
    saveScore,
    returnGame
  } = useNumbers();
  return (
    <InGameContext.Provider
      value={{ numbers, level, score, time, createNewListNumber, selectNum,returnGame, saveScore }}
    >
      {props.children}
    </InGameContext.Provider>
  );
}
