import './Product.sass'
import {Link} from "react-router-dom";

function Product ({product}){
    const {id, img, alt, title, price} = product;

    return (

        <div key={id} className="product">
            <img src={img} alt = {alt} className="product-img"/>
            <div className="product-title"> {title} </div>
            <Link to={`/search/${id}`}>
                <button className="product-button">от {price} ₽</button>
            </Link>
        </div>

    )

}
export default Product;