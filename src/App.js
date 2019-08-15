import React from 'react'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Component/Navbar'
import ProductList from './Component/ProductList'
import Details from './Component/Details'
import Cart from './Component/Cart/Cart'
import Default from './Component/Default'
import Modal from './Component/Modal'

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={ProductList}></Route>
                    <Route path='/details' component={Details}></Route>
                    <Route path='/cart' component={Cart}></Route>
                    <Route component={Default}></Route>
                    <Route path='/default' component={Default}></Route>
                </Switch>

                <Modal />
            </React.Fragment>
        )
    }
}
export default App 