import './Catalog.sass';

import { CatalogItem } from '../../components';
import { searchSvg } from '../../assets/icons';


function Catalog(props) {

    return (
        <div className="content">
            <div className="header_bg"></div>
            <div className="catalog">
                <div className="container">
                    <h2 className="title">Каталог автозапчастей</h2>
                    <form class="search">
                        <input type="text" className="search_input" placeholder="Поиск" />
                        <button type="submit" className="search_button"><img src={searchSvg} alt="" /></button>
                    </form>
                    <div className="catalog_items">
                        {props.items.map((item) => <CatalogItem item={item}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalog;