import { AlpineProps } from "@common/props";
import { ThemeColorType } from "@common/types";
import { HTMLAttributes } from "astro/types";

export type ProgressProps = HTMLAttributes<"div"> &
  AlpineProps & {
    value?: number;
    duration?: number;
    interval?: number;
    themeColor?: ThemeColorType;
    noAnimation?: boolean;
  };
