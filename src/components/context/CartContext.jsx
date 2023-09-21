import { createContext, useEffect, useState } from "react"

//creamos el contexto con createContext
export const CartContext = createContext()

//creamoss un componente para nuestro contexto

export const CartContextProvider = ({ children }) => {
    const [productos, setProductos] = useState([])
    const [cart, setCart] = useState([])
    const [totalCarrito, setTotalCarrito] = useState(0)
    const [user, setUser] = useState()

    const vaciarCarrito = () => {
        setCart([])
        setTotalCarrito(0)
    }

    /*useEffect (( ) => {
        setProductos(mockProductos)
    }, [])*/

    function App () { 
    return (  
    <CartContext.Provider value={{productos, setProductos, cart, setCart, totalCarrito,
            setTotalCarrito, vaciarCarrito, user, setUser}}>
                {children}
            </CartContext.Provider>
    )
}
}