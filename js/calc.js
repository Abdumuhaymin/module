export const x = (num, sy, num2) => {
  if (sy === "+") {
    return num + num2;
  } else if (sy === "-") {
    return num - num2;
  } else if (sy === "*") {
    return num * num2;
  } else {
    return num / num2;
  }
};
