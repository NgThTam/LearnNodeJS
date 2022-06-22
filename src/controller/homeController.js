import connection from "../configs/connectDB";

let getHomePage = (req, res) => {
	connection.query("SELECT * FROM `user` ", (err, results, fields) => {
		let data = results.map((dt) => dt);
		// let UserName = [];
		// results.forEach((result) => {
		// 	UserName.push(result.lastName);
		// });
		return res.render("./home.ejs", { dataUser: data });
	});
};
let getShopPage = (req, res) => {
	return res.render("./shop.ejs");
};

module.exports = {
	getHomePage,
	getShopPage,
};
