import { useState, useEffect } from "react";
import {
  randomIntFromInterval,
  delay,
  wrongNumbers,
  returnNumbers,
  sortListNum,
} from "./func";
import { timePlay, currentLevel, bonusTime } from "./constance";

export default (initialValue) => {
  const [numbers, setNumbers] = useState([]);
  const [level, setLevel] = useState(currentLevel);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(timePlay);
  const [resultList, setResultList] = useState([]);
  const [order, setOrder] = useState(0);
  useEffect(() => {
    createNewListNumber(level);
  }, []);
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime((prevState) => {
        if (prevState == 0) {
          returnGame();
          return timePlay;
        } else {
          return prevState - 1;
        }
      });
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);
  const createNewListNumber = (lv) => {
    let arrNumber = [];
    for (let i = 0; i < 10; i++) {
      const testNum = () => {
        const newNum = randomIntFromInterval(0, lv * 10);
        if (arrNumber.includes(newNum)) {
          testNum();
        } else {
          arrNumber.push(newNum);
        }
      };
      testNum();
    }
    const newListNumber = arrNumber.map((e) => {
      return {
        content: e.toString(),
        status: 2,
      };
    });
    setResultList(sortListNum(arrNumber));
    setNumbers(newListNumber);
    setOrder(0);
  };
  const selectNum = (e) => {
    if (
      Number(e) == resultList[resultList.length - 1] &&
      Number(e) == resultList[order]
    ) {
      setScore((prevState) => prevState + 5 * level);
      setTime((prevState) => prevState + bonusTime);
      setLevel((prevState) => {
        createNewListNumber(prevState + 1);
        return prevState + 1;
      });
    } else if (Number(e) == resultList[order]) {
      const objIndex = numbers.findIndex((obj) => Number(obj.content) == e);
      const newListNum = numbers;
      newListNum[objIndex].status = 1;
      setNumbers(newListNum);
      setOrder((prevState) => prevState + 1);
    } else {
      const handleWrongNumber = new Promise((res, rej) => {
        setNumbers(wrongNumbers(numbers));
        res();
      });
      handleWrongNumber.then(() =>
        delay(120).then(() => setNumbers(returnNumbers(numbers)))
      );
      setOrder(0);
    }
  };
  const returnGame = () => {
    setLevel(currentLevel);
    setScore(0);
    setTime(timePlay);
    setOrder(0);
    setResultList([]);
    createNewListNumber(currentLevel);
  };
  return {
    numbers,
    level,
    score,
    time,
    createNewListNumber,
    selectNum,
  };
};
