import { AlpineProps } from "@common/props";
import { DirectionType, ImageType, PositionType } from "@common/types";
import { HTMLAttributes } from "astro/types";

export type CarouselNavigationsProps = {
  direction: DirectionType;
};

export type CarouselIndicatorsProps = {
  indicator?: boolean | PositionType;
};

export type CarouselProps = AlpineProps &
  HTMLAttributes<"div"> & {
    slides?: ImageType[] | Record<string, unknown>[];
    loop?: boolean;
    indicator?: boolean | PositionType;
    direction?: DirectionType;
    hideNavigations?: boolean;
    slidesToShow?: number;
  };
