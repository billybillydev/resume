import { VariantColorProps } from "@common/props";
import { HTMLAttributes } from "astro/types";

export type AlertProps = HTMLAttributes<"div"> &
  VariantColorProps & {
    title: string;
  };
