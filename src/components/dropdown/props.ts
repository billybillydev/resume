import { AlpineProps, HTMLClassProps, HTMLStyleProps } from "@common/props";
import { PositionType } from "@common/types";
import { HTMLAttributes } from "astro/types";

export type DropdownTriggerProps = HTMLAttributes<"div"> & AlpineProps & {};
export type DropdownContentProps = HTMLAttributes<"div"> &
  AlpineProps & {
    position?: PositionType;
  };
export type DropdownProps = HTMLAttributes<"div"> &
  AlpineProps & {
    position?: PositionType;
    duration?: number;
  };
