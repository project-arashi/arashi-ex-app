import "styled-components/native";
import theme from "./theme";
export type Theme = typeof theme;

export declare module "styled-components/native" {
  export interface DefaultTheme extends Theme {}
}