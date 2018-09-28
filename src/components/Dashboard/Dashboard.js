import React, {Component} from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component{
    constructor(){
        super();
        this.state={
            dashboard: 'Dashboard'
        }
    }
    render(){
        console.log(this.props)
        var products=this.props.products.map((product)=>{
            return( 
                <Product name={product.name}
                price={product.price}
                img={product.img}
                />
            )
        })
        return(
            <div>
                {this.state.dashboard}
                {products}


                
            </div>
        )
    }
}