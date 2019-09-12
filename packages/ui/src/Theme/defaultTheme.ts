import { colors, Colors } from "./colors"
import { font, Font } from "./fonts"
import { helpers, Helpers } from "./helpers"
import { radii, Radii } from "./radii"
import { shadows, Shadows } from "./shadows"
import { space, Space } from "./space"

export interface ThemeInterface {
  colors: Colors
  font: Font
  helpers: Helpers
  radii: Radii
  shadows: Shadows
  space: Space
}

export const defaultTheme: ThemeInterface = {
  colors,
  font,
  helpers,
  radii,
  shadows,
  space,
}
