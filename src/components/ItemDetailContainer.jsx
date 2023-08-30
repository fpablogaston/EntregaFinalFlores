import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import ItemListContainer from "./ItemListContainer"

export default function ItemDetailContainer() {
    const [detail, setDetail] = useState({})
    const {id} = useParams()

    useEffect(() => {
        console.log(id)
    }, [id])

    return (
        <div> ItemDetailContainer </div>
    )
} 
