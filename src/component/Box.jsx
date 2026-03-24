import React from 'react'

const Box = (props) => {
    //console.log("props :", props);
    console.log(props.title, props.result);
    const result = props.title === "You" ? props.result : props.result === "win" ? "lose" : props.result === "lose" ? "win" : "tie";
    //const box = props.title === "You" ? props.result : props.result === "win" ? "lose" : props.result === "lose" ? "win" : "tie";

    return (
        <div className={props.result && `box ${result}`}>
            <h2> {props.title} </h2>
            <img className="item-img" src ={props.item && props.item.img}></img>
            <h2> {props.result && result} </h2>
        </div>
    )
}

export default Box