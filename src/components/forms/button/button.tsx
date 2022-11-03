import { component$, Slot } from "@builder.io/qwik";
import { buttonRecipe, ButtonVariants } from "./button.css";

export default component$(
  ({
    variant = "primary",
    size = "md",
    className,
  }: ButtonVariants & {
    className?: string;
  }) => {
    return (
      <button class={[className, buttonRecipe({ variant, size })].join(" ")}>
        <Slot />
      </button>
    );
  }
);
