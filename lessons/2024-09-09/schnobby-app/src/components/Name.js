import React from "react"

/*
const Name = () => {
    return <h1>Miski Nimi</h1>
}
 */

/*
const Name = (props) => {
    if(props.title) {
        return <h1>{ {props.title} }</h1>;
    } else if(props.name) {
        return <h1>{ props.name }</h1>;
    } else {
        return <h1>Miski Nimi</h1>;
    }
}
 */

const Name = ({ name }) => {
  if (name) {
    return <h1>Hello {name}</h1>
  } else {
    return <h1>Hello World</h1>
  }
}

export default Name
