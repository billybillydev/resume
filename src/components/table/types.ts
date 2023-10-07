import { HTMLTag } from "astro/types";

export type TableSortingOrderType = "ASC" | "DESC" | "";

export type TableSortingType = "STRING" | "NUMBER";

export type TableFilterType = "search" | "select" | "multiple-select";

export type TableSearchFilterType = {
  type: "search";
  operator: TableFilterOperatorType;
  placeholder?: string;
};

export type TableSelectFilterOperatorOptionType = {
  label: string;
  value: string | number;
  operator?: TableFilterOperatorType;
};

export type TableSelectFilterType = {
  type: "select" | "multiple-select";
  placeholder?: string;
  operators: TableSelectFilterOperatorOptionType[];
};

export type TableFilterOperatorType =
  | "Like"
  | "Equal"
  | "LesserThan"
  | "LesserThanOrEqual"
  | "GreaterThan"
  | "GreaterThanOrEqual"
  | "In"
  | "NotEqual"
  | "NotLike"
  | "NotIn";

export type TableHeadColumnType = {
  key: string;
  label: string;
  sort?: TableSortingType;
  filter?: TableSearchFilterType | TableSelectFilterType;
};

export type TableBodyCellContentTextType = { text: string | number };
export type TableBodyCellContentHTMLType = { html: string };
export type TableBodyCellContentComponentType = { component: HTMLTag };

export type TableBodyCellType =
  | TableBodyCellContentTextType
  | TableBodyCellContentHTMLType
  | TableBodyCellContentComponentType;

export type TableBodyItemRowType = {
  [key: string]: TableBodyCellType;
};
