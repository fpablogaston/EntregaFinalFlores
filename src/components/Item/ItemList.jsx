
import { Link } from 'react-router-dom'


const Item = (props) => {
    return (
        <div className="card">
            <img src={props.productos.pictureUrl} className="card-img-top" alt=""/>
            <div>
                <h5 className="card-title"> {props.productos.tittle} </h5>
                <p className="card-text">   {props.productos.description} </p>
                <p className="card-text">   ${props.productos.price} </p>
            </div>
            <button className="btn btn-primary"> <Link to={`/item/${props.productos.id}`}/> Ver productos </button>
        </div>
    )
}

export default Item