let getHomePage = (req, res) => {
	return res.render("./home.ejs");
};
let getShopPage = (req, res) => {
	return res.render("./shop.ejs");
};

module.exports = {
	getHomePage,
	getShopPage,
};
