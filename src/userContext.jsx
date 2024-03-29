import React, { useContext, useEffect, useReducer } from "react";
import Caritem from './Data'
import reducer from "./reducer";


const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext()

const initailState = {
    loading: false,
    cart:Caritem,
    total: 0,
    amount: 0
    
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initailState)

    const clearCart = () => {
        dispatch({type: 'CLEARCART'})
    }
    const remove = (id) => {
        dispatch({type: 'REMOVE', payload: id})
    }

    const increase = (id) => {
        dispatch({type: 'INCREASE',payload:id})
    }
     const decrease = (id) => {
        dispatch({type: 'DECREASE',payload:id})
    }
    
    const fetchData = async () => {
        dispatch({type: 'LOADING'})
        const response = await fetch(url);
        const users = await response.json()
        dispatch({type: 'DISPLAY_ITEMS', payload:users})
    }

   
    useEffect(()=> {
        fetchData()
    },[])

    useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])
  

    

   
    
    return (

        <AppContext.Provider
        value={{
            ...state,
            clearCart,
            remove,
            increase,
            decrease,
        }}>
            {children}

        </AppContext.Provider>
    )

}

export const useGlobalContext = () => {
    return useContext(AppContext)

}
export {AppContext, AppProvider}