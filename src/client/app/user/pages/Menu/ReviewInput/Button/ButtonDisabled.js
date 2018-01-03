import React from "react";

const Button = ({children,clicked,toDisable})=>{

	return(
			<button disabled onClick={clicked}>
				{children}
			</button>

		)
}

export default Button