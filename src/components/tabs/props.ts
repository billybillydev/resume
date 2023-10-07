import { HTMLClassProps, HTMLStyleProps } from "@common/props";
import { DirectionType } from "@common/types";

export type TabHeaderItemProps = HTMLClassProps &
  HTMLStyleProps & {
    title?: string;
  };
export type TabHeaderProps = HTMLClassProps & HTMLStyleProps & {};
export type TabBodyProps = HTMLClassProps & HTMLStyleProps & {};
export type TabBodyItemProps = HTMLClassProps & HTMLStyleProps & {};
export type TabsProps = HTMLClassProps &
  HTMLStyleProps & {
    direction?: DirectionType;
  };
