import "styled-components";
import { KiwiTheme } from "./theme";

declare module "styled-components" {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends KiwiTheme {}
}
