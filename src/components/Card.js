import React from "react"

function Card(props){
    return(
        <div className="card">
            <img 
                src={require(`../images/${props.coverImg}`)} 
                className="card--image" 
                alt=""
            />
            <h3 className="card--title">{props.title}</h3>
            <p className="card--desc">{props.description}</p>
        </div>
    )
}

export default Card