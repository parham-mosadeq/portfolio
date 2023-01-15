export const cutString = ({ str, lng = 10 }) => {
  const newStr = str.slice(0, lng);
  return newStr;
};
