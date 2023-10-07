import { AlpineProps, VariantColorProps } from "@common/props";
import { HTMLAttributes } from "astro/types";
import { BadgeType } from "./types";

export type BadgeProps = AlpineProps &
  VariantColorProps &
  HTMLAttributes<"div"> & {
    text?: string;
    type?: BadgeType;
  };
