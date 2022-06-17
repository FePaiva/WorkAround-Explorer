function formatNumber(num) {
  let stringNum = String(Math.floor(num));

  for (let i = stringNum.length - 3; i > 0; i -= 3) {
    stringNum = stringNum.slice(0, i) + "," + stringNum.slice(i);
  }
  return stringNum;
}
export default formatNumber;
