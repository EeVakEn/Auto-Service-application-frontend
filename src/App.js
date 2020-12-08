import { Route } from 'react-router-dom';

import './app.sass';

import {Home, Catalog, CatalogSearch, ProductInfo, Authorization, Registration, Profile} from './pages';
import { Header, Footer } from './components';


function App(props) {
    return (
        <div className="app">
            <Header />
            <Route path="/" render={()=><Home/>} exact />
            <Route path="/shop" render={()=><Catalog items={props.state.items}/>} exact />
            <Route path="/search" render={()=><CatalogSearch products={props.state.products}/>} exact />
            <Route path="/search/:id" component={ProductInfo}  />
            <Route path="/authorization" render={()=><Authorization/>} exact />
            <Route path="/registration" render={()=><Registration/>} exact />
            <Route path="/profile" render={()=><Profile user={props.state.user} orders={props.state.orders} services={props.state.services}/>} exact />
            <Footer />
        </div>
    );
}

export default App;
