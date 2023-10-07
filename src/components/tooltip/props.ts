import { AlpineProps, SizeProps } from "@common/props";
import { ThemeColorType } from "@common/types";
import { TooltipPositionType } from "@components/tooltip/types";
import { HTMLTag } from "astro/types";

export type TooltipProps = AlpineProps &
  SizeProps & {
    text?: string;
    html?: string;
    type?: ThemeColorType;
    position?: TooltipPositionType;
    component?: HTMLTag;
    triggerOnHover?: boolean;
  };
