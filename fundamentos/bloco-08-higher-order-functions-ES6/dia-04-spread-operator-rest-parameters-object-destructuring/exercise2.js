const sum = (...numbers) => {
  return numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

console.log(sum(4, 5, 6));

