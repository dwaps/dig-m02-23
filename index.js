const highAndLow = numbers => {
  const arr = numbers.split(' ');
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
};

console.log(
  highAndLow("1 9 3 4 -5")
)