export const filterByLike = (key: string, value: string, items: unknown[]) => {
  return items.filter((item) =>
    item[key].text.toLowerCase().includes(value.toLowerCase())
  );
};

export const filterByNotLike = (
  key: string,
  value: string,
  items: unknown[]
) => {
  return items.filter(
    (item) => !item[key].text.toLowerCase().includes(value.toLowerCase())
  );
};

export const filterByEqual = (key: string, value: number, items: unknown[]) => {
  return items.filter((item) => Number(item[key].text) === value);
};

export const filterByNotEqual = (
  key: string,
  value: number,
  items: unknown[]
) => {
  return items.filter((item) => Number(item[key].text) !== value);
};

export const filterByLesserThan = (
  key: string,
  value: number,
  items: unknown[]
) => {
  return items.filter((item) => Number(item[key].text) < value);
};

export const filterByLesserThanOrEqual = (
  key: string,
  value: number,
  items: unknown[]
) => {
  return items.filter((item) => Number(item[key].text) <= value);
};

export const filterByGreaterThan = (
  key: string,
  value: number,
  items: unknown[]
) => {
  return items.filter((item) => Number(item[key].text) > value);
};

export const filterByGreaterThanOrEqual = (
  key: string,
  value: number,
  items: unknown[]
) => {
  return items.filter((item) => Number(item[key].text) >= value);
};

export const filterByIn = (
  key: string,
  values: (string | number)[],
  items: unknown[]
) => {
  return items.filter((item) => values.includes(item[key].text));
};

export const filterByNotIn = (
  key: string,
  values: (string | number)[],
  items: unknown[]
) => {
  return items.filter((item) => values.includes(item[key].text));
};
