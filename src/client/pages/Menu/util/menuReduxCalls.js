export const loadDataForMenu = (fetchMenu,fetchMenuAdmin)=>{
	return async (mongoose) => {
        let menu = await mongoose.model('Item').find({available: true}).populate({
            path:'reviews',
            populate:{path:'user'}
        })
         menu = menu.map((menuItem)=>{return {
            "_id": menuItem._id,
            "itemName": menuItem.name,
            "category": menuItem.category,
            "description": menuItem.description,
            "price": menuItem.price,
            "available": menuItem.available,
            "image": menuItem.image,
            "reviews":menuItem.reviews.map(review=>{
                return {
                   reviewId:review._id,
                   userId:review.user._id,
                   userName:review.user.name,
                   content:review.content,
                   rating:review.rating 
                }
        })
        }});
    let adminMenu = menu
    return [
       {
            data: menu,
            func: fetchMenu
        },
        {
            data: adminMenu,
            func: fetchMenuAdmin
        }
    ]
};
}

export const mapStateToPropsForMenuComponent = ()=>{
	return ({menu: {clientMenu, adminMenu}, user}) => {
    return {
        clientMenu,
        adminMenu,
        user
    }
};
}