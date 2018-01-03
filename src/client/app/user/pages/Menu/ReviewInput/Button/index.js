import React from "react";

const Button = ({children,clicked,className})=>{

	return(
			<button className={className} onClick={clicked}>
				{children}
			</button>

		)
}

export default Button	