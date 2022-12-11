import React from "react";
// (3 creating header)

function Header({text,backgroundColor,color}){


    return(<h2 style={{backgroundColor,color}}> {text } </h2>)

}

Header.defaultProps = {
    text: "Feedback App",
    backgroundColor : "#0D6EFD",
    color: "#FFC107"
}

export default Header

