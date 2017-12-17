import React from "react";

const TextInput = ({emptyField,reviewChangeHandler,item:{name,currentReview},index})=>{
		const textAreaStyle = {margin:"auto",fontSize:"20px",display:"block"};
	return(
		<textarea cols={60} rows={20} 
			onChange={({target:{value}})=>{value.endsWith("\n")?
			(confirm("would you like to submit?")?emptyField(name):null):null;
			reviewChangeHandler(value,index)}} 
			style={textAreaStyle}
			placeholder={" write your review here "}
			value={currentReview}/>
		)
}

export default TextInput		