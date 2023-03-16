
type CSSModule = Record<string, string>
type Mapping = Record<string, string>

declare module '*.svg?inline' {
  const content: any
  export default content
}

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.css' {

  const styles: CSSModule
  export default styles
}

declare module '*.module.css' { const mapping: Mapping; export default mapping }

declare global {
  namespace JSX {
    interface HTMLAttributes {
      styleName?: string
    }

    interface SVGAttributes {
      styleName?: string
    }
  }
}
