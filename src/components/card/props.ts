import { AlpineProps } from "@common/props";
import { ImageType, ThemeColorType } from "@common/types";
import { CardPositionType } from "@components/card/types";
import { HTMLAttributes, HTMLTag } from "astro/types";

export type CardBodyControl =
  | {
      label: string;
      variant?: ThemeColorType;
      action?: string;
    }
  | { html: string }
  | { component: HTMLTag };

export type CardImageProps = AlpineProps & HTMLAttributes<"img"> & {};

export type CardBodyProps = AlpineProps &
  HTMLAttributes<"div"> & {
    title?: string;
    text?: string;
    texts?: string[];
    controls?: CardBodyControl[];
  };

export type CardProps = AlpineProps &
  HTMLAttributes<"div"> & {
    position?: CardPositionType;
    image?: ImageType;
    title?: string;
    text?: string;
    texts?: string[];
    controls?: CardBodyControl[];
  };
