import gray from 'gray-percentage'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

const theme = {
  title: 'Land of Here',
  baseFontSize: '20px',
  baseLineHeight: 1.62,
  scaleRatio: 3,
  googleFonts: [
    {
      name: 'Source Sans Pro',
      styles: ['200', '600', '900'],
    },
    {
      name: 'Crimson Pro',
      styles: ['400', '700'],
    },
  ],
  headerFontFamily: ['Source Sans Pro', 'sans-serif'],
  bodyFontFamily: ['Crimson Pro', 'serif'],
  headerColor: 'hsla(0,0%,0%,1)',
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: 200,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      textDecoration: 'none',
    },
    'a:hover,a:active': {
      color: options.bodyColor,
    },
    h1: scale(4 / 4),
    h2: scale(3 / 4),
    h3: { ...scale(2 / 4), fontWeight: 400 },
    h4: { ...scale(5 / 12), fontWeight: 700 },
    h5: { ...scale(4 / 12), fontWeight: 700 },
    h6: { ...scale(3 / 12), fontWeight: 900 },
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      paddingLeft: rhythm(18 / 16),
      marginLeft: 0,
      borderLeft: `${rhythm(6 / 16)} solid`,
      borderColor: '#fcea0e',
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    [MOBILE_MEDIA_QUERY]: {
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        borderLeft: `${rhythm(3 / 16)} solid`,
        borderColor: '#fcea0e',
        paddingLeft: rhythm(9 / 16),
      },
    },
  }),
}

export default theme
