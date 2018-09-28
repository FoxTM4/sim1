import React from 'react'

export default function (props){
    return(
        <div>
            {/* <h2>Add Products</h2>
            <input type= "text" onChange={props.handleNameInput} placeholder="name"/>
            <input type='text' onChange={props.handleImgInput} placeholder='Image'/>
            <input type='text' onChange={props.handlePriceInput} placeholder='$'/>
            <button onClick={props.createInput}>Add</button>
            <button onClick={props.cancelInput}>Cancel</button> */}

            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <img src={props.img}/>

        </div>
    )
}