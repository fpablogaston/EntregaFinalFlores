import { createContext, useState } from "react"


export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [productos, setProductos] = useState([])
    const [cart, setCart] = useState([])
    const [totalCarrito, setTotalCarrito] = useState(0)
    const [user, setUser] = useState()

    const vaciarCarrito = () => {
        setCart([])
        setTotalCarrito(0)
    }

    return (  
    <CartContext.Provider value={{productos, setProductos, cart, setCart, totalCarrito,
            setTotalCarrito, vaciarCarrito, user, setUser}}>
                {children}
            </CartContext.Provider>
    )
}
