import { TableSortingOrderType } from "@components/table/types";

export function sortByString(
  a: string,
  b: string,
  order?: TableSortingOrderType
) {
  if (order === "ASC") {
    return a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
  }
  if (order === "DESC") {
    return b.toLocaleLowerCase().localeCompare(a.toLocaleLowerCase());
  }
  return 0;
}
export function sortByNumber(
  a: number,
  b: number,
  order?: TableSortingOrderType
) {
  if (order === "ASC") {
    return a - b;
  }
  if (order === "DESC") {
    return b - a;
  }
  return 0;
}
