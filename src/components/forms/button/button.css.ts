import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "~/styles/sprinkles.css";

export const buttonRecipe = recipe({
  base: sprinkles({
    display: "flex",
    lineHeight: "normal",
    borderRadius: "md",
    fontWeight: "semibold",
    transitionProperty: "common",
    transitionDuration: "normal",

    fontSize: "md",
    alignItems: "center",
  }),
  variants: {
    variant: {
      primary: sprinkles({
        background: "red-500",
        color: "white",
      }),
      secondary: sprinkles({
        background: "white",
        borderColor: "cyan-500",
      }),
    },
    size: {
      md: sprinkles({ height: 10, paddingX: 4, minWidth: 10 }),
      lg: sprinkles({ height: 12, paddingX: 5, minWidth: 11 }),
    },
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
