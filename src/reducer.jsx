const reducer = (state, action) => {
 if(action.type === 'CLEARCART'){
    return{...state, cart:[] }

 }
 if(action.type === 'REMOVE'){
    return{...state,
        cart:state.cart.filter((cartList) => cartList.id !== action.payload)
    }
 }

 if (action.type === 'INCREASE'){
    const tempCart = state.cart.map((cartbag) => {
        if(cartbag.id === action.payload){
            return{...cartbag, amount:cartbag.amount + 1}
        }
        return cartbag
    })
    return{...state , cart: tempCart}
 }
 if (action.type === 'DECREASE') {
  let tempCart = state.cart.map((cartItems) => {
    if(cartItems.id === action.payload){
      return {...cartItems, amount: cartItems.amount - 1}
    }
    return cartItems
  }).filter((cartItems) => cartItems.amount !== 0)
  return {...state, cart: tempCart }
 }

 if (action.type === 'LOADING'){
  return{...state, loading: true}
 }

 if (action.type === 'DISPLAY_ITEMS'){
  return{...state, cart: action.payload,loading:false}

 } 
//  if(action.type === ' GET_TOTALS'){
//   let {total , amount} = state.cart.reduce( 
//     (cartTotal, cartItem) =>{
//       const {price, amount} = cartItem
//       const itemTotal = price * amount

//       cartTotal.total += itemTotal;
//       cartTotal.amount += amount;

//       return cartTotal
//     },
//     {
//       total: 0,
//       amount: 0,
//     }
//      ) 
//      total = parseFloat(total.toFixed(2))

//      return{...state, total, amount}
//  }

if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem
        const itemTotal = price * amount

        cartTotal.total += itemTotal
        cartTotal.amount += amount
        return cartTotal
      },
      {
        total: 0,
        amount: 0,
      }
    )
    total = parseFloat(total.toFixed(2))

    return { ...state, total, amount }
  }

  

}
export default reducer