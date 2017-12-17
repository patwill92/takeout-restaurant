export const updateMenu = (state,mapFunction)=>{
	const clientMenu = state.clientMenu.map(mapFunction);
return {...state,clientMenu}
}