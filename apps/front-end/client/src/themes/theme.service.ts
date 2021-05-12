import { createMuiTheme } from '@material-ui/core/styles'

import { ukraineLanguage } from './localization.module'
import paletteOptions from './palette.module'
import typographyOptions from './typography.module'
import breakpointOptions from './breakpoints.module'
import { spacingOptions } from './spacing.module'
import { shadowsOptions } from './shadows.module'
import propsOptions from './props.module'

// Read more at https://material-ui.com/customization/themes
const theme = createMuiTheme(
  {
    palette: paletteOptions,
    typography: typographyOptions,
    breakpoints: breakpointOptions,
    spacing: spacingOptions,
    shadows: shadowsOptions,
    props: propsOptions
  },
  ukraineLanguage
)

export { theme }
