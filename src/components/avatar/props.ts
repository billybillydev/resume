import { AlpineProps } from "@common/props";
import { ImageType, SpecificSizeType, ThemeColorType } from "@common/types";
import { HTMLAttributes } from "astro/types";

export type AvatarProps = AlpineProps &
  HTMLAttributes<"div"> & {
    image?: ImageType;
    fallbackText?: string;
    color: ThemeColorType | { background: string; text: string };
    size?: SpecificSizeType;
  };
