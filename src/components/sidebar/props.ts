import { PositionType } from "@common/types";
import { HTMLAttributes, HTMLTag } from "astro/types";

export type SidebarTriggerProps = HTMLAttributes<"div"> & {
  as?: HTMLTag;
};

export type SidebarContentProps = HTMLAttributes<"div"> & {
  selector?: string;
  title?: string;
  position?: PositionType;
};
