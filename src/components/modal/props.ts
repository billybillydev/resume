import { ModalContentType } from "@components/modal/types";
import { HTMLAttributes, HTMLTag } from "astro/types";

export type ModalTriggerProps = HTMLAttributes<"div"> & {
  as?: HTMLTag;
};

export type ModalContentProps = HTMLAttributes<"div"> & {
  selector?: string;
  type?: ModalContentType;
};
