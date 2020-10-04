export const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));
export const wrongNumbers = (arr) => {
  return arr.map((el) => {
    return {
      content: el.content,
      status: 0,
    };
  });
};
export const returnNumbers = (arr) => {
  return arr.map((el) => {
    return {
      content: el.content,
      status: 2,
    };
  });
};
export const sortListNum = (arr) => {
  return arr.sort((a, b) => {
    return a - b;
  });
};
