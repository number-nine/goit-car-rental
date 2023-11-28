export const createEnumOptions = (min, max, step) => {
  const options = [];
  const lowest = Math.trunc(min / step) * step;
  const bigest = Math.ceil(max / step) * step;

  for (let i = lowest; i <= bigest; i = i + step) {
    options.push(i);
  }
  return options;
};

