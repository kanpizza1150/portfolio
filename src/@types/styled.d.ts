import {} from 'styled-components'
import { CSSProp } from 'styled-components'
declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject
  }
  type Theme = typeof theme
  export interface DefaultTheme extends Theme {
    fg: string
  }
}
