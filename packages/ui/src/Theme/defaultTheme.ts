export const defaultTheme: ThemeInterface = {
  boxShadow: "10px 10px 20px 0 rgba(100, 100, 100, 0.1)",
  borderRadius: "10px",
  colorBackground: "#f8f9fd",
  colorLabel: "#b1bbc4",
  colorPrimary: "#F35680",
  colorSecondary: "#0085ff",
  colorShadow: "rgba(200, 200, 200, 0.1)",
  colorTertiary: "#afb2cb",
  colorText: "#1b2d41",
  colorTile: "#fff",
  fontBold: 700,
  fontExtraBold: 900,
  fontNormal: 400,
  paddingL: "20px",
  paddingM: "10px",
  paddingS: "5px",
  paddingXL: "40px",
  paddingXS: "3px",
  textL: "1.75rem",
  textM: "1.125rem",
  textS: "0.875rem",
  textXL: "2.25rem",
  textXS: "0.625rem",
  flexCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexBetween: `
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  flexAround: `
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,
}

export interface ThemeInterface {
  boxShadow: string
  borderRadius: string
  colorBackground: string
  colorLabel: string
  colorPrimary: string
  colorSecondary: string
  colorShadow: string
  colorTertiary: string
  colorText: string
  colorTile: string
  fontBold: number
  fontExtraBold: number
  fontNormal: number
  paddingL: string
  paddingM: string
  paddingS: string
  paddingXL: string
  paddingXS: string
  textL: string
  textM: string
  textS: string
  textXL: string
  textXS: string
  flexCenter: string
  flexBetween: string
  flexAround: string
}
