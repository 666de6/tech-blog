/*
 * @Author: Ada J
 * @Date: 2023-09-11 14:52:42
 * @LastEditTime: 2023-10-14 17:03:07
 * @Description: 
 */

const { fdatasyncSync } = require('fs');
const { decodedTextSpanIntersectsWith } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'typing-first': {
          '0%': { 'width': 0, 'border': 'none', 'border-right': '6px solid orange'},
          '99.9%': {'border-right': '6px solid orange'},
          '100%': {'border': 'none'}
        },
        'typing-middle': {
          '0%': { 'width': 0, 'opacity': 1, 'border': 'none', 'border-right': '6px solid orange'},
          '99.9%': {'border-right': '6px solid orange'},
          '100%': {'opacity': 1,'border': 'none'}
        },
        'typing-last': {
          '0%': { 'width': 0, 'opacity': 1},
          '99.9%': {'border-right': '6px solid orange'},
          '100%': {'opacity': 1}
        }, 
        'blink': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'orange' }
        }
         
      },
      animation: {
        'type-wrap': 'typing-first 3s steps(30, end);',
        'type-mid': 'typing-middle 3s steps(30, end);',
        'type-norm': 'typing-last 3s steps(30, end), blink .5s step-end infinite;'

      },
      animationDelay: {
        3000: '3s',
        6000: '6s',
        9000: '9s',
        12000: '12s',
        15000: '15s'
      },
    },
    screens: {
      'max-md': {'max': '767px'},
      'min-md': '768px'
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

