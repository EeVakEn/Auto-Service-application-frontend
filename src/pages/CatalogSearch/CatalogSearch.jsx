import './CatalogSearch.sass';

import {Product} from './../../components';
import {searchSvg} from './../../assets/icons';
import React,{useEffect, useState}  from "react";

function CatalogSearch(props) {

    const  [products, setProducts] = useState([]);
    const  [visible, setVisible] = useState([6]);

    const showMoreProducts = () => {
        setVisible(prevValue => prevValue + 6)
    }
    useEffect(()=>{
            setProducts(props.products)},[]);

    //живой поиск
    const [input, setInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    }
    let prod = props.products;
    console.log(props.products)
    if(input.length>0){
        prod = prod.filter((i) => {
            return (i.title + i.category).toLowerCase().match(input.toLowerCase());
        })
    }

    return (
        <div className="content">
            <div className="header_bg"></div>
            <div className="catalog">
                <div className="container">
                    <h2 className="title">Каталог автозапчастей * {input}</h2>
                    <form className="search">
                        <input type="text" className="search_input" placeholder="Поиск" value={input} onChange={handleChange}/>
                        <button type="submit" className="search_button"><img src={searchSvg} alt=""/></button>
                    </form>
                    <div className="catalog_items">
                        {prod.slice(0, visible).map((product, i) => <Product key={i} product={product}/>)}
                    </div>
                    <div className="show_more_btn_div">
                        <button id="show_more_btn" onClick={showMoreProducts} >
                            Показать еще
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CatalogSearch