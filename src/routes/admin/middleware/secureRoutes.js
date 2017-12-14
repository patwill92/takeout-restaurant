export const adminOnly = (req, res, next) => {
    if(req.user && req.user.admin) {
        next()
    } else {
        return res.redirect('/error')
    }
};