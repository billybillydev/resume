import { InputProps } from "@components/input/props";
import { SelectProps } from "@components/select/props";
import {
  TableFilterOperatorType,
  TableHeadColumnType,
  TableSelectFilterOperatorOptionType,
} from "@components/table/types";
import { HTMLAttributes } from "astro/types";

export type TableSearchFilterProps = InputProps & {
  key: string;
  operator: TableFilterOperatorType;
};

export type TableSelectFilterProps = SelectProps & {
  key: string;
  items: TableSelectFilterOperatorOptionType[];
};

export type TableHeadProps = HTMLAttributes<"div"> & {
  columns: TableHeadColumnType[];
};
export type TableBodyProps = HTMLAttributes<"div"> & {
  items?: unknown[];
};

export type TableProps = HTMLAttributes<"div"> & {
  columns?: TableHeadColumnType[];
  items?: unknown[];
  theadClass?: string;
  tbodyClass?: string;
};
