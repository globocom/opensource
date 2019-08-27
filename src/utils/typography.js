import Typography from 'typography'

const openSourceTheme = {
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  bodyWeight: '400',
  bodyFontFamily: ['Open Sans', 'serif'],
  headerFontFamily: ['Open Sans', 'serif'],
  headerWeight: '700',
  googleFonts: [
    {
      name: 'Open Sans',
      styles: ['300,400,600,700'],
    },
  ],
}

const typography = new Typography(openSourceTheme)

export default typography
