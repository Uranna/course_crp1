import '@emotion/react'
import { theme } from '.';

declare module '@emotion/react' {
  export type Theme  = typeof theme;
}