module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        gray: '#F6F6F6',
        purple: '#6E49B3',
        green: '#00FF93',
        ash: '#272727'
      }
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-triangle-after')({
      triangles: {
        select: {
          color: '#6E49B3',
          direction: 'up',
          size: [100, 68]
        },
        next: {
          color: '#6E49B3',
          direction: 'left',
          right: '2rem',
          top: '3rem',
          size: 100
        }
      }
    })
  ]
}
