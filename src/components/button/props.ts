import { AlpineProps, SizeProps, VariantColorProps } from "@common/props";
import { BorderRadiusType } from "@common/types";
import { HTMLAttributes } from "astro/types";

export type ButtonProps = HTMLAttributes<"button"> &
  AlpineProps &
  VariantColorProps &
  SizeProps & {
    text?: string;
    borderRadius?: BorderRadiusType;
  };
