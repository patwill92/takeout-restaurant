import React from "react";
import Hoc from "./hoc"

const Button = ({children,clicked,toDisable})=>{
	const styles = {
		button:{padding:"10px", margin:"15px"}
	}
	return(
			<button style={styles.button} disabled onClick={clicked}>
				{children}
			</button>

		)
}

export default Button		