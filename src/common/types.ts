import { tailwindThemeConfig } from "@config/design";
import { HTMLAttributes } from "astro/types";

export type ThemeColorType =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "info"
  | "warning";

export type SizeType = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export const specificSizes = [
  ...Object.keys(tailwindThemeConfig.width),
] as const;
export type SpecificSizeType = typeof specificSizes;

export type VariantColorType = "solid" | "outlined" | "inversed";

export type BorderRadiusType =
  | "square"
  | "curve"
  | "arc"
  | "rounded"
  | "pill"
  | "circle";

export type ImageType = Pick<
  HTMLAttributes<"img">,
  | "src"
  | "alt"
  | "width"
  | "height"
  | "style"
  | "class"
  | "class:list"
  | "id"
  | "srcset"
  | "loading"
>;

export type PositionType = "top" | "bottom" | "left" | "right";

export type DirectionType = "horizontal" | "vertical";

export type DateFormatType =
  | "MMMM d, YYYY"
  | "M d, YYYY"
  | "MM-dd-YYYY"
  | "dd-MM-YYYY"
  | "YYYY-MM-dd"
  | "MM/dd/YYYY"
  | "dd/MM/YYYY"
  | "YYYY/MM/dd"
  | "D d M YYYY"
  | "DDDD d M YYYY"
  | "DDDD d MMMM YYYY";

export type CalendarType = "gregorian" | "kongo";
