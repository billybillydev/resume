import { AlpineProps } from "@common/props";
import { HTMLAttributes, HTMLTag } from "astro/types";

export type LinearGradientDefsProps = AlpineProps &
  HTMLAttributes<"defs"> & {
    applyDefsId: string;
    color?: {
      empty: string;
      fill: string;
    };
    percentageValue: number;
  };

export type RatingsProps = HTMLAttributes<"div"> &
  AlpineProps & {
    nb?: number;
    value: number;
    max?: number;
    size?: number;
    icon?: HTMLTag;
    color?: {
      empty: string;
      fill: string;
    };
  };
