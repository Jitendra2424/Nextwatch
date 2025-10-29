import React from 'react'

const CartContext = React.createContext({
  isdarktheme: false,
  savedvideos: [],
  addtosavevideos: () => {},
  activetabitem: () => {},
  activetab: '',
  onChangeTheme: () => {},
  removesavedvideos: () => {},
})

export default CartContext
