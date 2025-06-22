
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       
       keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 0.8s ease-out forwards',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideInRight: 'slideInRight 0.8s ease-out forwards',
      },
       keyframes: {
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: '7ch' }, 
        },
      
      },
      animation: {
        typing: 'typing 1s steps(23) forwards',
    
         smoothTyping: 'smoothTyping 2s ease forwards',
      },
      
     
    },
  },
  plugins: [],
}