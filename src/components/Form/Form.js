import React, {Component} from 'react'


export default class Form extends Component{
    constructor(){
        super();
        this.state={
            form: 'Form'
        }
    }
    render(){
        return(
            <div>
                {this.state.form}
            </div>
        )
    }
}