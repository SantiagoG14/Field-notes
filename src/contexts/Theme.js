import { ThemeProvider } from "styled-components"
export function Theme({ children }) {
  const theme = {
    colors: {
      subText: "#857B7B",
      accent: "#CDA351",
      authBg: "#D8CFBE",
    },

    fonts: {
      primary: "Inter",
    },
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
