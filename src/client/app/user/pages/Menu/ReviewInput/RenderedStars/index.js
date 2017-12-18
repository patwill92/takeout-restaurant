import React from "react";
import {connect} from "react-redux"
import Icon from '../../../../../components/Icon'
import {changeMouseOverStars,changeStars} from "../../../../../../actions";
import {whichStar} from "../../util";
import withStyles from 'react-jss';
import Radium from 'radium';

const styles = {
	    	':hover': {
            cursor: 'pointer'
        },
        'display': 'inline-block',
        'margin':'5px'
};

const RenderedStars = (
	{item:{name,mouseOverStarAmount,starAmount},
	changeMouseOverStars,changeStars})=>{
	return(
				<div>{[1,2,3,4,5].map((num)=>(
					<div style={styles} 
						key={num+name}
						onMouseEnter={()=>{changeMouseOverStars(num,name)}}
						onMouseLeave={()=>changeMouseOverStars(0,name)}
						onClick={()=>changeStars(num,name)}
					>
					<Icon
						 color={mouseOverStarAmount?
			      	(mouseOverStarAmount>=num?
			      		whichStar(mouseOverStarAmount):""):
			      	starAmount>=num?whichStar(starAmount):""}
			       name='star'
			       loose
			       size={30}/>
					</div>
	
		))}</div>)
}

export default connect(null,{changeMouseOverStars,changeStars})(Radium(RenderedStars))		
