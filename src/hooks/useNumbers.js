import { useState, useEffect } from "react";
import {
  randomIntFromInterval,
  delay,
  wrongNumbers,
  returnNumbers,
  sortListNum,
} from "./func";
import { timePlay, currentLevel, bonusTime } from "./constance";
import sound from './playerSound'
import { useNavigation } from '@react-navigation/native';

export default (initialValue) => {
  const [numbers, setNumbers] = useState([]);
  const [level, setLevel] = useState(currentLevel);
  const [time, setTime] = useState(timePlay);
  const [score, setScore] = useState(0);
  const [resultList, setResultList] = useState([]);
  const [order, setOrder] = useState(0);
  const {playFailSound, playScoreSound} = sound();
  const navigation = useNavigation();
  useEffect(() => {
    createNewListNumber(level);
  }, []);
  
  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
    if (time === 0) {
      setTime(0);
      if(score>0){
        navigation.navigate("Game Over",{score})
      } else{
        returnGame()
      }
    }
    return () => clearInterval(timer);
  }, [time]);
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
      playScoreSound();
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
        playFailSound()
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
    setOrder(0);
    setTime(timePlay)
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
    returnGame
  };
};
