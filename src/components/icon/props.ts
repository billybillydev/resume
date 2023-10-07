import { AlpineProps, HTMLClassProps } from "@common/props";
import { SVGProps } from "@components/svg/props";

export type IconProps = Omit<SVGProps, "viewBox"> &
  AlpineProps & {
    size?: number;
    applyDefsId?: string;
  };
