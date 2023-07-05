import { globalCss } from '@ignite-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active':
    {
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'white',
      transition: '#121214 5000s ease-in-out 0s',
      'box-shadow': 'inset 0 0 20px 20px #121214',
    },
})
