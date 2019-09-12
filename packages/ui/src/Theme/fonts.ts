export interface Font {
  weight: {
    thin: number
    normal: number
    semiBold: number
    bold: number
    extraBold: number
  }
  letterSpacing: {
    sm: string
    md: string
    lg: string
  }
  size: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    "2xl": string
    "3xl": string
    "4xl": string
    "5xl": string
    "6xl": string
  }
}

export const font: Font = {
  weight: {
    thin: 200,
    normal: 400,
    semiBold: 600,
    bold: 700,
    extraBold: 900,
  },
  letterSpacing: {
    sm: "0.5px",
    md: "0.8px",
    lg: "1px",
  },
  size: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
}
